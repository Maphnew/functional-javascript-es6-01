// map.js
const log = console.log;
const products = [
    {name: '반팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
    {name: '바지', price: 25000},
]

const map = (func, iter) => {
    let res = []
    for (const element of iter) {
        res.push(func(element))
    }
    return res
}

const funcName = (p) => p.name;
const funcPrice = (p) => p.price;

log(map(funcName, products))
log(map(funcPrice, products))
// [ '반팔티', '긴팔티', '핸드폰케이스', '후드티', '바지' ]
// [ 15000, 20000, 15000, 30000, 25000 ]
// console.clear();
// iterable protocole을 따른 map의 다형성(polymorphism)
log([1,2,3].map(a=>a+1))
// [ 2, 3, 4 ]
// log( map(el => el.nodeName, document.querySelectorAll('*'))) // html 에서 실행

function* gen() {
    yield 2
    if (false) yield 3
    yield 4
}

log(map( a => a * a, gen() ))
// [ 4, 16 ]

let m = new Map()

const it = m[Symbol.iterator]()
log(it.next())
log(it.next())
log(it.next())
// { value: undefined, done: true }
// { value: undefined, done: true }
// { value: undefined, done: true }

m.set('a', 10)
m.set('b', 20)
log(m)
log( new Map( map( ( [ k, a ] ) => [ k , a * 2 ], m ) ) )
// Map { 'a' => 10, 'b' => 20 }
// Map { 'a' => 20, 'b' => 40 }