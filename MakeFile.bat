@echo off
:: Make File for Windows User, it copy all config values from the make_env
:: Currently it supports two params: "build" or "dev" i.e. .\MakeFile build
set arg1=%1
for /f "delims=" %%x in (make.env) do (set "%%x")
IF /I "%arg1%" EQU "build" (
  docker build --no-cache=true -t %DOCKER_NAMESPACE%/%DOCKER_REPOSITORY%:%DOCKER_IMAGE_VERSION% .
) ELSE IF /I "%arg1%" EQU "dev" (
  del "temp.json" 2>nul
  FOR /F "tokens=1* delims=" %%A in (.angular-cli.json) do (
      IF /I "%%A" == "    "component": {}" (
          ECHO %%A,>>"temp.json"
          ECHO     "POLL": 1000>>"temp.json"
      ) ELSE (
          ECHO %%A>>"temp.json"
      )
  )
  move /Y "temp.json" .angular-cli.json >nul
  docker run --rm --name myapp -i -t -p 4200:4200 -p 80:80 -p 443:443 -p 3000:3000 -v "%cd%/:/myapp" -e NODE_ENV=development -e NODE_PORT=80 -e ORIGIN=http://localhost:4200 mynamespace/myapp:latest /bin/bash -c "npm install && npm run socket-serve && npm start"
) ELSE (
  ECHO No command found: build / dev
)
