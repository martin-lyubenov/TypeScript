var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    //   #age: number; // new JS feature - private fields without the need of TS
    //private  - only the current class has acces to the field using the this keyword ( iherited classes do not have access)
    // protected - modifier that lets other other classes access the field outside people do not have access to the field
    //   constructor(name: string) {
    //     this.depName = name;
    //     this.employees = [];
    //   }
    // alternate constructor TS style, TS will both declare and assign the fields, no need to declare them beforehand
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        // this.fiscalYear; cannot access static fields with the this keyword
    }
    // readonly - adds extra safety for fields that should not change
    Department.prototype.describe = function () {
        // this: Department -> TS spesific, TS makes sure to check if the this is an instance of the Class
        console.log("Department: " + this.depName);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployees = function () {
        console.log(this.employees);
    };
    Department.fiscalYear = 200; // field only accessble through the class
    return Department;
}());
var department = new Department("D1", "Peshovci");
department.addEmployee("Gosho");
department.addEmployee("Pesho");
department.addEmployee("Marjika");
department.describe();
department.printEmployees();
var copyDepartment = { describe: department.describe };
// copyDepartment.describe() // no error but the log will be undefined rather than the name of the department due to the this keyword
// you have to add this type in the class to get an error message and have extra type safety
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var itDepartment = new ITDepartment("IT1", ["Hulio", "Iglesias"]);
console.log(itDepartment);
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.testBool = false;
        _this.latestReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.latestReport) {
                return this.latestReport;
            }
            throw new Error("No report available");
        },
        set: function (value) {
            if (!value) {
                throw new Error("No report available");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addReport = function (report) {
        this.reports.unshift(report);
        this.latestReport = this.reports[0];
    };
    return AccountingDepartment;
}(Department));
var accounting = new AccountingDepartment("AC1", []);
accounting.addReport('This report');
accounting.mostRecentReport = 'This is the last report';
console.log(accounting.mostRecentReport);