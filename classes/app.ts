abstract class Department {
  // abstract class can only be extended, cannot be instantiated
  static fiscalYear = 200; // field only accessble through the class
  private depName: string; // field, only declared, used later in the constructor, TS specific, you can also set default value with the = operator
  private employees: string[]; // private is a TS modifier that tells who has access to the fields
  //   #age: number; // new JS feature - private fields without the need of TS
  //private  - only the current class has acces to the field using the this keyword ( iherited classes do not have access)
  // protected - modifier that lets other other classes access the field outside people do not have access to the field

  //   constructor(name: string) {
  //     this.depName = name;
  //     this.employees = [];
  //   }

  // alternate constructor TS style, TS will both declare and assign the fields, no need to declare them beforehand
  constructor(private readonly id: string, public name: string) {
    this.employees = [];
    // this.fiscalYear; cannot access static fields with the this keyword
  }

  // readonly - adds extra safety for fields that should not change

  describe(this: Department) {
    // this: Department -> TS spesific, TS makes sure to check if the this is an instance of the Class
    console.log("Department: " + this.depName);
  }

  abstract test(this: Department): void; // you can start a method or property in an abstract class but force the inheriting class to to implement it them individually

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployees() {
    console.log(this.employees);
  }
}

// copyDepartment.describe() // no error but the log will be undefined rather than the name of the department due to the this keyword
// you have to add this type in the class to get an error message and have extra type safety

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }

  test() {
    console.log("Test");
  }
}

const itDepartment = new ITDepartment("IT1", ["Hulio", "Iglesias"]);

console.log(itDepartment);

class AccountingDepartment extends Department {
  public testBool: boolean;
  private latestReport: string;

  get mostRecentReport() {
    if (this.latestReport) {
      return this.latestReport;
    }
    throw new Error("No report available");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("No report available");
    }

    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.testBool = false;
    this.latestReport = reports[0];
  }

  addReport(report: string) {
    this.reports.unshift(report);
    this.latestReport = this.reports[0];
  }

  test() {
    console.log("Test");
  }
}

const department = new AccountingDepartment("D1", []);

department.addEmployee("Gosho");
department.addEmployee("Pesho");
department.addEmployee("Marjika");

department.describe();
department.printEmployees();

const copyDepartment = { describe: department.describe };

const accounting = new AccountingDepartment("AC1", []);

accounting.addReport("This report");

accounting.mostRecentReport = "This is the last report";

console.log(accounting.mostRecentReport);

// singleton - to make sure to have exactly only one instance ( only one object ) of a class
class singletonTest extends Department {
  private static instance: singletonTest;

  private constructor(id: string) {
    super(id, "Singleton");
  }

  test(this: Department): void {
    console.log("test");
  }

  static getInstace() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new singletonTest("first");
    return this.instance;
  }
}

const singleton = singletonTest.getInstace();
const singletontwo = singletonTest.getInstace();

console.log(singletontwo, singletontwo);
