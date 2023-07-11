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
