// type PaymentOptionsAvailable= "Upi"|"card"|"COD"|"NetBanking"


// function payments(modeofPayment:PaymentOptionsAvailable, amount:number):number|string{
//     if(modeofPayment==="Upi"){
//         return amount-(amount/10);
//     }else if(modeofPayment==="card"){
//         return amount-(amount/20);
//     }else if(modeofPayment==="COD"){
//         return amount+50;
//     }else if(modeofPayment==="NetBanking"){
//         return "Nothing";
//     }else if(modeofPayment==="cash"){
//         return "Nothing";
//     }
//     return "Nothing";
// }


async function productDetails(): Promise<any[]> {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    return data.products;
}

function sortByPrice(data: any[],amount:number): any[] {
    let filtered:any[]= data.filter((ele) => ele.price > amount);
    let sorted:any[]=data.sort((a,b)=>a.price-b.price);

    return sorted;
}

function sortByAlphbets(data:any[]):any[]{
    return data.sort((a,b)=>(a.brand || "").localeCompare(b.brand || ""));
}

function sortByAlphbetsRev(data:any[]):any[]{
    return data.sort((a,b)=>(b.brand || "").localeCompare(a.brand || ""));
}

function filterByCategory(data:any[],category:string):any[]{
    return  data.filter((ele)=>{ele.category===category});
}

async function operations():Promise<void>{
    let data:any[]=await productDetails();
    let operation1=sortByPrice(data,5);
    let operation2=sortByPrice(data,10);

    let operation3=sortByAlphbets(data);
    let operation4=sortByAlphbetsRev(data);

    let operation5=filterByCategory(data,"beauty");

    console.log(operation4);
}

operations();