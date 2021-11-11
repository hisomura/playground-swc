import 'reflect-metadata';

const COL_KEY = Symbol('col');

type Currency = 'usd' | 'eur' | 'yen'
const column = () => {
  return (object: any, key: string) => {
    Reflect.defineMetadata(COL_KEY, 'value', object, key);
  };
};

class User {
  @column() currency!: Currency;
}

console.log(Reflect.getMetadata('design:type', User.prototype, 'currency')); // [Function: Object]
// should be string
