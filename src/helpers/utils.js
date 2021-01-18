// defining and exporting the helper functions

// defining and exporting the getFormBody function

export function getFormBody(params) {
  let formBody = [];

  //    iterating on each key value pair of the params object and pushing the key=value pair to the above form body array

  for (let property in params) {
    let encodedKey = encodeURIComponent(property);
    let encodefValue = encodeURIComponent(params[property]);

    formBody.push(encodedKey, '=', encodefValue);
  }

  //   returning the elements of the form body array joined with & in string format

  return formBody.join('&');
}
