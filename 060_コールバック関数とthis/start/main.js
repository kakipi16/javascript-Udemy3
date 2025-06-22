window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

function fn(ref) {
    ref();
}
//thisの参照先はfnから見たグローバルオブジェクトになる。
fn(person.hello);