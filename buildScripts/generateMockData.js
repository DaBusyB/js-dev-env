//this script generates moch data for local development

/*eslint-disable no-console*/
import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function(err) {
  err ? console.log(chalk.red(err)) : console.log(chalk.green("Mock data generated."))
});

