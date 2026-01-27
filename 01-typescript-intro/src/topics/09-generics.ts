export function whatsMyType<T> ( argumento: T ): T{
    return argumento;
}

const amIString = whatsMyType<string>('Hola, mundo');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));