# git

## 常用的git操作 
1. `git diff filename` 查看文件具体修改内容
  - `git diff` 是查看工作区与暂存区之间的差异
  - `git diff HEAD` 是查看工作区与仓库之间的差异
  - `git diff --cached` 是查看仓库与暂存区之间的差异
2. `git log --pretty=oneline`查看近期的提交记录
3. `HEAD` 表示上一个版本，`HEAD^`表示上上个版本，以些类推 `HEAD~100`表示上100个版本
4. `git reset --hard HEAD^` 回退到上一个commit
5. `git reset --hard commitId` 指定到一个commit
6. `git reset HEAD filename` 将暂存区的修改撤销，重新回到工作区
7. `git reflog` 查看命令历史记录
8. `git checkout -- filename` 回到上一次修改
  - 如果文件已经提交到暂存区了，就是回到暂存区的状态
  - 如果文件已经提交到仓库，就是回到仓库的状态
  - `git checkout`其实是将工作区中的版本与版本库的版本替换，如果版本从未提交到版本库中是无法恢复的
9. `git rm filename` 删除一个文件

## git的基本概念
![git 的基本过程](./images/0.jpg "git流程")
1. 工作区（work-tree）:目录，.git除外
2. 暂存区（index/store）：git add 命令就是将将代码从工作区存入暂存区
3. 版本库（repository）:.git, git commit 就是将暂存区的内容存入仓库
4. git 管理的是修改而非文件（删除一行代码是修改，增加一条代码是修改，新增或删除文件也是修改）
