class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addData(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item)) {
      debugger;
      this.data.splice(this.data.indexOf(item), 1);
    }
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addData("Pesho");
textStorage.addData("Gosho");
textStorage.removeItem("Pesho");
textStorage.removeItem("Marijka");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

numberStorage.addData(10);

// TS build in generic utility types
// Partial utility type
interface CourseGoal {
  title: string;
  description: string;
  date: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.date = date;

  return courseGoal as CourseGoal;
}

// Readyonly
const namesArray: Readonly<string[]> = ["Pesho", "Gosho"];
namesArray.push(); // even though it is valid JS throws an exception
