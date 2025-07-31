// Filter
// filter the values on the bassis of a 
// condition which can be true in 
// some cases and false in another

const cloths = [
    {
        Gender: 'Women',
        Type : 'Power suite',
        Price : 999
    },
    {
        Gender: 'Men',
        Type : 'Power suite',
        Price : 999
    },
    {
        Gender: 'Men',
        Type : 'Shirt',
        Price : 1999
    },
    {
        Gender: 'Men',
        Type : 'Pants',
        Price : 1999
    },
    {
        Gender: 'Women',
        Type : 'Suite',
        Price : 2999
    }
];

const shoppingCart = cloths.filter( (item) => {
    return item.Price === 999 && item.Gender === "Women"
} )

console.log(shoppingCart);


