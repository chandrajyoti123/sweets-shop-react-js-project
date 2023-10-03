import { useEffect, useState } from "react";
import SweetsCard from "../../components/SweetsCard/SweetsCard";
import Sweetdata from './../../utils/SweetsData.json'
import './SweetsPage.css'
import { Link } from "react-router-dom";
const SweetsPage=()=>{
//     const [sweetsimg, setSweetsimg]=useState([])
    

//     useEffect(()=>{
      
// Sweetdata.sweets.forEach((sweet,i)=>{
//    const arrr=sweetsimg
//    setSweetsimg([...arrr , sweet.img])
//     })
    
  
//     },[])
//       console.log(sweetsimg)
   
     return(
       <div className="sweetscontainer">
        {
            Sweetdata.sweets.map((sweet,i)=>{
                const {name,price,description ,img}=sweet
                return <Link to={`/sweet/page/${i}`} ><SweetsCard name={name} key={i} price={price} description={description} img={img} /></Link>

            })
        }
       </div>

    )

}
export default SweetsPage;