window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();
//bind(person)のpersonはオブジェクト
const helloTom = person.hello.bind(person);

function fn(ref) {
    ref();
}
//Hello Tomと出力される
fn(helloTom);

function a() {
    console.log("hello " + this.name)
}

const b = a.bind({name: "Tim"});
//hello Timと出力される
b();

function c(name) {
    console.log("hello " + this.name)
}
//bindは引数を取った値を束縛し、固定する。。
const d = a.bind(null, "Tim");
//hello Timと出力される。
b("Tom");
