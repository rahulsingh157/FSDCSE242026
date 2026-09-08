const container = document.getElementById('root');
console.log(container);
const root = ReactDOM.createRoot(container);
const h2 = React.createElement('h2',{style:{color:'red', backgroundColor:'yellow'}},'welcome to React App Development');
const h1=React.createElement('h1', {style:{color:'red'}},'ABES Engineering college');
const img=React.createElement('img',{src:'download.jpeg',style:{height:'200px',width:'200px'},});
const div=React.createElement('div',{style:{border:'2px solid black'}},h1,h2,img);


root.render(div);