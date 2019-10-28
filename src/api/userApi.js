//polyfill that ensures that this will work in browsers that dont have fetch support natively
//polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it
import 'whatwg-fetch';
import chalk from 'chalk';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

//public function
export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`)
}
//private function
//fetch, promise resolution, and error handling are abstracted away in this function
function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });
  return fetch(request).then(onSuccess, onError);
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
