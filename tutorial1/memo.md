# Tutorial

build docker image and attach container.
```
$ docker-compose up -d && docker-compose exec react bash
```

git clone into volume my tutorial source codes.
```
# git clone git@github.com:underson666666/practice-swing-react.git
```

Initialize React app.
```
# npm init react-app my-app
```

Start to develop in container.
```
$ docker-compose up -d && docker-compose exec react bash
```

## Tutorial

- npm start
- props
- todo app
    - このチュートリアルではテストはしない
    - App.jsのHTMLの部分を置換
    - index.cssを置換
    - Next is [Reactアプリのコンポーネント化](https://developer.mozilla.org/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
