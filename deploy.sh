cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:cp-jtp/jtp-resources.git main:main