#!/bin/sh
DIR=$(dirname $(realpath "$0"))
git pull
sh $DIR/tag.sh &&/
git push origin master &&/
git push --tags