export default function getListStudents() {
  const itemList = [];

  const obj1 = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const obj2 = { id: 2, firstName: 'James', location: 'Columbia' };
  const obj3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };

  itemList.push(obj1, obj2, obj3);
  return itemList;
}
