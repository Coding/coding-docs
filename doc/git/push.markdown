---
layout: post

title: Git 提交代码
---

本章节介绍如何将代码提交到 Coding 的代码仓库上。

### 提交代码到远程仓库

接下来我们会介绍如何记录更新，并提交更新代码到远程仓库。

#### 文件的状态

工作目录下面的所有文件都不外乎这两种状态：已跟踪或未跟踪。

**已跟踪的文件 ———— tracked**

指本来就被纳入版本控制管理的文件，在上次快照中有它们的记录，工作一段时间后，它们的状态可能是未修改，已修改或者已放入暂存区。

**未跟踪文件 ———— untracked**

它们既没有上次更新时的快照，也不在当前的暂存区域。

初次克隆某个仓库时，工作目录中的所有文件都属于已跟踪文件，且状态为未修改。
在编辑过某些文件之后，Git 将这些文件标为已修改。我们逐步把这些修改过的文件放到暂存区域，直到最后一次性提交所有这些暂存起来的文件，如此重复。所以使用 Git 时的文件状态变化周期如图所示。

![xx](https://dn-coding-net-production-pp.qbox.me/cfe7389a-6d56-4c01-95e2-87ec1fa4da7a.jpg)

#### 新建跟踪文件

回到我们在 3.2 中创建的本地目录 study-git(详见 3.2.3)。我们可以使用 ^git status^ 命令来查看当前工作目录下的文件状态。因为我们在将远程仓库克隆到本地后并未进行任何操作，所以我们会得到以下输出：

    $ git status
    On branch master
    Your branch is up-to-date with 'origin/master'
    nothing to commit, working directory clean

这说明你现在的工作目录相当干净。换句话说，所有已跟踪文件在上次提交后都未被更改过。此外，上面的信息还表明，当前目录下没有出现任何处于未跟踪的新文件，否则 Git 会在这里列出来。最后，该命令还显示了当前所在的分支是 master，这是默认的分支名称。
接下来我们新建一个文本文件,运行 git status 会看到该文件出现在未跟踪文件列表中：

    $ touch test.txt
    $ echo something > test.txt
    $ git status 
    On branch master
    Your branch is up-to-date with 'origin/master'

    Untracked files:
      (use "git add <file>..." to include in what will be committed)

        test.txt

    nothing added to commit but untracked files present (use "git add" to track)

在状态报告中可以看到新建的 test.txt 文件出现在“Untracked files”下面。未跟踪的文件意味着 Git 在之前的快照（提交）中没有这些文件；Git 不会自动将之纳入跟踪范围，除非你明明白白地告诉它“我需要跟踪该文件”，因而不用担心把临时文件什么的也归入版本管理。

**跟踪新文件**

使用命令 git add 我们就可以跟踪一个文件。所以，要跟踪 test.txt 文件，只需运行：

    $ git add test.txt 

接下来我们再次用 git status 查看文件状态：

    $ git status 
    On branch master
    Your branch is up-to-date with 'origin/master'

    Changes to be committed:
      (use "git reset HEAD <file>..." to unstage)

          new file:  test.txt

只要在 “Changes to be committed” 这行下面的，就说明是已暂存状态。如果此时提交，那么该文件此时此刻的版本将被留存在历史记录中。在 git add 后面可以指明要跟踪的文件或目录路径。如果是目录的话，就说明要递归跟踪该目录下的所有文件。

#### 暂存修改的已跟踪文件

接下来我们把已跟踪的文件 `README.md` 做一些修改。打开 `README.md`，并在第二行加上了一句 "I am learning to use git"，现在 `README.md`  中有以下内容：

     #learn-git
     I am learning to use git

这时我们再次使用 `git status` 命令查看文件状态：

    $ git status 
    On branch master
    Your branch is up-to-date with 'origin/master'

    Changes to be committed:
      (use "git reset HEAD <file>..." to unstage)

            new file:  test.txt

    Changes not staged for commit:
       (use "git add <file>..." to update what will be committed)
       (use "git checkout -- <file>..." to discard changes in working directory)

             modified:   README.md

文件 README.md 出现在 "Changes not staged for commit" 这行下面，说明已跟踪文件的内容发生了变化，但还没有放到暂存区。要暂存这次更新，需要运行 git add 命令。
实际上 `git add` 命令是多功能命令，对不同状态的文件，它起到的作用也会不同：

1. 操作对象是未跟踪文件时，将其加入到跟踪文件中
2. 操作对象是已跟踪文件时，将其放入暂存区
3. 合并时把有冲突的文件标记为已解决状态（将在下一章详细描述）

现在让我们运行 git add 将 README.md 放到暂存区，然后再看看 git status 的输出：

     $ git add README.md
     $ git status
     On branch master
     Your branch is up-to-date with 'origin/master'

    Changes to be committed:
      (use "git reset HEAD <file>..." to unstage)

            modified:   README.md
            new file:   test.txt

#### 查看更改的内容

在工作中，我们经常会需要查看修改后的文件相比之前的文件有哪些不同，那么这时候 `git status` 命令就不够了，我们需要使用 `git diff` 命令来查看更改的内容。我们再对 `README.md` 做一些修改，先不要使用 `git add` 命令将其暂存，此时运行 `git diff` 命令：

     $ git diff
     diff --git a/README.md b/README.md
     index a21c979..cf2f0cc 100644
     --- a/README.md
     +++ b/README.md
     @@ -1,2 +1,3 @@ 
      #learn-git
	  I am learning to use git
     +new line
     \ No newline at end of file

此命令比较的是工作目录中当前文件和暂存区域快照之间的差异，也就是修改之后还没有暂存起来的变化内容。

若要看已经暂存起来的文件和上次提交时的快照之间的差异，可以用 `git diff --cached` 命令。（Git 1.6.1 及更高版本还允许使用 git diff --staged，效果是相同的，但更好记些。）

#### 提交更新到本地仓库

现在的暂存区域已经准备妥当可以提交了。在此之前，请一定要确认还有什么修改过的或新建的文件还没有 `git add` 过，否则提交的时候不会记录这些还没暂存起来的变化。所以，每次准备提交前，最好先用 git status 看下，是不是都已暂存起来了，然后再运行提交命令 `git commit` 来完成提交。

你可以直接输入 `git commit` 命令进行提交，这种方式会启动文本编辑器以便输入本次提交的说明:

     # Please enter the commit message for your changes. Lines starting
     # with '#' will be ignored, and an empty message aborts the commit.
     # On branch master
     # Your branch is up-to-date with 'origin/master'
     #
     # Changes to be committed:
     #       modified:   README.md
     #       new file:   test.txt
     #

默认会启用 shell 的环境变量 $EDITOR 所指定的编辑器，一般都是 vim 或 emacs，也可以通过 git config 命令来修改默认的编辑器。
以 '#' 开头的行都被视为注释，在提交时将被丢弃。如果没有输入提交信息就推出编辑器，将放弃这次提交。

同时，你也可以直接使用 

     `git commit -m [提交说明]` 

的方式来进行提交:

     $ git commit -m "My first commit"
     [master ca62ea0] My first commit
      2 files changed, 3 insertions(+)
      create mode 100644 test.txt

好，现在已经创建了第一个提交！可以看到，提交后它会告诉你，当前是在哪个分支（master）提交的，本次提交的完整 SHA-1 校验和是什么（ca62ea0），以及在本次提交中，有多少文件修订过，多少行添改和删改过。

记住，提交时记录的是放在暂存区域的快照，任何还未暂存的仍然保持已修改状态，可以在下次提交时纳入版本管理。每一次运行提交操作，都是对你项目作一次快照，以后可以回到这个状态，或者进行比较。
          
#### 推送到远程仓库

当你想要同别人分享目前的成果时，可以将本地仓库中的数据推送到远程仓库。实现这个任务的命令很简单： 

     git push [远程仓库名] [分支名]

如果要把本地的 master 分支推送到 origin 服务器上，可以运行下面的命令：

     $ git push origin master
     Username for 'https://git.coding.net': [输入 ID/注册邮箱]
     Password for 'https://[ID/注册邮箱]@git.coding.net':
     Counting objects: 6,done
     Delta compression using up to 2 threads.
     Compressing objects: 100% (2/2),done.
     Writing objects: 100% (4/4),336 bytes | 0 bytes/s, done.
     Total 4 (delta 0), reused 0 (delta 0)
     To https://git.coding.net/Kyle_lyk/learn-git.git
        764ecea..ca62ea0 master -> master


现在已经第一次完成推送数据到远程仓库！但是要注意，只有在所克隆的服务器上有写权限，且同一时刻没有其他人在推数据，这条命令才会如期完成任务。如果在你推数据前，已经有其他人推送了若干更新，那你的推送操作就会被驳回。你必须先把他们的更新抓取到本地，合并到自己的项目中，然后才可以再次推送，相关详情请看下一章分支的描述。

---



  <div class="footer-nav">
  <div class="left-nav"><i class="fa fa-angle-left"></i><a href="/help/doc/git/repository.html">上一篇：Git 代码仓库</a></div>
  <div class="right-nav"><a href="/help/doc/git/git-branch.html">下一篇：分支管理</a><i class="fa fa-angle-right"></i></div>
  </div>
