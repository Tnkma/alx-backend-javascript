import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(studentIds) {
  const students = getListStudentIds(studentIds);
  const result = students.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return result;
}
