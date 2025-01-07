 let rum = new Map()
rum.set('raja',9);
rum.set('raja2',10);
rum.set('raja3',11);
    // console.log(rum);

const users=[{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 35}];
const names = users.map(user => user.name);
// console.log(names);

const prices = [10, 20, 30]; 
const formattedPrices = prices.map(price => `${price.toFixed(2)}`)
// console.log(formattedPrices);

const obj={
    'raja1' : 'harshawardhan',
    'raja2' : 'maharana pratap'
}

for (const key in prices) {
    // console.log(key ,'and the value is ',obj[key]);
    
    //    console.log(`${key} and the value is ${value} `);     
}

const loop=prices.forEach( (element) => {
    // console.log(element);
    return element;
});
// console.log(loop);

// const anothval= prices.filter( (item) =>{
//     if (item>10){
//          return item;
//     }
// })
// console.log(anothval.reduce());
// const amazon=[
//     {names:'earbuds1',price:500,wireless:true},
//     {names:'boat',price:600,wireless:false},
//     {names:'boult',price:700,wireless:true},
//     {names:'e7',price:800,wireless:false},
//     {names:'e6',price:400,wireless:true}
// ]
// const cart=amazon.filter((item)=>{
//     return item.price<=700 && item.wireless==true;
// })
// .reduce((acc,curval)=>acc+curval,initval)
// // .reduce((acc,curval)=>acc+curval,initval);
// const finalprce=cart.reduce((acc,curval)=>acc+curval,initval);
// console.log(finalprce);

// const vals=amazon.filter((item)=>{
//         return item.price<=600 && item.wireless===true;
// })
// console.log(vals)
const amazon = [
    { names: 'earbuds1', price: 500, wireless: true },
    { names: 'boat', price: 600, wireless: false },
    { names: 'boult', price: 700, wireless: true },
    { names: 'e7', price: 800, wireless: false },
    { names: 'e6', price: 400, wireless: true }
];

const cart = amazon
    .filter((item) => item.price <= 900 && item.wireless === false)
    .reduce((acc, curval) => acc + curval.price, 0);

// console.log(cart);

