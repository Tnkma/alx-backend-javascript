export default function groceriesList() {
  // Create a new Map to hold the grocery items and their quantities
  const groceries = new Map();

  // Add each grocery item and its quantity to the Map
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  // Return the populated Map
  return groceries;
}
