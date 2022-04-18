[React Tutorial](https://ja.reactjs.org/docs/state-and-lifecycle.html)

[Event Handle](https://ja.reactjs.org/docs/handling-events.html)
onClickなどにイベントを登録する際の書き方として3種類紹介されている。
thisをバインドするか(実験的な構文である)クラスフィールド構文を使用するのがよさそう。
`onClick={() => this.handleClick()}` の書き方はパフォーマンス問題がでる可能性があるとのこと。

[条件付きレンダー](https://ja.reactjs.org/docs/conditional-rendering.html)
条件に応じて描画するコンポーネントを変更する。以下の書き方以外にも`&&`を使ったもう少し簡潔な書き方もある。
三項演算子も。
```javascript
let button;
if (isLoginId) {
    button = <LogoutButton click={this.handleLogoutClick} />
} else {
    button = <LoginButton click={this.handleLoginClick} />
}
return (
    <div>
        {button}
    </div>
       )
```

[フォーム](https://ja.reactjs.org/docs/forms.html)

制御されたコンポーネント
Reactによって値が制御される入力フォーム要素のこと

入力値のバリデーションやフォーム送信を含む完全なソリューションを探す場合は、[Formik](https://formik.org/)が人気がある選択肢。
しかしこれは制御されたコンポーネントやstateの管理と同じ原理で作成されているので、これらについてちゃんと学びなさいね。

