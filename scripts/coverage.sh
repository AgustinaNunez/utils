#!/bin/bash -eu

jest --coverage
# TODO: open and start are Mac commands
open coverage/lcov-report/index.html || start coverage/lcov-report/index.html
