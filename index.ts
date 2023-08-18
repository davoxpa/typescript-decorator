// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

function IfElse(condition: boolean, trueMethodName: string, falseMethodName: string) {
  return function(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = condition ? target[trueMethodName] : target[falseMethodName];
    return descriptor;
  };
}

class ExampleClass {
  @IfElse(false, 'exampleMethod', 'methodIfFalse')
  exampleMethod() {
    console.log('original method')
    // Original method content (not used)
  }

  methodIfTrue() {
    console.log('Method if true');
  }

  methodIfFalse() {
    console.log('Method if false');
  }
}

const instance = new ExampleClass();
instance.exampleMethod(); // Output: Method if true
