//問題3解答
window.name = "Tom"
const person = {
    name: 'Tom',
    //問題３答え
    bye(){
        console.log('Bye ' + this.name);
    },
    hello: function (greeting) {
        console.log(greeting + ' ' + this.name);
        return greeting + ' ' + this.name;
    },
    /**
     * 問題４：
     * 1秒後に"hello Tom"
     * と出力されるような、メソッドを
     * personオブジェクトに追加してみてください。
     *
     * 以下のように使用するものとします。
     * `person.hello1s()`
     * -> 1秒後に"hello Tom"と出力
     *
     * 3通りの方法で実装してみてください。
     * １．bind
     * ２．アロー関数
     * ３．thisを一旦変数に代入
     */
    //問題4 解答
    // //いっぺんに使うわけではわない。
    // hello1s: (hellos) => {
    //     const hello = hellos +  " " + this.name
    //     console.log(hello)
    // }

    hello1s() {
        //問題４ 答えbindを使う方法
        // setTimeout(this.hello.bind(this, "hello"), 1000)
        //アロー関数を使う方法
        // setTimeout(() => {
        //     //ここのthisはレキシカルスコープを参照する。
        //     this.hello("hello");
        // }, 1000)
        //thisを一旦変数に代入する方法
        const _this = this;
        setTimeout(function() {
            _this.hello("hello");
        })
    }

}
//問題4 解答
// setTimeout(person.hellos.bind(person, "hello"), 1000)

//問題4 答え
person.hello1s();


/**
 * 問題１：
 * 1秒後に"hello Tom"
 * と出力されるように、以下のコード
 * の記載を変更しましょう。
 */
//解答OK
// setTimeout(person.hello.bind(person, "hello"), 1000);

/**
 * 問題２：
 * alertで"hello Tom"
 * と出力されるように、
 * 以下のコードを変更してください。
 */
//解答
// alert(person.hello.call(person, "hello"));

//答え
// alert(person.hello("hello"));

/**
 * 問題３：
 * person.byeメソッドを１秒後に実行したかったので
 * bindを使って束縛してみましたが、コンソールには
 * "Bye"しか表示されませんでした。
 * "Bye Tom"とするためにはどうすればよいでしょうか？
 */
// setTimeout(person.bye.bind(person), 1000);