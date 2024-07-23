export default function cleanSet(set, startString) {
  // Initialize an empty array to hold the modified set values
  const result = [];

  // Check if the startString is empty, return an empty string if true
  if (!startString) {
    return '';
  }

  // Iterate through each value in the set
  for (const value of set) {
    // Check if the value starts with the specified startString
    if (value.startsWith(startString)) {
      // Append the rest of the string (excluding the startString) to the result array
      result.push(value.slice(startString.length));
    }
  }

  // Join the result array with a hyphen separator and return the resulting string
  return result.join('-');
}
