class Department {
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

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployees() {
    console.log(this.employees);
  }
}

const department = new Department("D1", "Peshovci");

department.addEmployee("Gosho");
department.addEmployee("Pesho");
department.addEmployee("Marjika");

department.describe();
department.printEmployees();

const copyDepartment = { describe: department.describe };

// copyDepartment.describe() // no error but the log will be undefined rather than the name of the department due to the this keyword
// you have to add this type in the class to get an error message and have extra type safety

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
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

  set mostRecentReport(value:string) {

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
}

const accounting = new AccountingDepartment("AC1", []);

accounting.addReport('This report');

accounting.mostRecentReport = 'This is the last report';

console.log(accounting.mostRecentReport);
