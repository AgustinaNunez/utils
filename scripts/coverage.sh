#!/bin/bash -eu

jest --coverage
open coverage/lcov-report/index.html || start coverage/lcov-report/index.html
