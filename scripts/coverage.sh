#!/bin/bash -eu

jest --coverage

# TODO: comandos probado para macosx, validar si para windows y linux funcionan
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    xdg-open coverage/lcov-report/index.html
elif [[ "$OSTYPE" == "darwin"* ]]; then
    open coverage/lcov-report/index.html
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    start coverage/lcov-report/index.html
else
    echo "Sistema operativo no compatible"
fi
