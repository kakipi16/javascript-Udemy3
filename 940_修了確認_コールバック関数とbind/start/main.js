/**
 * 問題：
 * 【修了確認】コールバック関数で実装したcalcFactoryを
 * １秒後にconsole.logまたはalertで計算式が表示される
 * ようにcalcFactory関数内の実装を変更してみてください。
 */
function calcFactory(val, callback) {
    //答え
    function callbackAfter1s(str) {
        setTimeout(callback.bind(null, str), 1000);
    }

    return {
        plus: function(target) {
            const newVal = val + target;
            callbackAfter1s(`${val} + ${target} = ${newVal}`);
            val = newVal;
        },
        minus: function(target) {
            const newVal = val - target;
            callbackAfter1s(`${val} - ${target} = ${newVal}`);
            val = newVal;
        },
        multiply: function(target) {
            const newVal = val * target;
            callbackAfter1s(`${val} x ${target} = ${newVal}`);
            val = newVal;
        },
        divide: function(target) {
            const newVal = val / target;
            callbackAfter1s(`${val} / ${target} = ${newVal}`);
            val = newVal;
        }
    };
}

//解答
// const calc = calcFactory(10, alert);
// setTimeout(calc.plus.bind(null, 5), 1000);

const calc = calcFactory(10, alert);
calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);