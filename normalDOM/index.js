
const root = document.getElementById("container");
const button = document.getElementById("btn");
console.log(root);
const h2 = document.createElement("h2");
const img = document.createElement("img");
const display = document.getElementById("disp");
const loader = document.getElementById("loader");


async function showData(){
    try{
        loader.innerHTML="loading..."
        h2.innerText="Welcome to Dom";
        h2.style.color='red';
        h2.style.backgroundColor='yellow';
        img.src='download.jpeg';
        img.setAttribute('height',200);
        img.setAttribute('width',200);
        display.style.backgroundColor='aqua';
        display.style.width='100%';
        display.style.height='300px';
        display.style.borderBlock='5px';
        display.style.borderBlockColor='green';
        root.appendChild(display);
        root.appendChild(h2);
        root.appendChild(img);
        root.appendChild();
    }catch(e){
        console.log(e);
    }
    finally{
        loader.innerHTML='';
        root.removeChild(button);

    }
}

button.addEventListener('click', showData);