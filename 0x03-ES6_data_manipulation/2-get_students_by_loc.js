export default function getStudentsByLocation(itemList, city) {
  let studentsLocation = [];

  if (!Array.isArray(itemList)) {
    return studentsLocation;
  }
  studentsLocation = itemList.filter((item) => item.location === city);
  return studentsLocation;
}
