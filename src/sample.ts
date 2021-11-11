import "reflect-metadata"

const formatMetadataKey = Symbol("format");

type Test = 'foo' | 'bar' | 'baz'

function format(formatString: string) {
  console.log('format')
  return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
  console.log('getFormat')
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

class Greeter {
  @format("Hello, %s")
  greeting: string;

  @format("Word, %s")
  word: Test

  constructor(message: string) {
    this.greeting = message;
    this.word = 'foo'
  }

  greet() {
    let formatString = getFormat(this, "greeting");
    return formatString.replace("%s", this.greeting);
  }
}



const bob = new Greeter('bob')
console.log(bob.greet())
