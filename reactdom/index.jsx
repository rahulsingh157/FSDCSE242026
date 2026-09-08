// const container = document.getElementById('root');
// console.log(container);
// const root = ReactDOM.createRoot(container);
// const h2 = React.createElement('h2',{style:{color:'red', backgroundColor:'yellow'}},'welcome to React App Development');
// const h1=React.createElement('h1', {style:{color:'red'}},'ABES Engineering college');
// const p=React.createElement('p',{style:{color:'blue'}},'This is a paragraph');
// const img=React.createElement('img',{src:'download.jpeg',style:{height:'200px',width:'200px'},});
// const div=React.createElement('div',{style:{border:'2px solid black'}},h1,h2,img);


const h21=<h2>hello world</h2>
const h11=<h2>ABES Engineering college</h2>
const div=<div >{h11}{h21}</div>;

const wrapper=<div style={{border:'2px solid black'}}>{div}<h2>Welcome to React App Development</h2></div>

root.render(wrapper);