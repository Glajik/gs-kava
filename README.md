# Kava

Lightweight framework for testing Google Apps Script.


## Installation

Use file `Kava.js` in `dist` folder in your project. You can upload it, or simple copy & paste code to your GAS project.


## Usage

At the new file write function with tests.

### my.test.gs
```
function doTests() {
  const t = new Kava('Simple test');
  
  t.make('Should work', function() {
    t.isEqual('abc', 'abc');
  });

  t.make('Should throw', function() {
    t.isEqual('abc', 'cde');
  });
  
  Logger.log(t.output);
}
```

Running function `doTests()` will generate output:
```
Simple test:
----
1. Should work - OK
----
2. Should throw - ERROR
> Error: expected cde, but received abc
----
* Total: 2, errors:1
```

## API

<a name="Kava"></a>

## Kava
For testing purpose in Google Apps Script projects

**Kind**: global class  

* [Kava](#Kava)
    * [.errCount](#Kava+errCount)
    * [.output](#Kava+output)
    * [.moduleName(name)](#Kava+moduleName)
    * [.compareWith(reference)](#Kava+compareWith) ⇒ <code>function</code>
    * [.isEqualByKey(key, received, expected)](#Kava+isEqualByKey)
    * [.isEqual(received, expected)](#Kava+isEqual)

<a name="Kava+errCount"></a>

### kava.errCount
Return count of errors

**Kind**: instance property of [<code>Kava</code>](#Kava)  
<a name="Kava+output"></a>

### kava.output
Getter make formatted text output of test results.
Start it at finish tests

**Kind**: instance property of [<code>Kava</code>](#Kava)  
<a name="Kava+moduleName"></a>

### kava.moduleName(name)
Set module name that testing

**Kind**: instance method of [<code>Kava</code>](#Kava)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | module name |

<a name="Kava+compareWith"></a>

### kava.compareWith(reference) ⇒ <code>function</code>
Check, if all keys and values from sample has comparing object.
Throw exception, if is not equal.

**Kind**: instance method of [<code>Kava</code>](#Kava)  
**Returns**: <code>function</code> - that take as argument object for comparing  

| Param | Type | Description |
| --- | --- | --- |
| reference | <code>Object</code> | Key-value object that used for sample for comparing |

**Example**  
```js
const kava = new Kava('Description');
const assertion = { a: 1, b: 2 };
const compare = kava.compareWith(assertion);
compare({ a: 1, b: 2}); // OK
compate({ a: 1, c: 3 }); // Throw exception
```
<a name="Kava+isEqualByKey"></a>

### kava.isEqualByKey(key, received, expected)
Comparing values by same key in the two objects.
Throw exception, if is not equal.

**Kind**: instance method of [<code>Kava</code>](#Kava)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | Key by which the value will be checked |
| received | <code>Object</code> | Object, which compared |
| expected | <code>Object</code> | Object, used as reference |

<a name="Kava+isEqual"></a>

### kava.isEqual(received, expected)
Compare two primitive type values.
Throw exception, if is not equal.

**Kind**: instance method of [<code>Kava</code>](#Kava)  

| Param | Type | Description |
| --- | --- | --- |
| received | <code>\*</code> | value, that compared |
| expected | <code>\*</code> | sample value |

