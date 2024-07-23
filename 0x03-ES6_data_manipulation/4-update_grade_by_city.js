// Import getListStudentIds function from './1-get_list_student_ids'
import getListStudents from './0-get_list_students';

// Define the updateStudentGradeByCity function
export default function updateStudentGradeByCity(studentIds, city, newGrades) {
  // Get the list of students based on studentIds using getListStudentIds
  const students = getListStudents(studentIds);

  // Filter students by the specified city
  const studentsInCity = students.filter((student) => student.location === city);
  console.log(studentsInCity);

  // Map through the students in the city and update their grades
  const updatedStudents = studentsInCity.map((student) => {
    // Find the corresponding new grade for the student
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);

    // If a new grade is found, update the student's grade; otherwise, set it to 'N/A'
    const updatedGrade = newGrade ? newGrade.grade : 'N/A';

    // Return a new object with the updated grade
    return {
      ...student,
      grade: updatedGrade,
    };
  });
  // Return the array of students with updated grades
  return updatedStudents;
}
