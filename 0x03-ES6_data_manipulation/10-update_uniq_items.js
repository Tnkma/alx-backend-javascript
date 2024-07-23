export default function updateUniqueItems(groceriesMap) {
  // Check if the argument is not a Map
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through each entry in the map
  for (const [item, quantity] of groceriesMap) {
    // Check if the quantity is 1
    if (quantity === 1) {
      // Update the quantity to 100
      groceriesMap.set(item, 100);
    }
  }

  // Return the updated map
  return groceriesMap;
}
