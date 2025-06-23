function a(name, name1) {
  console.log("hello " + name + " " + name1);
}

const tim = {name: 'Tim'};
//この後に実行しなければいけない。
const b = a.bind(tim);

b();

//この時点で実行まで行われる。
//第2引数に設定するのは配列になる。
a.apply(tim, ['Tim', 'Bob']);

//第２引数以下は関数の引数を定義することができる。
a.call(tim, "Tim");


//applyの実践的な方法

//一番大きい数値を取り出したい
const arry = [1,2,3,4,5];
//ES6だとあまりしなくなった。
// const result = Math.max.apply(null, arry);

//こっちのほうがES6の主流になっている
const result = Math.max(...arry);
console.log(result)

