function Column<T>(target: T, key: keyof T) {
  console.log({ target, key });
}

class Greeter {
  @Column
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
    // this.name = "bob";
  }

  greet() {}
}
