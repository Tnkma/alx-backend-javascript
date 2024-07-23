// Export a const instance of WeakMap named weakMap
export const weakMap = new WeakMap();

// Export a new function named queryAPI
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (weakMap.has(endpoint)) {
    // Get the current count
    let count = weakMap.get(endpoint);

    // Increment the count
    count += 1;

    // Update the count in the weakMap
    weakMap.set(endpoint, count);

    // Check if the count is 5 or more
    if (count >= 5) {
      // Throw an error with the message "Endpoint load is high"
      throw new Error('Endpoint load is high');
    }
  } else {
    // If the endpoint is not in the weakMap, add it with an initial count of 1
    weakMap.set(endpoint, 1);
  }
}
