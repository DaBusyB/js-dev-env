/* eslint-disable no-console*/
//this script runs webpack.config production build

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for productin. Please be patient...'))

webpack(webpackConfig).run((err, stats) => {
  if(err) {
    console.log(chalk.red(err))
    return 1;
  }

  //ensures that warnings, stats and errors are displayed to the console....not required
  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if(jsonStats.hasWarnings) {
    console.log(chalk.yellow("Webpack generated the following warnings: "))
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)))
  }

  console.log(`Webpack stats: ${stats}`)

  console.log(chalk.green("The app has been built for productions and written to /dist!"));

  return 0;
})
