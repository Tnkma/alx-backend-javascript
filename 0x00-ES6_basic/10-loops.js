export default function appendToEachArrayValue(array, appendString) {
  const value = [];
  for (const arg of array) {
    value.push(`${appendString}${arg}`);
  }
  return value;
}
