window.name = 'John';


const person = {
    name: 'Tom',
    //このように省略できる。
    //もともとはhello: function()
    hello() {
        console.log('Hello ' + this.name);
        //この場合の出力結果はBye Tom
        const a = () => console.log('Bye ' + this.name);
        a();
    }
}
//hello Tomが出力される。
// person.hello();

function b() {
    const a = () => console.log('Bye ' + this.name);
    a();
}
//Bey Johnが出力される。
b()

// const person1 = {
//     name: 'Tom',
//     hello: () => {
//         console.log('Hello ' + this.name);
//     }
// }
// //hello Johnが出力される。
// person1.hello();

