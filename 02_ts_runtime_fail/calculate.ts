import type { NextApiRequest, NextApiResponse } from 'next';
import vm from 'vm';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { inputData, functionCode } = req.body;
        const startTime = Date.now();

        try {
            // 入力データを準備
            const inputLines = inputData.split('\n');
            let inputIndex = 0;

            // 実行環境を設定
            const context = {
                input: () => inputLines[inputIndex++] || '',
                console: {
                    log: (...args: any[]) => context.output.push(args.join(' ')),
                },
                output: [] as string[],
            };

            // コードを実行
            const script = new vm.Script(`
        ${functionCode}
      `);
            const timeout = 9000; // 9秒のタイムアウト

            vm.createContext(context);
            script.runInContext(context, { timeout });

            const endTime = Date.now();
            const processTime = endTime - startTime;

            res.status(200).json({
                inputData,
                result: context.output.join('\n'),
                process_time: processTime,
            });
        } catch (error) {
            if (error instanceof Error && error.name === 'TimeoutError') {
                res.status(200).json({
                    error: '処理が9秒を超えたため強制終了しました',
                    result: '処理が9秒を超えたため強制終了しました',
                    process_time: 9000,
                });
            } 
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
