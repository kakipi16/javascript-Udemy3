function hello(name) {
    console.log("hello " + name);
}
//引数を渡さなくてもエラーは出ない。
function bye() {
    console.log("bye");
}

function fn(cb) {
    cb('Tom');
}
//helloが出力される
fn(hello);

fn(bye);

// 無名関数で定義することもできる
fn(function(name) {
    console.log("hello " + name)
})

//よく使われるコールバック関数

setTimeout(hello, 2000);