import React, { useEffect, useState } from 'react'

function FetchProducts() {
    const[data, setData] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            try{
                const res = await fetch('https://dummyjson.com/products');
                const jsonData = await res.json();
                setData(jsonData.products);
                console.log(jsonData.products);
                // fetch('https://dummyjson.com/products')
                // .then((res)=>res.json())
                // .then((data)=>{
                //     console.log(data);
                // })
            }
            catch(error){
                console.log(error);
            }
            finally{
                console.log("Fetch Products");
            }
        }
        fetchData();
    },[])

    function cartData(){

    }
    
  return (
    <div>
      <h1>Fetch Products</h1>
      {/* <h2>{JSON.stringify(data)}</h2> */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'2px' }}>
        {data.map((ele)=>(
            <div style={{border:'1px solid black', margin:'10px', padding:'10px', backgroundColor:'orange'}}>
            <h2>{ele.id}</h2>
            <img src={ele.images} width="100px" height="100px"/>
            <h2>{ele.title}</h2>
            <p>{ele.description}</p>
            <h3>Price : {ele.price}</h3>
            <h3>Rating : {ele.rating}</h3>
            <h3>Category : {ele.category}</h3>
            <div>
                <button onClick={cartData}>Add to Cart</button>
                <button>Buy Now</button>
            </div>

            </div>
        ))}
      </div>
    </div>
  )
}

export default FetchProducts
