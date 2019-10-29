//this script runs webpack.config production build

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

webpack(webpackConfig).run((err, stats) => {
  if(err) {
    // eslint-disable-next-line no-console
    console.log(chalk.red(err))
    return 1;
  }
  return 0
})
