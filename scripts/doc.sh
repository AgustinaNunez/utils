#!/bin/bash -eu

rm -rf dist/docs
typedoc src/ --out dist/docs
open-cli dist/docs/index.html
