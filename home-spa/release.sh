#!/bin/sh
DIR=$(dirname $(realpath "$0"))
git pull
sh $DIR/tag.sh &&/
git push origin main &&/
git push --tags