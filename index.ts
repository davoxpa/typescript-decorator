// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

function IfElse(condition: boolean, falseMethodName: string) {
  return function (
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = condition ? originalMethod : target[falseMethodName];
    return descriptor;
  };
}

class ExampleClass {
  @IfElse(false, 'methodIfFalse')
  exampleMethod() {
    console.log('original method');
    // Original method content (not used)
  }

  methodIfFalse() {
    console.log('Method if false');
  }
}

const instance = new ExampleClass();
instance.exampleMethod();
