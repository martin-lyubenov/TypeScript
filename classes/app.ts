class Department {
  private depName: string; // field, only declared, used later in the constructor, TS specific, you can also set default value with the = operator
  private employees: string[]; // private is a TS modifier static who has access to the fields
//   #age: number; // new JS feature - private fields without the need of TS

  //   constructor(name: string) {
  //     this.depName = name;
  //     this.employees = [];
  //   }

  // alternate constructor TS style, TS will both declare and assign the fields, no need to declare them beforehand
  constructor(private readonly id: string, public name: string) {
    this.employees = [];
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

    constructor(id: string){
        super(id, "Accounting");
        this.testBool = false;
    }
}


const accounting = new AccountingDepartment('AC1');

console.log(accounting);
