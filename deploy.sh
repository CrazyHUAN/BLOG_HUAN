#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

BUILD_GITHUB=1;
BUILD_GITEE=1;

# 测试单独推送指令  npm run dev github / npm run dev gitee
# for arg in "$*"
# do
#   echo  "arg $arg"
# done

# if [[ "$1" == "gitee" ]]; then
#   BUILD_GITHUB=0;
#   #echo "BUILD_111"
# elif [[ "$1" == "github" ]]; then
#   echo "BUILD_222"
#   #BUILD_GITEE=0;
# fi

# 配置 github
if [[ $BUILD_GITHUB = 1 ]]; then
  echo "BUILD_GITHUB"

  # github是仓库站点   gitee个人站点   base路径不同
  # 构建项目站点  base为 仓库名
  # 生成静态文件
  npm run build_repo

  # 进入生成的文件夹
  cd docs/.vuepress/dist

  # 没有配域名,所以不需要这个
  # echo 'crazyhuan.github.io  ' > CNAME

  if [ -z "$GITHUB_TOKEN" ]; then
    msg='deploy '
    githubUrl=git@github.com:CrazyHUAN/BLOG_HUAN.git
  else
    msg='来自github actions的自动部署'
    githubUrl=https://CrazyHUAN:${GITHUB_TOKEN}@github.com/CrazyHUAN/vuepress-theme-vdoing.git
    git config --global user.name "CrazyHUAN"
    git config --global user.email "cunhuangogogo@126.com"
  fi
  git init
  git add -A
  git commit -m "${msg}"
  git push -f $githubUrl master:gh-pages # 推送到github

  cd - # 退回开始所在目录
  rm -rf docs/.vuepress/dist

fi

# 配置 gitee
if [[ $BUILD_GITEE = 1 ]]; then
  echo "BUILD_GITEE"
  
  # 构建个人站点  base为 /
  npm run build
  
  # 进入生成的文件夹
  cd docs/.vuepress/dist

  # echo 'crazyhuan.gitee.io' > CNAME  # 自定义域名
  
  if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
    msg='deploy'
    giteeUrl=git@gitee.com:crazyhuan/crazyhuan.git
  else
    giteeUrl=https://HmuzsGrGQX:${CODING_TOKEN}@e.coding.net/xgy/xgy.git
  fi
  git init
  git add -A
  git commit -m "${msg}"
  git push -f $giteeUrl master # 推送到gitee

  cd - # 退回开始所在目录
  rm -rf docs/.vuepress/dist
fi

