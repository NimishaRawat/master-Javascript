// Reduce

const array1 = [1,2,3,4]

const sum = array1.reduce((acc,value) => 
    acc + value 
)

//console.log(sum);


const muNums = [ 1 , 2 , 3 ]

const myTotal = muNums.reduce( function(acc,currval){
    console.log(`Acc : ${ acc } and currval : ${currval}`);
    
    return acc + currval 
}, 0)

console.log(myTotal);


const products = [
    {
        itemName : 'Sunscream',
        price : 599
    },
    {
        itemName : 'Lipstick',
        price : 1599
    },
    {
        itemName : 'Fruite Cream',
        price : 799
    },
    {
        itemName : 'Lip Balm',
        price : 599
    },
]

const priceToPay = products.reduce((acc,item) => acc + item.price , 0)

console.log(priceToPay);
