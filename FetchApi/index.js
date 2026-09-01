// console.log("hello jiii ");


const root = document.getElementById("container");
const button = document.getElementById("btn");
const disp = document.getElementById("disp");
const loader = document.getElementById("loader");
async function fetchData(){
    // alert("hello jii");
    
    try{
        loader.innerHTML = "Loading...";
        const serverData = await fetch("https://fakestoreapi.com/products");
        const jsonData = await serverData.json();
        // console.log(jsonData[0].title);
        // disp.innerHTML = `${jsonData[0].title}`;

        let table = `<table border="1px">
        ${
            jsonData.map((ele) =>(
                `<tr>
                <td><img src=${ele.image} width="100px" height="100px"/></td>
                <td>${ele.title}</td>
                <td>${ele.description}</td>
                <td>${ele.price}</td>
                <td>${ele.category}</td>
                </tr>`
            ))
        }
        </table>`


        disp.innerHTML = table;


    }catch(error){
        console.log("error is ", error);
    }
    finally{
        loader.innerHTML = "";
    }
}

button.addEventListener('click', fetchData);