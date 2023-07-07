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
    // abstract class can only be extended, cannot be instantiated
    Department.fiscalYear = 200; // field only accessble through the class
    return Department;
}());
// copyDepartment.describe() // no error but the log will be undefined rather than the name of the department due to the this keyword
// you have to add this type in the class to get an error message and have extra type safety
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.test = function () {
        console.log("Test");
    };
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
    AccountingDepartment.prototype.test = function () {
        console.log("Test");
    };
    return AccountingDepartment;
}(Department));
var department = new AccountingDepartment("D1", []);
department.addEmployee("Gosho");
department.addEmployee("Pesho");
department.addEmployee("Marjika");
department.describe();
department.printEmployees();
var copyDepartment = { describe: department.describe };
var accounting = new AccountingDepartment("AC1", []);
accounting.addReport("This report");
accounting.mostRecentReport = "This is the last report";
console.log(accounting.mostRecentReport);
// singleton - to make sure to have exactly only one instance ( only one object ) of a class
var singletonTest = /** @class */ (function (_super) {
    __extends(singletonTest, _super);
    function singletonTest(id) {
        return _super.call(this, id, "Singleton") || this;
    }
    singletonTest.prototype.test = function () {
        console.log("test");
    };
    singletonTest.getInstace = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new singletonTest("first");
        return this.instance;
    };
    return singletonTest;
}(Department));
var singleton = singletonTest.getInstace();
var singletontwo = singletonTest.getInstace();
console.log(singletontwo, singletontwo);
