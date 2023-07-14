function AutoBind(target: any, descriptor: any) {
  console.log(target);
  console.log(descriptor);
}

class Printer {
  message = "This works";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("#btn")!;
button.addEventListener("click", p.showMessage);
