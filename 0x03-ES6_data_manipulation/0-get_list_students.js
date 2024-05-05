export default function getListStudents() {
  const itemList = [];

  const obj1 = { firstname: 'Guillaume', id: 1, location: 'San Francisco' };
  const obj2 = { firstname: 'James', id: 2, location: 'Columbia' };
  const obj3 = { firstname: 'Serena', id: 5, location: 'San Francisco' };

  itemList.push(obj1, obj2, obj3);
  return itemList;
}
