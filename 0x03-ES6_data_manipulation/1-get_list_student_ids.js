export default function getListStudentIds(itemList) {
  let arrayIds = [];

  if (!Array.isArray(itemList)) {
    return arrayIds;
  }
  arrayIds = itemList.map((item) => item.id);
  return arrayIds;
}
