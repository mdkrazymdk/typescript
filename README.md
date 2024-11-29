# Typescript


## Task: Create University Management System in TypeScript using Enum


## Project Goal


The purpose of this project is to gain practical skills working with TypeScript, particularly using Enums, by developing a university management system.


## Task Overview 


### Step 1: Create the following Enums:


- **StudentStatus**: Represents the student's status (`Active`, `Academic_Leave`, `Graduated`, `Expelled`).

  
- **CourseType**: Represents the type of the course (`Mandatory`, `Optional`, `Special`).

  
- **Semester**: Represents the semester (`First`, `Second`).

  
- **Grade**: Represents grades (`Excellent = 5`, `Good = 4`, `Satisfactory = 3`, `Unsatisfactory = 2`).

  
- **Faculty**: Represents university faculties (`Computer_Science`, `Economics`, `Law`, `Engineering`).



### Step 2: Define Interfaces


- interface Student


- interface Course


- interface Grade


### Step 3: Implement the UniversityManagementSystem class with the following methods:


- enrollStudent(student: Omit<Student, "id">): Student


- registerForCourse(studentId: number, courseId: number): void


- setGrade(studentId: number, courseId: number, grade: Grade): void


- updateStudentStatus(studentId: number, newStatus: StudentStatus): void


- getStudentsByFaculty(faculty: Faculty): Student[]


- getStudentGrades(studentId: number): Grade[]


- getAvailableCourses(faculty: Faculty, semester: Semester): Course[]


- calculateAverageGrade(studentId: number): number


### Additional Requirements:

#### Course Registration Validation


##### Ensure the student can register for a course only if:

- The maximum number of students for the course has not been exceeded.

- The course belongs to the same faculty as the student.


##### Status Update Validation


- Validate the status change of a student to ensure it aligns with business rules.


##### Grade Assignment Validation


- Ensure a grade can be assigned only if the student is registered for the course.

  
##### Top Students by Faculty


- Create a method to retrieve a list of top-performing students by faculty.


### Submission Format


- The code must be written entirely in TypeScript.

  
- All methods must include proper type definitions for parameters and return values.


- The code must be well-documented with comments.


- Submit the final implementation in a dedicated GitHub branch.


- All logic should be contained in a single file (no modules).
