const container = document.getElementById('container');
const button = document.getElementById('btn');

const p = document.createElement('p')
p.innerText='CSE 3rd Year'

const div = document.createElement('div');
div.innerHTML='<img src="photo.jpeg" alt="" style=height:100px, width:100px>'

const h2 = document.createElement('h2')
h2.innerText = 'Educational Details'

const p1 = document.createElement('p')
p1.innerText = 'ABES Enginnering College, Ghaziabad              CGPA:8.5'


function resume(){
    try{
        container.innerHTML="<h1 style='background-color: red;'>Rahul Singh</h1>"
        container.appendChild(div);
        container.appendChild(p);
        container.appendChild(h2);
        container.appendChild(p1);
        

    }catch(err){
        console.log(err);
    }
}



button.addEventListener('click', resume);