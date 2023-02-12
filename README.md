# readme

отображаю сачиваемые через git fetch ветки

```sh
jojo-@DESKTOP-AUSV2FP MINGW64 ~/git/projects (develop)
$ git fetch -v
From github.com:NasimMora/projects
 = [up to date]      develop    -> origin/develop
 = [up to date]      3/display-client-user-agent -> origin/3/display-client-user-agent
 = [up to date]      master     -> origin/master
```

находясь в репозитарий projects на ветке `(develop)`
далее выбираем ветку `3/display-client-user-agent` путем команды `checkout`

```sh
jojo-@DESKTOP-AUSV2FP MINGW64 ~/git/projects (develop)
$ git checkout 3/display-client-user-agent
Switched to a new branch '3/display-client-user-agent'
branch '3/display-client-user-agent' set up to track 'origin/3/display-client-user-agent'.
```

далее обновляю локальное состояние комндой `git pull`

```sh
jojo-@DESKTOP-AUSV2FP MINGW64 ~/git/projects (3/display-client-user-agent)
$ git pull
Already up to date.
```

---

добавляю файлы в зону staged
(список файлов,которые будут добавлены в следущем commit)

```sh
jojo-@DESKTOP-AUSV2FP MINGW64 ~/git/projects (3/display-client-user-agent)
$ git add README.md
```

staged - незакомиченные файлы.
проверяю status файла

```sh
jojo-@DESKTOP-AUSV2FP MINGW64 ~/git/projects (3/display-client-user-agent)
$ git status
On branch 3/display-client-user-agent
Your branch is up to date with 'origin/3/display-client-user-agent'.
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   README.md
```

делаю commit изменения 3/display-client-user-agent

```sh
jojo-@DESKTOP-AUSV2FP MINGW64 ~/git/projects (3/display-client-user-agent)
$ git commit -m 'updated README.md'
[3/display-client-user-agent 1638cc3] updated README.md
 1 file changed, 24 insertions(+)
```
