//centralized HTTP requests
import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(){
  return get('users');
}

export function deleteUser(id){
  return del(`users/${id}`);
}

//reusable boilerplate for get()
function get(url){
  return fetch(baseUrl + url).then(onSuccess,onError);
}

//reusable boilerplate for del()
function del(url){
  const request = new Request(baseUrl + url,{
    method:'DELETE'
  })
  return fetch(request).then(onSuccess,onError);
}

function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log(error); //eslint-disable-line no-console
}
