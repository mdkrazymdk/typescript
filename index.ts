// Визначення базових типів

// DayOfWeek
type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";

// TimeSlot
type TimeSlot = "8:30-10:00" | "10:15-11:45" | "12:15-13:45" | "14:00-15:30" | "15:45-17:15";

// CourseType
type CourseType = "Lecture" | "Seminar" | "Lab" | "Practice";

// Основні структури

//  Professor
type Professor = {
  id: number;
  name: string;
  department: string;
};

// Classroom
type Classroom = {
  number: string;
  capacity: number;
  hasProjector: boolean;
};

// Course
type Course = {
  id: number;
  name: string;
  type: CourseType;
};

// Lesson
type Lesson = {
  courseId: number;
  professorId: number;
  classroomNumber: string;
  dayOfWeek: DayOfWeek;
  timeSlot: TimeSlot;
};

// Масиви даних

const professors: Professor[] = [
  { id: 1, name: "Dr. Smith", department: "Computer Science" },
  { id: 2, name: "Dr. Brown", department: "Mathematics" },
  { id: 3, name: "Dr. Johnson", department: "Physics" },
  { id: 4, name: "Dr. Taylor", department: "Chemistry" },
  { id: 5, name: "Dr. White", department: "Biology" },
];

const classrooms: Classroom[] = [
  { number: "101", capacity: 30, hasProjector: true },
  { number: "102", capacity: 25, hasProjector: false },
  { number: "103", capacity: 20, hasProjector: true },
  { number: "104", capacity: 35, hasProjector: true },
  { number: "105", capacity: 40, hasProjector: false },
];

const courses: Course[] = [
  { id: 1, name: "Algorithms", type: "Lecture" },
  { id: 2, name: "Linear Algebra", type: "Seminar" },
  { id: 3, name: "Quantum Physics", type: "Lecture" },
  { id: 4, name: "Organic Chemistry", type: "Lab" },
  { id: 5, name: "Biology Basics", type: "Practice" },
];

const schedule: Lesson[] = [];

// Функції для роботи з даними

// Додати професора
function addProfessor(professor: Professor): void {
  professors.push(professor);
  console.log(`Added professor: ${professor.name}`);
}
//  Додати заняття
function addLesson(lesson: Lesson): boolean {
  const conflict = validateLesson(lesson);
  if (conflict) {
    console.log("Conflict detected:", conflict);
    return false;
  }
  schedule.push(lesson);
  //console.log(`Added lesson: ${lesson.courseId} by professor ${lesson.professorId} in room ${lesson.classroomNumber}`);
  return true;
}

//  Пошук доступних аудиторій
function findAvailableClassrooms(timeSlot: TimeSlot, dayOfWeek: DayOfWeek): string[] {
  const occupiedClassrooms = schedule
    .filter(lesson => lesson.timeSlot === timeSlot && lesson.dayOfWeek === dayOfWeek)
    .map(lesson => lesson.classroomNumber);
  
  return classrooms
    .filter(classroom => !occupiedClassrooms.includes(classroom.number))
    .map(classroom => classroom.number);
}

//  Отримати розклад професора
function getProfessorSchedule(professorId: number): Lesson[] {
  return schedule.filter(lesson => lesson.professorId === professorId);
}

//  Валідація заняття
type ScheduleConflict = {
  type: "ProfessorConflict" | "ClassroomConflict";
  lessonDetails: Lesson;
};

function validateLesson(lesson: Lesson): ScheduleConflict | null {
  const professorConflict = schedule.find(l => l.professorId === lesson.professorId && l.dayOfWeek === lesson.dayOfWeek && l.timeSlot === lesson.timeSlot);
  if (professorConflict) {
    return { type: "ProfessorConflict", lessonDetails: professorConflict };
  }
  const classroomConflict = schedule.find(l => l.classroomNumber === lesson.classroomNumber && l.dayOfWeek === lesson.dayOfWeek && l.timeSlot === lesson.timeSlot);
  if (classroomConflict) {
    return { type: "ClassroomConflict", lessonDetails: classroomConflict };
  }
  return null;
}

//  Вивести розклад на конкретний день
function logScheduleForDay(day: DayOfWeek): void {
  const lessonsForDay = schedule.filter(lesson => lesson.dayOfWeek === day);
  console.log(`Schedule for ${day}:`);
  lessonsForDay.forEach(lesson => {
    const course = courses.find(c => c.id === lesson.courseId);
    const professor = professors.find(p => p.id === lesson.professorId);
    console.log(`- ${course?.name} by ${professor?.name} in ${lesson.classroomNumber} at ${lesson.timeSlot}`);
  });
}

//  Отримати використання аудиторії
function getClassroomUtilization(classroomNumber: string): number {
  const totalLessons = schedule.length;
  const occupiedLessons = schedule.filter(lesson => lesson.classroomNumber === classroomNumber).length;
  return totalLessons ? (occupiedLessons / totalLessons) * 100 : 0;
}

//  Отримати найпопулярніший тип заняття
function getMostPopularCourseType(): CourseType {
  const typeCount: { [key in CourseType]: number } = {
    Lecture: 0,
    Seminar: 0,
    Lab: 0,
    Practice: 0,
  };
  
  schedule.forEach(lesson => {
    const course = courses.find(c => c.id === lesson.courseId);
    if (course) {
      typeCount[course.type]++;
    }
  });
  
  return Object.keys(typeCount).reduce((a, b) => (typeCount[a as CourseType] > typeCount[b as CourseType] ? a : b)) as CourseType;
}

//  Змінити аудиторію для заняття
function reassignClassroom(lessonId: number, newClassroomNumber: string): boolean {
  const lesson = schedule.find(l => l.courseId === lessonId);
  if (!lesson) {
    console.log(`Lesson with ID ${lessonId} not found.`);
    return false;
  }
  
  lesson.classroomNumber = newClassroomNumber;
  console.log(`Reassigned lesson ${lessonId} to classroom ${newClassroomNumber}`);
  return true;
}

//  Вилучити заняття
function cancelLesson(lessonId: number): void {
  const index = schedule.findIndex(l => l.courseId === lessonId);
  if (index !== -1) {
    schedule.splice(index, 1);
    console.log(`Canceled lesson with ID ${lessonId}`);
  } else {
    console.log(`Lesson with ID ${lessonId} not found.`);
  }
}

//  Пошук заняття
function findLesson(courseId: number, professorId: number): Lesson | undefined {
  return schedule.find(lesson => lesson.courseId === courseId && lesson.professorId === professorId);
}

// Додамо кілька занять
addLesson({ courseId: 1, professorId: 1, classroomNumber: "101", dayOfWeek: "Monday", timeSlot: "8:30-10:00" });
addLesson({ courseId: 2, professorId: 2, classroomNumber: "102", dayOfWeek: "Tuesday", timeSlot: "10:15-11:45" });
addLesson({ courseId: 3, professorId: 3, classroomNumber: "103", dayOfWeek: "Monday", timeSlot: "12:15-13:45" });
addLesson({ courseId: 4, professorId: 4, classroomNumber: "104", dayOfWeek: "Wednesday", timeSlot: "14:00-15:30" });
addLesson({ courseId: 5, professorId: 5, classroomNumber: "105", dayOfWeek: "Friday", timeSlot: "15:45-17:15" });
addLesson({ courseId: 1, professorId: 1, classroomNumber: "101", dayOfWeek: "Wednesday", timeSlot: "8:30-10:00" });

// Лог для пар в понеділок та вівторок
logScheduleForDay("Monday");
logScheduleForDay("Tuesday");

// Лог видалення заняття
cancelLesson(1); // Видалити заняття з ID 1
cancelLesson(10); // Тест на видалення неіснуючого заняття


console.log(getProfessorSchedule(2));

reassignClassroom(2, "103");
// Лог пошуку заняття
const lessonFound = findLesson(2, 2);
if (lessonFound) {
  console.log(`Found lesson: ${lessonFound.courseId} by professor ${lessonFound.professorId} in ${lessonFound.classroomNumber} at ${lessonFound.dayOfWeek} ${lessonFound.timeSlot}`);
} else {
  console.log("Lesson not found.");
}

