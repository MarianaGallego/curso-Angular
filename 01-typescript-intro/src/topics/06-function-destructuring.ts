interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}



const phone: Product = {
    description: "Nokia A1",
    price: 150
}

const tablet: Product = {
    description: "iPad Air",
    price: 700
}


function taxCalculation(options: TaxCalculationOptions): number[] {
    let total = 0;

    options.products.forEach(product => {
        total += product.price;
    });

    return[total, total * options.tax];
}


const shoppingCart = [phone, tablet];
const tax = 0.15;


const result = taxCalculation({
    products: shoppingCart,
    tax,
});

console.log('tax ', result[0]);


export {};