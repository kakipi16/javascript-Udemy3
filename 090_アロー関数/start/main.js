function a(name) {
    return "hello " + name;
}

const b = name => {
    return 'hello ' + name;
}

// console.log(b('Tom'))

const c = (name, name1) =>  'hello ' + name + ' ' + name1;

console.log(c("Tom", 'Bob'));

//
const d = () => "hello ";