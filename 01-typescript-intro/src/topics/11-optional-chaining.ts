export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1 : Passenger = {
    name: 'Mariana',
    children: ['Dassana', 'Miguel'],
}

const passenger2 : Passenger = {
    name: 'Namjoon',
    children: ['Jungkook', 'Taehyung'],
}


const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name, howManyChildren);
}

printChildren(passenger2);