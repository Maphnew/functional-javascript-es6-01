# 함수형 프로그래밍과 ES6+ 예제 코드 🙌

## 🚀 강의 목록 😎 ✔
1. 🚀 함수형 자바스크립트 기본기
    1. 평가와 일급
    2. 일급 함수
    3. 고차 함수
2. 🚀 ES6에서의 순회와 이터러블/이터레이터 프로토콜
    1. 기존과 달라진 ES6에서의 리스트 순회
    2. Array, Set, Map을 통해 알아보는 이터러블/이터레이터 프로토콜
    3. 사용자 정의 이터러블
    4. 전개 연산자
3. 🚀 제너레이터와 이터레이터
    1. 제너레이터와 이터레이터
    2. odds
    3. for...of, 전개 연산자, 구조 분해, 나머지 연산자
4. 🚀 map, filter, reduce
    1. map
    2. 이터러블 프로토콜을 따른 map의 다형성 1
    3. 이터러블 프로토콜을 따른 map의 다형성 2
    4. filter
    5. reduce
    6. reduce 2
    7. map+filter+reduce 중첩 사용과 함수형 사고
5. 🚀 코드를 값으로 다루어 표현력 높이기
    1. go
    2. pipe
    3. go를 사용하여 읽기 좋은 코드로 만들기
    4. go+curry를 사용하여 더 읽기 좋은 코드로 만들기
    5. 함수 조합으로 함수 만들기
6. 🚀 장바구니 예제
    1. 총 수량, 총 가격
    2. HTML로 출력하기
7. 🚀 지연성 1
    1. range와 느긋한 L.range
    2. range와 느긋한 L.range 테스트
    3. take
    4. 제너레이터/이터레이터 프로토콜로 구현하는 지연 평가
    5. L.map
    6. L. filter
    7. range, map, filter, take, reduce 중첩 사용
    8. L.range, L.map, L.filter, take 의 평가 순서
    9. 엄격한 계산과 느긋한 계산의 효율성 비교
    10. map, filter 계열 함수들이 가지는 결합 법칙
    11. ES6의 기본 규악을 통해 구현하는 지연 평가의 장점
8. 🚀 지연성 2
    1. 결과를 만드는 함수 reduce, take
    2. queryStr 함수 만들기
    3. Array.prototype.join 보다 다형성이 높은 join 함수
    4. take, find
    5. L.map, L.filter로 map과 filter 만들기
    6. L.flatten, flatten
    7. L.flatMap, flatMap
    8. 2차원 배열 다루기
    9. 지연성 / 이터러블 중심 프로그래밍 실무적인 코드
9. 🚀 비동기/동시성 프로그래밍 1
    1. callback과 Promise
    2. 비동기를 값으로 만드는 Promise
    3. 값으로서의 Promise 활용
    4. 합성 관점에서의 Promise와 모나드
    5. Kleisli Composition 관점에서의 Promise
    6. go, pipe, reduce에서 비동기 제어
    7. promise.then의 중요한 규칙
10. 🚀 비동기/동시성 프로그래밍 2
    1. 지연 평가 + Promise - L.map, map, take
    2. Kleisli Composition - L.filter, filter, nop, take
    3. reduce에서 nop 지원
    4. 지연 평가 + Promise의 효율성
    5. 지연된 함수열을 병렬적으로 평가하기 - C.reduce, C.take 1
    6. 지연된 함수열을 병렬적으로 평가하기 - C.reduce, C.take 2
    7. 즉시 병렬적으로 평가하기 - C.map, C.filter
    8. 즉시, 지연, Promise, 병렬적 조합하기
    9. 코드 간단히 정리
    10. Node.js에서 SQL 병렬 평가로 얻은 효율
11. 🚀 비동기/동시성 프로그래밍 3
    1. async/await
    2. Q&A) Array.prototype.map이 있는데 왜 FxJS의 map 함수가 필요한지?
    3. Q&A) 이제 비동기는 async/await로 제어할 수 있는데 왜 파이프라인이 필요한지?
    4. Q&A) async/await와 파이프라인을 같이 사용하기도 하는지?
    5. Q&A) 동기 상황에서 에러 핸들링은 어떻게 해야하는지?
    6. Q&A) 비동기 상황에서 에러 핸들링은 어떻게 해야하는지?
    7. Q&A) 동기/비동기 에러 핸들링에서의 파이프라인의 이점은?

## 🛹 Let's get it!

### 🚀 1. 함수형 자바스크립트 기본기
#### 1. 평가와 일급
##### 평가
- 코드가 계산(Evaluation) 되어 값을 만드는 것

##### 일급
- 값으로 다룰 수 있다.
- 변수에 담을 수 있다.   
- 함수의 인자로 사용될 수 있고 함수의 결과로 사용될 수 있다.
```html
<script>
const log = console.log

const x = 10 // 변수에 담을 수 있고
const add10 = a => a + 10 // 함수의 인자로,
const r = add10(x) // 함수의 결과로 사용될 수 있다.
log(r)

</script>
```
#### 2. 일급 함수
##### 일급 함수: First Class
- 함수를 값으로 다룰 수 있다.
- 조합성과 추상화의 도구

```html
<script>
const log = console.log;

const add5 = a => a + 5;
log(add5);
log(add5(5))

const f1 = () => () => 1;
log(f1())

const f2 = f1();
log(f2)
log(f2())
</script>
```

#### 3. 고차 함수

##### 고차 함수: higher order function(HOF)
- 하나 이상의 함수를 인자로 받는다.
- 함수를 결과로 반환한다.
- 고차 함수는 함수의 값을 전달하는 기존 관념을 넘어, 함수의 흐름을 제어하는 파라미터로써 수용한다.이를 제어 패턴 추상화(Abstracting Patterns of Control)라고 부른다.

<!-- 참조 블로그 -->
<!-- https://medium.com/@la.place/higher-order-function-%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-1c61e0bea79 -->

##### 함수를 인자로 받아서 실행하는 함수(Applicative Programming)
- apply1
- times
```html
<script>
// apply1
console.clear();

const apply1 = f => f(1);
const add2 = a => a + 1

log(apply1(add2))
log(apply1(a => a -1 ))

// times
console.clear();
const times = (f,n) => {
    let i = -1;
    while ( ++i < n ) f(i);
}

times(log, 3)

times(a => log(a+10), 3)

</script>
```

##### 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수)
- Closure는 함수와 함수가 선언된 어휘적 환경의 조합이다. 클로저를 이해하려면 자바스크립트가 어떻게 변수의 유효범위를 지정하는지(Lexical scoping)를 먼저 이해해야 한다.

<!-- 참조 페이지 -->
<!-- https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures -->
```html
<script>
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        alert (name); // displayName() uses variable declared in the parent function    
    }
    displayName();    
}
init();
</script>
```
- addMaker
```html
<script>
    // addMaker

    const addMaker = a => b => a + b
    const add10 = addMaker(10)
    log(add10(5))
    log(add10(10))

</script>
```
### 🚀 2. ES6에서의 순회와 이터러블/이터레이터 프로토콜
#### 1. 기존과 달라진 ES6에서의 리스트 순회
```html
<script>const log = console.log;</script>

## 기존과 달라진 ES6에서의 리스트 순회
- for i++
- for of

<script>
  const list = [1, 2, 3];
  for (var i = 0; i < list.length; i++) {
    // log(list[i]);
  }
  const str = 'abc';
  for (var i = 0; i < str.length; i++) {
    // log(str[i]);
  }
  for (const a of list) {
    // log(a);
  }
  for (const a of str) {
    // log(a);
  }
</script>
```
#### 2. Array, Set, Map을 통해 알아보는 이터러블/이터레이터 프로토콜
```html
### Array를 통해 알아보기

<script>
  log('Arr -----------');
  const arr = [1, 2, 3];
  let iter1 = arr[Symbol.iterator]();
  for (const a of iter1) log(a);
</script>

### Set을 통해 알아보기

<script>
  log('Set -----------');
  const set = new Set([1, 2, 3]);
  for (const a of set) log(a);
</script>

### Map을 통해 알아보기

<script>
  log('Map -----------');
  const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
  for (const a of map.keys()) log(a);
  for (const a of map.values()) log(a);
  for (const a of map.entries()) log(a);
  console.clear();
</script>
```
#### 3. 사용자 정의 이터러블, 이터러블/이터레이터 프로토콜 정의
```html
## 이터러블/이터레이터 프로토콜
- 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값
- 이터레이터: { value, done } 객체를 리턴하는 next() 를 가진 값
- 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약

### 사용자 정의 이터러블을 통해 알아보기

<script>
  const iterable = {
    [Symbol.iterator]() {
      let i = 3;
      return {
        next() {
          return i == 0 ? {done: true} : {value: i--, done: false};
        },
        [Symbol.iterator]() {
          return this;
        }
      }
    }
  };
  let iterator = iterable[Symbol.iterator]();
  iterator.next();
  iterator.next();
  // log(iterator.next());
  // log(iterator.next());
  // log(iterator.next());
  for (const a of iterator) log(a);

  // const arr2 = [1, 2, 3];
  // let iter2 = arr2[Symbol.iterator]();
  // iter2.next();
  // log(iter2[Symbol.iterator]() == iter2);
  // for (const a of iter2) log(a);

  for (const a of document.querySelectorAll('*')) log(a);
  const all = document.querySelectorAll('*');
  let iter3 = all[Symbol.iterator]();
  log(iter3.next());
  log(iter3.next());
  log(iter3.next());
</script>
```
#### 4. 전개 연산자
```html
## 전개 연산자

<script>
  console.clear();
  const a = [1, 2];
  // a[Symbol.iterator] = null;
  log([...a, ...arr, ...set, ...map.keys()]);
</script>
```
### 🚀 3. 제너레이터와 이터레이터
#### 1. 제너레이터와 이터레이터
```html
<script>const log = console.log;</script>

# 제너레이터/이터레이터
- 제너레이터: 이터레이터이자 이터러블을 생성하는 함수

<script>
  function* gen() {
    yield 1;
    // if (false) yield 2;
    yield 3;
  }

  let iter = gen();
  log(iter[Symbol.iterator]() == iter);
  log(iter.next());
  log(iter.next());
  log(iter.next());
  log(iter.next());

  for (const a of gen()) log(a);
  // console.clear();
</script>

```
#### 2. odds
```html
# odds

<script>
  function* infinity(i = 0) {
    while (true) yield i++;
  }

  function* limit(l, iter) {
    for (const a of iter) {
      yield a;
      if (a == l) return;
    }
  }

  function* odds(l) {
    for (const a of limit(l, infinity(1))) {
      if (a % 2) yield a;
    }
  }

  let iter2 = odds(10);
  log(iter2.next());
  log(iter2.next());
  log(iter2.next());
  log(iter2.next());
  log(iter2.next());
  log(iter2.next());
  log(iter2.next());

  for (const a of odds(40)) log(a);

  // console.clear();
</script>
```
#### 3. for...of, 전개 연산자, 구조 분해, 나머지 연산자
```html
# for of, 전개 연산자, 구조 분해, 나머지 연산자
<script>const log = console.log;</script>
<script>
  function* infinity(i = 0) {
    while (true) yield i++;
  }

  function* limit(l, iter) {
    for (const a of iter) {
      yield a;
      if (a == l) return;
    }
  }

  function* odds(l) {
    for (const a of limit(l, infinity(1))) {
      if (a % 2) yield a;
    }
  }
  log(...odds(10));
  log([...odds(10), ...odds(20)]);

  const [head, ...tail] = odds(5);
  log(head);
  log(tail);

  const [a, b, ...rest] = odds(10);
  log(a);
  log(b);
  log(rest);
</script>

```
### 🚀 4. map, filter, reduce
#### 1. map
```html
<script>const log = console.log;</script>

<script>
  const products = [
    {name: '반팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
    {name: '바지', price: 25000}
  ];
</script>


# map

<script>
  const map = (f, iter) => {
    let res = [];
    for (const a of iter) {
      res.push(f(a));
    }
    return res;
  };

  // let names = [];
  // for (const p of products) {
  //   names.push(p.name);
  // }
  // log(names);

  log(map(p => p.name, products));

  // let prices = [];
  // for (const p of products) {
  //   prices.push(p.price);
  // }
  // log(prices);

  log(map(p => p.price, products));

</script>
```
#### 2. 이터러블 프로토콜을 따른 map의 다형성 1
```html
<script>const log = console.log;</script>
# 이터러블 프로토콜을 따른 map의 다형성1

<script>
  const map = (f, iter) => {
    let res = [];
    for (const a of iter) {
      res.push(f(a));
    }
    return res;
  };
  log([1, 2, 3].map(a => a + 1));
  // [ 2, 3, 4 ]
  log(map(el => el.nodeName, document.querySelectorAll('*')));
  // ["HTML", "HEAD", "SCRIPT", "SCRIPT", "BODY", "SCRIPT", "SCRIPT"]
  // const it = document.querySelectorAll('*')[Symbol.iterator]();
  // log(it.next());
  // log(it.next());
  // log(it.next());
  // log(it.next());
  // log(it.next());

  function* gen() {
    yield 2;
    if (false) yield 3;
    yield 4;
  }

  log(map(a => a * a, gen()));
  // [ 4, 16 ]
</script>
```
#### 3. 이터러블 프로토콜을 따른 map의 다형성 2
```html
# 이터러블 프로토콜을 따른 map의 다형성2
<script>
  let m = new Map();
  m.set('a', 10);
  m.set('b', 20);
  const it = m[Symbol.iterator]();
//   log(Object.keys(it.next().value))
//   log(Object.values(it.next().value))
  log(it.next().value)
  log(it.next().value)
  log(it.next())

  log(new Map(map(([k, a]) => [k, a * 2], m))); // "a" => 20, "b" => 40
  // Map { 'a' => 10, 'b' => 20 }
  // Map { 'a' => 20, 'b' => 40 }
//   console.clear();
</script>
```
#### 4. filter
```html
# filter

<script>
  const filter = (f, iter) => {
    let res = [];
    for (const a of iter) {
      if (f(a)) res.push(a);
    }
    return res;
  };

  // let under20000 = [];
  // for (const p of products) {
  //   if (p.price < 20000) under20000.push(p);
  // }
  // log(...under20000);

  log(...filter(p => p.price < 20000, products));

  // let over20000 = [];
  // for (const p of products) {
  //   if (p.price >= 20000) over20000.push(p);
  // }
  // log(...over20000);

  log(...filter(p => p.price >= 20000, products));

  log(filter(n => n % 2, [1, 2, 3, 4]));

  log(filter(n => n % 2, function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }()));

  //console.clear();
</script>
```
#### 5. reduce
```html
# reduce

<script>
  const nums = [1, 2, 3, 4, 5];

  let total = 0;
  for (const n of nums) {
    total = total + n;
  }
  log(total);

  const reduce = (f, acc, iter) => {
    if (!iter) {
      iter = acc[Symbol.iterator]();
      acc = iter.next().value;
    }
    for (const a of iter) {
      acc = f(acc, a);
    }
    return acc;
  };

  const add = (a, b) => a + b;

  log(reduce(add, 0, [1, 2, 3, 4, 5]));
  // 15

  log(add(add(add(add(add(0, 1), 2), 3), 4), 5));
  // 15

  log(reduce(add, [1, 2, 3, 4, 5]));
  // 15

  // console.clear();
</script>


```
#### 6. reduce 2
```html
<script>
  log(
    reduce(
      (total_price, product) => total_price + product.price,
      0,
      products));
</script>

```
#### 7. map+filter+reduce 중첩 사용과 함수형 사고
```html
  <script>
  const add = (a, b) => a + b;

  log(reduce(add, 0, [1, 2, 3, 4, 5]));
  // 15

  log(add(add(add(add(add(0, 1), 2), 3), 4), 5));
  // 15

  log(reduce(add, [1, 2, 3, 4, 5]));
  // 15

  // console.clear();
  </script>
  <script>
  log(
    reduce(
      (total_price, product) => total_price + product.price,
      0,
      products));
  </script>
```
### 🚀 5. 코드를 값으로 다루어 표현력 높이기
#### 1. go
#### 2. pipe
#### 3. go를 사용하여 읽기 좋은 코드로 만들기
#### 4. go+curry를 사용하여 더 읽기 좋은 코드로 만들기
#### 5. 함수 조합으로 함수 만들기

### 🚀 6. 장바구니 예제
#### 1. 총 수량, 총 가격
#### 2. HTML로 출력하기
### 🚀 7. 지연성 1
#### 1. range와 느긋한 L.range
#### 2. range와 느긋한 L.range 테스트
#### 3. take
#### 4. 제너레이터/이터레이터 프로토콜로 구현하는 지연 평가
#### 5. L.map
#### 6. L. filter
#### 7. range, map, filter, take, reduce 중첩 사용
#### 8. L.range, L.map, L.filter, take 의 평가 순서
#### 9. 엄격한 계산과 느긋한 계산의 효율성 비교
#### 10. map, filter 계열 함수들이 가지는 결합 법칙
#### 11. ES6의 기본 규악을 통해 구현하는 지연 평가의 장점
### 🚀 8. 지연성 2
#### 1. 결과를 만드는 함수 reduce, take
#### 2. queryStr 함수 만들기
#### 3. Array.prototype.join 보다 다형성이 높은 join 함수
#### 4. take, find
#### 5. L.map, L.filter로 map과 filter 만들기
#### 6. L.flatten, flatten
#### 7. L.flatMap, flatMap
#### 8. 2차원 배열 다루기
#### 9. 지연성 / 이터러블 중심 프로그래밍 실무적인 코드
### 🚀 9. 비동기/동시성 프로그래밍 1
#### 1. callback과 Promise
#### 2. 비동기를 값으로 만드는 Promise
#### 3. 값으로서의 Promise 활용
#### 4. 합성 관점에서의 Promise와 모나드
#### 5. Kleisli Composition 관점에서의 Promise
#### 6. go, pipe, reduce에서 비동기 제어
#### 7. promise.then의 중요한 규칙
### 🚀 10. 비동기/동시성 프로그래밍 2
#### 1. 지연 평가 + Promise - L.map, map, take
#### 2. Kleisli Composition - L.filter, filter, nop, take
#### 3. reduce에서 nop 지원
#### 4. 지연 평가 + Promise의 효율성
#### 5. 지연된 함수열을 병렬적으로 평가하기 - C.reduce, C.take 1
#### 6. 지연된 함수열을 병렬적으로 평가하기 - C.reduce, C.take 2
#### 7. 즉시 병렬적으로 평가하기 - C.map, C.filter
#### 8. 즉시, 지연, Promise, 병렬적 조합하기
#### 9. 코드 간단히 정리
#### 10. Node.js에서 SQL 병렬 평가로 얻은 효율
### 🚀 11. 비동기/동시성 프로그래밍 3
#### 1. async/await
#### 2. Q&A) Array.prototype.map이 있는데 왜 FxJS의 map 함수가 필요한지?
#### 3. Q&A) 이제 비동기는 async/await로 제어할 수 있는데 왜 파이프라인이 필요한지?
#### 4. Q&A) async/await와 파이프라인을 같이 사용하기도 하는지?
#### 5. Q&A) 동기 상황에서 에러 핸들링은 어떻게 해야하는지?
#### 6. Q&A) 비동기 상황에서 에러 핸들링은 어떻게 해야하는지?
#### 7. Q&A) 동기/비동기 에러 핸들링에서의 파이프라인의 이점은?
