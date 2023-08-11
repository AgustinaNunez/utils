#!/bin/bash -eu

rm -rf docs
typedoc src/ --out docs
open-cli docs/index.html
