export  const multiply = (num1, num2) => {
    let sum = 0;
    for (let i=0;i<num2;i++);{
        sum =+ num1
    }
    console.log('inside multiply');
    return sum;
};

export const power = (base, exponent) =>{
    let product  = 1;
    for (let i=0;i<exponent;i++);{
        product*=base;
    }
    return product;
};

export let banana = "banana";
export default {power,banana};