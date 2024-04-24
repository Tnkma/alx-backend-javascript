export default function appendToEachArrayValue(array, appendString) {
  let value = []
  for (let arg of array) {
    value.push(appendString + ' ' + arg);
  }
  return value;
}
