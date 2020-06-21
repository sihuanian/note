# git

## 常用的git操作 
# git笔记


## git常用命令


1. `git checkout -b branchname ` 创建并切换分支
    
    * 相当于`git branch branchname` + `git checkout branchname `

2. `git branch -d branchname` 删除分支
3. `git merge branchname` 合并分支
4. `git switch -c btanchname ` 创建并切换分支
5. `git log —graph —pretty=one line —abbrev-commit` 查看分支合并图
6. `git merge —no-ff -m “commit message ” branchname ` 使用普通方式合并分支，可以看到合并记录
7. `git stash `将工作现场存储起来

    * `git stash list`查看所有存储起来的工作现场
    * `git stash apply `恢复工作现场，但未删除，需要使用`git drop`删除
    * `git stash pop`恢复工作现场并删除
8. `git stash apply stash{0}`恢复指定的工作现场
9. `git cherry-pick commitid`复制特定的提交到当前分支
10. `git push origin master` 将master分支推送到远程
11. `git remote `查看远程库的信息
    
    * `git remote -v`查看远程库的详细信息
12. `git branch -b dev origin/dev`创建本地开发分支
13. `git push origin dev`将开发分支推送到远程
14. `git tag v1.0`给提交打上标签

    * `git tag v1.1 commitId `给某一特定的提交打上标签
    * `git show v1.0`查看某一分支的信息
    * `got tag`查看标签
    * `git tag -a v1.0 -m "tag message" commitid`给标签加上说明
    * `git tag -d tagname`删除标签
    * `git push origin tag-name `推送标签到远程
    * `git push origin —tags`像远程推送所有标签
    * `git tag -d tag name + git push origin :refs/tags/tag-name `删除远程标签
15. `git check-ignore -v ignore-file-name`查看那条规则忽略了这个文件
16. `git diff filename` 查看文件具体修改内容
  - `git diff` 是查看工作区与暂存区之间的差异
  - `git diff HEAD` 是查看工作区与仓库之间的差异
  - `git diff --cached` 是查看仓库与暂存区之间的差异
17. `git log --pretty=oneline`查看近期的提交记录
18. `HEAD` 表示上一个版本，`HEAD^`表示上上个版本，以些类推 `HEAD~100`表示上100个版本
19. `git reset --hard HEAD^` 回退到上一个commit
20. `git reset --hard commitId` 指定到一个commit
21. `git reset HEAD filename` 将暂存区的修改撤销，重新回到工作区
22. `git reflog` 查看命令历史记录
23. `git checkout -- filename` 回到上一次修改
  - 如果文件已经提交到暂存区了，就是回到暂存区的状态
  - 如果文件已经提交到仓库，就是回到仓库的状态
  - `git checkout`其实是将工作区中的版本与版本库的版本替换，如果版本从未提交到版本库中是无法恢复的
24. `git rm filename` 删除一个文件

## git的基本概念
![git 的基本过程](./images/0.jpg "git流程")
1. 工作区（work-tree）:目录，.git除外
2. 暂存区（index/store）：git add 命令就是将将代码从工作区存入暂存区
3. 版本库（repository）:.git, git commit 就是将暂存区的内容存入仓库
4. git 管理的是修改而非文件（删除一行代码是修改，增加一条代码是修改，新增或删除文件也是修改）
