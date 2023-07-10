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
