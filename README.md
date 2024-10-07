# Topic: "Development of a University Schedule Management System"

## Goal:

Create a system for managing university class schedules using concepts of Union Types, Type Aliases, and Arrays in TypeScript.

## Tasks:

**Definition of Basic Types:**

a) Create a type alias DayOfWeek for the days of the week ("Monday" | "Tuesday" | ... | "Friday").

b) Create a union type TimeSlot for possible class time slots ("8:30-10:00" | "10:15-11:45" | "12:15-13:45" | "14:00-15:30" | "15:45-17:15").

c) Define a type alias CourseType for types of classes ("Lecture" | "Seminar" | "Lab" | "Practice").


**Creation of Basic Structures:**

a) Create a type alias Professor with fields: id (number), name (string), department (string).

b) Define a type alias Classroom with fields: number (string), capacity (number), hasProjector (boolean).

c) Create a type alias Course with fields: id (number), name (string), type (CourseType).

d) Define a type alias Lesson with fields: courseId (number), professorId (number), classroomNumber (string), dayOfWeek (DayOfWeek), timeSlot (TimeSlot).


**Working with Data Arrays:**


a) Create arrays professors: Professor[], classrooms: Classroom[], courses: Course[], and schedule: Lesson[].

b) Write a function addProfessor(professor: Professor): void to add a new professor.

c) Create a function addLesson(lesson: Lesson): boolean that adds a lesson to the schedule if there are no conflicts.


**Search and Filtering Functions:**

a) Implement a function findAvailableClassrooms(timeSlot: TimeSlot, dayOfWeek: DayOfWeek): string[] that returns the numbers of available classrooms at the specified time.

b) Write a function getProfessorSchedule(professorId: number): Lesson[] that returns the schedule of a specific professor.

**Conflict Handling and Validation:**

a) Create a type alias ScheduleConflict with fields: type ("ProfessorConflict" | "ClassroomConflict"), lessonDetails: Lesson.

b) Write a function validateLesson(lesson: Lesson): ScheduleConflict | null that checks whether a new lesson creates conflicts in the schedule.


**Analysis and Reports:**

a) Implement a function getClassroomUtilization(classroomNumber: string): number that returns the percentage utilization of a classroom.

b) Create a function getMostPopularCourseType(): CourseType that determines the most popular type of class.

**Data Modification:**

a) Write a function reassignClassroom(lessonId: number, newClassroomNumber: string): boolean that changes the classroom for a lesson if possible.

b) Implement a function cancelLesson(lessonId: number): void that removes a lesson from the schedule.

### Expected Results:

All types are correctly defined using type aliases and union types.

Functions are implemented with correct parameter typing and return values.

Efficient handling of data arrays, including adding, removing, and searching for elements.

Correct handling of schedule conflicts and data validation.

Analysis functions provide useful information about university resource utilization.


### The task is considered complete if:

All task points are implemented and function correctly.

The code is written using proper TypeScript practices, without using interfaces and generics.

Typing is used consistently and correctly throughout the project.

Functions return expected results for various input data.

Basic error handling and edge cases are implemented.

The code is accompanied by short comments explaining the logic of complex parts.

