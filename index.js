let min = document.getElementById("min")
let sec = document.getElementById("sec")
let startBtn = document.getElementById("start")
let pauseBtn = document.getElementById("pause")

let secCount = 0;
let intervalId = 0;

function selectProduct(callback){

    setTimeout(()=>{
        let products = ["car" , "bike"]
        console.log(products)
            callback(products);

    },1000)
}


function createOrder(products , callback ){
    setTimeout(()=>{

        let orderId = 1234
        console.log("order for products" , products)
        callback(orderId)
    },1000)

}

function makePayment(orderId , callback){

    setTimeout(()=>{

        let paymentInfo = 987
        console.log("orderId" , orderId)
        callback(paymentInfo)
    },1000)

}

function orderComplete(paymentInfo){
    setTimeout(()=>{
        console.log("order Complete paymentInfo" , paymentInfo);

    },1000)

}



selectProduct(function(products){
        createOrder(products , function(orderId){
            makePayment(orderId , function(paymentInfo){
                orderComplete(paymentInfo)

            })

        })


})

