#!/bin/bash
rm -rf ./package/components
rm -rf ./package/assets
cp -R ./src/components/ ./package/components
cp -R  ./src/assets/ ./package/assets
