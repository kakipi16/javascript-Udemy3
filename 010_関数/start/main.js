//関数式にすると重複が防げる。
const fn = function fn(a, b) {
  console.log(a, b);
};
// 重複してるとエラーになる
// function fn(a, b) {
//   console.log(2);
// }

// fn(1);

function fn2(a, b = 1) {
  console.log(a, b);
}
//これでデフォルト値が出力される。
//意図的にデフォルト値を出力したい場合はundefinedは渡さないnullを渡すことはある
//このように定義することはない。
let c = undefined;
fn2(1, undefined);

//argumentsオブジェクト
//argumentsには実引数がわたってくる。
function fn3(a, b=1) {
  console.log(arguments);
  console.log(a, b);
}

let d = null;
fn3(1, undefined)

//仮引数を定義していなくても実引数が配列でわたってくる。
function fn4() {
  const a = arguments[0];
  const b = arguments[1];
  //1とundefinedが出力される。
  console.log(arguments);
  console.log(a, b);
}
fn4(1, undefined)

//argumentsはわたってくる引数の数がわからないときに定義されていた。
//今はレストパラメーターによって使われなくなった
//...argsに配列がわたってくる。　
function fn5(...args) {
  const a = arguments[0];
  const b = arguments[1];
  //1とundefinedが出力される。
  console.log(arguments);
  console.log(a, b);
}
fn5(1, undefined)


function fn6(...args) {
  const a = arguments[0];
  const b = arguments[1];
  //1とundefinedが出力される。
  console.log(arguments);
  console.log(a, b);
  return a
}
let g = fn6(1, undefined);
//arguments[0]がわたってくる。
console.log(c);
