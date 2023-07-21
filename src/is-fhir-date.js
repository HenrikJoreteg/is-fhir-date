/**
 * Determines whether a date is actual date. The regexp will say "2010-02-31" is
 * OK even though february only has a max of 29 dates. And we need to take leap
 * years into account.
 *
 * @param {string} fhirDate
 * @returns {boolean}
 */
const isPossibleDate = fhirDate => {
  let [year, month, date] = fhirDate.split('-').map(Number)
  // month and date are optional
  month = month || 1
  date = date || 1
  const asDate = new Date(year, month - 1, date, 0, 0, 0, 0)

  if (
    year !== asDate.getFullYear() ||
    month - 1 !== asDate.getMonth() ||
    date !== asDate.getDate()
  ) {
    return false
  }
  return true
}

// Source: https://www.hl7.org/fhir/datatypes.html#date
const dateRegexp = /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$/

/**
 * Determines if given string matches the regexp for FHIR's v4.0.1 `date` type
 *
 * @param {string} stringToTest
 * @returns {boolean}
 */
export default stringToTest =>
  dateRegexp.test(stringToTest || '') && isPossibleDate(stringToTest)
