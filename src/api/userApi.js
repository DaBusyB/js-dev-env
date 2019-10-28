//polyfill that ensures that this will work in browsers that dont have fetch support natively
//polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it
import 'whatwg-fetch';
import chalk from 'chalk';

//public function
export function getUsers() {
  return get('users');
}

//private function
//fetch, promise resolution, and error handling are abstracted away in this function
function get(url) {
  return fetch(url).then(onSuccess, onError);
}

//private function
//hanlde preloaders
function onSuccess(response) {
  return response.json();
}

//private function
//handles errors
function onError(error) {
  console.log(chalk.purple(error)); //eslint-disable-line no-console
}
