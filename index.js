// console.log("hello I m using js");

// function sum(a,b) {
//     return a+b;
// }

// let a = sum(2,4);
// console.log(a);

// function sqrt(a,b){
//     return Math.sqrt(a,b);
// }

// console.log(sqrt(2,3));

// const sum1 = function(a,b){
//     return(a+b);
// }
// console.log(sum1(3,4));

// const sum2=(a,b)=>{return a+b};
// console.log(sum2(5,6));


//IIFE
// (() => {
//     console.log("heyyy using IIFE")
// })();

// let a=34;
// if(a<40){
//     let a=40;
//     console.log("value of a inside block = "+a);
// }
// console.log("value of a outside block = "+a);

//callback
// function sum(a,b){
//     return a+b;
// }

// function msgwithsum(clbk,msg){
//     const result = clbk(40,50);
//     console.log("Hii," +msg+ " your result is = "+result);
// }
// msgwithsum(sum,"rahul")

// function login(error,msg){
//     if(error){
//         console.log("Error is : "+error);
//     }
//     else{
//         console.log(msg);
//     }
// }

// function loginHandler(username,password,clbk){
//     if(username=="rahulsingh157" && password=="123455"){
//         clbk(null,"login Success")
//     }else{
//         clbk("username or password is incorrect", null)
//     }
// }

// loginHandler("rahulsingh157", "123455", login);

// console.log("one");

// for(i=0;i<1000;i++){
//     console.log("i = "+i);
// }
// // setTimeout(()=>{console.log("Two")},1000)
// console.log("three");

const container = document.getElementById("container");
const button = document.getElementById("btn");

const h1 = document.createElement('h1')
console.log(h1)
h1.innerText='ABES Engineering College'

const loader = document.createElement('h2');


console.log(container);
console.log(button);

const img = document.createElement('img');

function ping(){
    try{
        // alert("server ping");
        loader.innerHTML='<h2>Loading...</h2>'
        container.innerHTML='<h2>Welcome to DOM</h2>'
        h1.style.backgroundColor='red';
        container.appendChild(loader);
        container.appendChild(h1);
        img.src='image.png';
        img.setAttribute('height',200);
        img.setAttribute('width',200);
        container.appendChild(img);

    }catch(err){
        console.log(err);
    }
    finally{
        container.removeChild(loader);
    }

}

button.addEventListener('click', ping);