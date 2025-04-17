let min = document.getElementById("min")
let sec = document.getElementById("sec")
let startBtn = document.getElementById("start")
let pauseBtn = document.getElementById("pause")

let secCount = 0;
let intervalId = 0;











function selectProduct(callback){

return new Promise((resolve, reject) => {
    try {
        setTimeout(()=>{
            let products = ["car" , "bike"]
            console.log(products)
           resolve(products);
    
        },1000)
        
    } catch (error) {
        reject(error)
    }
})
}

function createOrder(products , callback ){

   return new Promise((resolve, reject) => {
        
        setTimeout(()=>{
    
            let orderId = 1234
            console.log("order for products" , products)
            resolve(orderId)
        },1000)
    })

}

function makePayment(orderId , callback){


  return  new Promise((resolve, reject) => {
        
        setTimeout(()=>{
    
            let paymentInfo = 987
            console.log("orderId" , orderId)
            resolve(paymentInfo)
        },1000)
    })

}

function orderComplete(paymentInfo){

   return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("order Complete paymentInfo" , paymentInfo);
    
        },1000)
        
    })

}

selectProduct().then((products)=>{
   return createOrder(products)
}).then((orderId)=>{
   
   return makePayment(orderId)
}).then((paymentInfo)=>{
    orderComplete(paymentInfo)
})

// selectProduct(function(products){
//         createOrder(products , function(orderId){
//             makePayment(orderId , function(paymentInfo){
//                 orderComplete(paymentInfo)

//             })

//         })


// })

