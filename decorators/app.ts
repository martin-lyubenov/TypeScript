function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.querySelector(".app");
    console.log(hookEl);

    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
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
