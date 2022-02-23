FOLDER=$1
BUILD=./dist/build
rm -rf $FOLDER || exit 0;
mkdir $FOLDER &&
cp -r ./dist/build/* $FOLDER &&
cp  $FOLDER/index.html $FOLDER/404.html &&
rm -rf ./dist/ &&
echo "$FOLDER CREATED"
