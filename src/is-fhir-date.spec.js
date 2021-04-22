import test from 'tape'
import isFhirDate from './is-fhir-date.js'

const tests = [
  ['1982', true],
  ['1982-3', false],
  ['12/29/82', false],
  ['1982', true],
  ['1982-12', true],
  ['1982-12-14', true],
  ['2010-02-01', true],
  ['2021-01-12', true],
  ['23-01-12', false],
  // invalid months
  ['1998-00-12', false],
  ['1998-13-12', false],
  // invalid dates
  ['1998-02-30', false],
  ['2021-04-31', false],
  // leap years
  ['2020-02-29', true],
  ['2021-02-29', false],
  // junk input
  [{}, false],
  [null, false],
  [undefined, false],
  ['', false],
  [new Date(), false],
]

test('isFhirDate', t => {
  tests.forEach(([input, output]) => {
    t.equal(isFhirDate(input), output, `in: ${input} should be ${output}`)
  })
  t.end()
})
