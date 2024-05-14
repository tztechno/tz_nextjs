npm init -y

npm install react react-dom next

docker-compose up --build

localhost:3000



------------------------------
```
 => ERROR [app 4/5] RUN npm install                                                                                     1.0s
------
 > [app 4/5] RUN npm install:
0.954 npm error code ENOENT
0.954 npm error syscall open
0.954 npm error path /app/package.json
0.954 npm error errno -2
0.957 npm error enoent Could not read package.json: Error: ENOENT: no such file or directory, open '/app/package.json'
0.957 npm error enoent This is related to npm not being able to find a file.
0.957 npm error enoent
0.958 
0.959 npm error A complete log of this run can be found in: /root/.npm/_logs/2024-05-14T11_10_30_958Z-debug-0.log
------
failed to solve: process "/bin/sh -c npm install" did not complete successfully: exit code: 254
```
