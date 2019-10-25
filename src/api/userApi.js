//polyfill that ensures that this will work in browsers that dont have fetch support natively
//polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it
import 'whatwg-fetch';


//public function
export function getUsers() {
  return get('users');
}

//private function
function get(url) {
  return fetch(url).then(onSuccess, onError);
}

//private function
function onSuccess(response) {
  return response.json();
}

//private function
function onError(error) {
  console.log(error); //eslint-disable-line no-console
}
