#!/bin/bash
set -e

# !!!发布前需要修改chameleon.config.js 的 public path

# 当前目录
BD_BIN="${BASH_SOURCE-$0}"
BD_BIN="$(dirname "${BD_BIN}")"
BD_BIN="$(cd "${BD_BIN}"; pwd)"
# 项目仓库根目录
PROJECT_ROOT="${BD_BIN}"

#PROJECT NAME
PROJECT_NAME="cml-demo"

PLATFORM=$1
DIST_FOLDER="$PROJECT_ROOT/dist/$PLATFORM"
DIST_FOLDER_STATIC="$DIST_FOLDER/static"


# build
echo "build $PLATFORM"
cml $PLATFORM build

# 发布 entry
echo "publish $PLATFORM entry"
didiup -d $DIST_FOLDER -c $PROJECT_NAME/$PLATFORM

# 目录名存入数组
j=0
for file in $DIST_FOLDER_STATIC/*; do
{
    static_folder_list[j]=${file##*/}
    j=`expr $j + 1`
}
done

for((i=0;i<${#static_folder_list[*]};i++))
do
{
    sub=${static_folder_list[$i]}
    # 发布 static
    echo "publish $PLATFORM static/$sub"
    didiup -d $DIST_FOLDER_STATIC/$sub -c $PROJECT_NAME/$PLATFORM/static/$sub
} &
done
