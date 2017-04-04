## Dot Iterator "d9r"

Simple class that allows you to access objects via dot-notation

Unlike other popular implimentations, d9r provides a dotEach method
which allows you to leverage dot-notation access in a functional manor.

There are no additional dependencies for this class.


## Install

```
$ npm install --save d9r
```


## Usage

```js
const ø = require('d9r');

ø.get({foo: {bar: 'unicorn'}}, 'foo.bar'); 
//=> 'unicorn'

ø.get({foo: {bar: 'a'}}, 'foo.notDefined.deep');
//=> undefined


const obj = {foo: {bar: 'a'}};
ø.set(obj, 'foo.bar', 'b');
console.log(obj);
//=> {foo: {bar: 'b'}}

ø.set(obj, 'foo.baz', 'x');
console.log(obj);
//=> {foo: {bar: 'b', baz: 'x'}}

ø.has({foo: {bar: 'unicorn'}}, 'foo.bar');
//=> true

ø.has({foo: {baz: undefined}}, 'foo.baz');
//=> true

ø.delete(obj, 'foo.bar');
console.log(obj);
//=> {foo: {}}

```

