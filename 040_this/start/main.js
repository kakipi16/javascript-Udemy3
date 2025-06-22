const person = {
    name: 'Tom',
    hello: function() {
        console.log("Hello" + this.name)

        //これでも出力されるが、メソッドの中では記載しない。
        // console.log("Hello" + person.name)
    }
}
//
person.hello();