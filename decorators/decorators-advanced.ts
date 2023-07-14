// you can change the constructor with a decorator, this allows you to make changes when creating instances not at initialization
function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.querySelector(".app");
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

function Test(params: any) {}

// you can add several decorators to a class
// they execute bottom up - example WithTemplate will be first, Test second etc...

@Test
@WithTemplate("<h1>Hello</h1>", "app")
class PersonHTML {
  name = "John";

  constructor() {
    console.log("Constructor");
  }
}

const u1 = new PersonHTML();

// you can add decorators to properties, parameters, methods and accessors => setters/getters of a class
function Log(target: any, propertyName: string | symbol) {
  console.log(target);
}

function Log2(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {}

class Product {
  @Log // the decorator runs when the class (or the spesific field of the class) is registered by JS
  title: string;
  private _price: number;

  @Log2
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * tax;
  }
}
