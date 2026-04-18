// let carData = [
//     {
//         id: 1,
//         name: "Watch",
//         price: 2499,
//         quantity: 5
//     },
//     {
//         id: 2,
//         name: "Mobile",
//         price: 14999,
//         quantity: 10
//     },
//     {
//         id: 3,
//         name: "Laptop",
//         price: 49999,
//         quantity: 3
//     },
//     {
//         id: 4,
//         name: "Headphones",
//         price: 1999,
//         quantity: 15
//     }
// ]

// let totalValue = carData.reduce((initial_value, current_product) => {
//     return initial_value + (current_product.price * current_product.quantity);
// }, 0);

// console.log("Total value of all products in the cart: " + totalValue);


// let arr = ["Apple", "Banana", "Mango", "Lichi", "Strawberry", "Orange"]
// arr.sort();
// console.log(arr);

// let num_arr = [1, 45, 63, 22, 98, 55]
// num_arr.sort((a, b) => a-b)     //for sorting in ascending 
// num_arr.sort((a, b) => a+b)     //for sorting in descending 
// console.log(num_arr)

// let filtered_array = num_arr.filter((value) =>{
//     return value> 20
// })
// console.log(filtered_array)

// let users = [
//     {
//         id: 1,
//         username:"cse-chandan-verma",
//         password:"chandanverma"
//     },
//     {
//         id: 2,
//         username:"cse-milind-kumar",
//         password:"kumarmilind"
//     },
//     {
//         id: 3,
//         username:"cse-devansh-sharma",
//         password:"devanshsharma"
//     },
//     {
//         id: 4,
//         username:"cse-abhishek-kumar",
//         password:"abhishekkumar"
//     }
// ]

// let inputData = {
//     username:"cse-chandan-verma",
//     password: "chandanverma"
// }

// let result = users.some(ele => ele.username === inputData.username)

// if(result){
//     let valid = vusers.find(pass => pass.password === inputData.password)
//     console.log(valid)
// }
// else{
//     console.log("User Not found")
// }


// let original_objects = {
//     id: 1,
//     name:"Nick", 
//     city:"Jalandhar"
// }

// // let duplicate = structuredClone(original_objects)
// let duplicate = {...original_objects}


// original_objects.state = "Punjab";

// console.log(original_objects)
// console.log(duplicate)

function pourOil(callback){
    setTimeout(() => {
        console.log("Poured Oil")
        callback()
    }, 3000);
}

function fryOnions(callback){
    setTimeout(() => {
        console.log("Fried Onions")
        callback()
    }, 5000);
}


function addSpices(callback){
    setTimeout(() => {
        console.log("Spices Added")
        callback()
    }, 1000);
}

function addRice(){
    setTimeout(() => {
        console.log("Rice Added")
    }, 4000);
}

addSpices(() =>{
    pourOil(() =>{
        fryOnions(() =>{
            addRice();
        })
    })
})