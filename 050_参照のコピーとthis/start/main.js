window.name = 'John'

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
        a();

        const person = {
            name: 'Tim',
            hello: function() {
                console.log('Hello ' + this.name);
                a();
            }
        }
        person.hello();
    }
}
// const ref = person.hello;
// ref();

//personオブジェクトを参照するのでhello Tomと出力される
person.hello();

function a() {
    //グローバルオブジェクトを参照するのでhello Johnと出力される
    console.log('Hello ' + this.name)
}

