#!/bin/bash -eu

version=$(node -p "require('./package.json').version")
git tag -d v$version
git tag -a v$version -m "Versión $version"
git push origin v$version
