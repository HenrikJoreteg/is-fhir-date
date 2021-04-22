# is-fhir-date

![](https://img.shields.io/npm/dm/is-fhir-date.svg)![](https://img.shields.io/npm/v/is-fhir-date.svg)![](https://img.shields.io/npm/l/is-fhir-date.svg)

Tiny module that determines if a given given string is a valid FHIR `date` type as per: https://www.hl7.org/fhir/datatypes.html#date _and_ also checks it for validity.

The FHIR spec only specifies a regexp format, it does not check them for validity.

This module confirms **both** format and validity.

For example, the following will all pass the regexp but should _not_ be considered valid because they're not valid dates:

```
'2021-02-29' // this is not a leap year
'2021-02-30' // february doesn't have 30 days
'2021-04-31' // april doesn't have 31 days
```

## install

```
npm install is-fhir-date
```

# usage

```js
import isFhirDate from 'is-fhir-date'

isFhirDate('sept 29 82') // false
isFhirDate('1982') // true
isFhirDate('1982-12') // true
isFhirDate('1982-12-14') // true
isFhirDate('1998-02-30') // false
isFhirDate('2021-04-31') // false
```

# test

```
npm test
```

## Change log

- `1.0.0`: First public release.

## credits

If you like this follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter. This was built for and is in use in: [AnesthesiaCharting.com](https://anesthesiacharting.com).

## license

[MIT](http://mit.joreteg.com/)
