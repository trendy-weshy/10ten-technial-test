/**
 * created on 12 Sep 2018
 */

const countries: Array<{ [key: string]: any }> = require('./countries.json');

const translation: string = process.argv.splice(2)[0];

if (!translation || translation.length < 1) {
    const err = new Error();
    err.name = 'MissingArgument';
    err.message = 'Argument not provided, could not complete request.';
    throw err;
}

const filteredCountries = countries.filter(country => (country.translations.hasOwnProperty(translation)));

if (filteredCountries.length === 0) {
    const err = new Error();
    err.name = 'TransalationNotFound';
    err.message = 'Sorry could not find transalation you were looking for.';
    throw err;
}

const output = filteredCountries.map(country => (country.translations[translation].official));
console.log(output.join('\n'));
