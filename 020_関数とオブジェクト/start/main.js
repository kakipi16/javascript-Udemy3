function a() {
    console.log("hello");
}

a.prop = 0;
a.method = function() {
    console.log('method');
}

//helloが出力される
a();
//methodが出力される
a.method();
//０が出力される。
console.log(a.prop)