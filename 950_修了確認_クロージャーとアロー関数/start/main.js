/**
 * 以下のコードはクロージャーのレクチャーで作成したコードです。
 * これをアロー関数を用いてなるべく短くなるように記載してみてください。
 * 
 * 問題１：
 * addNumberFactoryを短く書き直してみましょう。
 */
//解答
// const addNumberFactory = num => {
//     const addNumber = value =>  num + value;
//     return addNumber;
// }

//答え
const addNumberFactory = num =>  value =>  num + value;

const add5 = addNumberFactory(5);
const result = add5(10);
console.log(result);

/**
 * 問題２：
 * incrementFactoryを短く書き直してみましょう。
 */
//解答
// const incrementFactory = () => {
//     let num = 0;
//     const a = () => {
//         num = num + 1;
//         console.log(num);
//     }
//     return a;
// }

//答え
const incrementFactory = () => {

    let num = 0;

    return () => {

        num = num + 1;
        console.log(num);
        //インクリメント演算子を使うともっと短くなる。
        // console.log(++num);
    };
}


const increment = incrementFactory();

increment();
increment();
increment();
increment();