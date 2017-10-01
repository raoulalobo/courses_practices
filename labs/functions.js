//Learning JavaScript 3rd edition P104


/*

function f(x) {
    console.log(`inside f: x=${x}`);
    x = 5;
    console.log(`inside f: x=${x} (after assignment)`);
}

function g() {
    console.log(`inside g: x=${x}`);
    x = 5;
    console.log(`inside g: x=${x} (after assignment)`);
}

let x = 3;
console.log(`before calling f: x=${x}`);
f(x);
console.log(`after calling f: x=${x}`);
console.log(`before calling g: x=${x}`);
g();
console.log(`after calling g: x=${x}`);

*/

/*

function f(o) {
    o.message = `set in f (previous value: '${o.message}')`;
}
let o = {
    message: "initial value"
};
console.log(`before calling f: o.message="${o.message}"`);
f(o);
console.log(`after calling f: o.message="${o.message}"`);

*/


function f(o) {
    o.message = "set in f";
    o = {
        message: "new object!"
    };
    console.log(`inside f: o.message="${o.message}" (after assignment)`);
}
let o = {
    message: 'initial value'
};
console.log(`before calling f: o.message="${o.message}"`);
f(o);
console.log(`after calling f: o.message="${o.message}"`);

