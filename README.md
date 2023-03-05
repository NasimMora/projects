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

## создание нового коммита

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

- Вышла ошибка 'from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.'
- Для решения проблемы начал искать эту ошибку в гугле и нашел ответ на этом сайте 'https://www.npmjs.com/package/serve'
- устанавливаю npm пакет serve, который связывает с сервером node js.
- npm exec по умолчанию вызывает команду из 'node_modules/ .bin'(бинарный формат)
- ищу в 'node_modules\.bin\serve'
- ищу в зависимости от платформы (Ос Linux/Windows) расширение()  cmd(command line) ps1(powershell), если операционная система Linux, от запускаем файл без расширения
- далее ищу эту директорию "\..\serve\build\main.js"
каждый из этих файлов запускает модуль node_modules\serve\build\main.js который является в функционале оберткой вокруг сервера node js.
