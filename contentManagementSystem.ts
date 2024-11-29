// Enums
enum StudentStatus {
  Active = "Active",
  Academic_Leave = "Academic_Leave",
  Graduated = "Graduated",
  Expelled = "Expelled",
}

enum CourseType {
  Mandatory = "Mandatory",
  Optional = "Optional",
  Special = "Special",
}

enum Semester {
  First = "First",
  Second = "Second",
}

enum GradeEnum {
  Excellent = 5,
  Good = 4,
  Satisfactory = 3,
  Unsatisfactory = 2,
}

enum Faculty {
  Computer_Science = "Computer_Science",
  Economics = "Economics",
  Law = "Law",
  Engineering = "Engineering",
}

// Interfaces
interface Student {
  id: number;
  fullName: string;
  faculty: Faculty;
  year: number;
  status: StudentStatus;
  enrollmentDate: Date;
  groupNumber: string;
}

interface Course {
  id: number;
  name: string;
  type: CourseType;
  credits: number;
  semester: Semester;
  faculty: Faculty;
  maxStudents: number;
}

interface Grade {
  studentId: number;
  courseId: number;
  grade: GradeEnum;
  date: Date;
  semester: Semester;
}

// Main Class
class UniversityManagementSystem {
  private students: Student[] = [];
  private courses: Course[] = [];
  private grades: Grade[] = [];
  private studentCounter = 1;
  private courseCounter = 1;

  // Add a new student
  enrollStudent(student: Omit<Student, "id">): Student {
    const newStudent = { id: this.studentCounter++, ...student };
    this.students.push(newStudent);
    return newStudent;
  }

  // Register student for a course
  registerForCourse(studentId: number, courseId: number): void {
    const student = this.students.find(s => s.id === studentId);
    const course = this.courses.find(c => c.id === courseId);

    if (!student || !course) throw new Error("Student or Course not found.");

    if (student.faculty !== course.faculty)
      throw new Error("Student's faculty does not match course faculty.");

    const registeredCount = this.grades.filter(g => g.courseId === courseId).length;
    if (registeredCount >= course.maxStudents)
      throw new Error("Course is full.");

    this.grades.push({ studentId, courseId, grade: GradeEnum.Unsatisfactory, date: new Date(), semester: course.semester });
  }

  // Set a grade for a student
  setGrade(studentId: number, courseId: number, grade: GradeEnum): void {
    const registration = this.grades.find(g => g.studentId === studentId && g.courseId === courseId);
    if (!registration) throw new Error("Student is not registered for this course.");

    registration.grade = grade;
    registration.date = new Date();
  }

  // Update student's status
  updateStudentStatus(studentId: number, newStatus: StudentStatus): void {
    const student = this.students.find(s => s.id === studentId);
    if (!student) throw new Error("Student not found.");

    if (student.status === StudentStatus.Graduated || student.status === StudentStatus.Expelled)
      throw new Error("Cannot change status for Graduated or Expelled students.");

    student.status = newStatus;
  }

  // Get all students by faculty
  getStudentsByFaculty(faculty: Faculty): Student[] {
    return this.students.filter(s => s.faculty === faculty);
  }

  // Get grades for a student
  getStudentGrades(studentId: number): Grade[] {
    return this.grades.filter(g => g.studentId === studentId);
  }

  // Get available courses by faculty and semester
  getAvailableCourses(faculty: Faculty, semester: Semester): Course[] {
    return this.courses.filter(c => c.faculty === faculty && c.semester === semester);
  }

  // Calculate average grade for a student
  calculateAverageGrade(studentId: number): number {
    const studentGrades = this.grades.filter(g => g.studentId === studentId);
    if (studentGrades.length === 0) return 0;

    const total = studentGrades.reduce((sum, g) => sum + g.grade, 0);
    return total / studentGrades.length;
  }

  // Get list of top students by faculty
  getTopStudentsByFaculty(faculty: Faculty): Student[] {
    const topStudents = this.students.filter(s => s.faculty === faculty).map(s => {
      const avgGrade = this.calculateAverageGrade(s.id);
      return { student: s, avgGrade };
    });

    return topStudents
      .filter(({ avgGrade }) => avgGrade >= 4.5)
      .map(({ student }) => student);
  }
}

// Example
const ums = new UniversityManagementSystem();

// Enroll a student
const student1 = ums.enrollStudent({
  fullName: "John Doe",
  faculty: Faculty.Computer_Science,
  year: 1,
  status: StudentStatus.Active,
  enrollmentDate: new Date(),
  groupNumber: "CS-101",
});

// Add a course
const course1: Course = {
  id: 1,
  name: "Programming 101",
  type: CourseType.Mandatory,
  credits: 3,
  semester: Semester.First,
  faculty: Faculty.Computer_Science,
  maxStudents: 30,
};
ums["courses"].push(course1);

// Register for a course
ums.registerForCourse(student1.id, course1.id);

// Set a grade
ums.setGrade(student1.id, course1.id, GradeEnum.Excellent);

// Calculate average grade
console.log("Average Grade:", ums.calculateAverageGrade(student1.id));
