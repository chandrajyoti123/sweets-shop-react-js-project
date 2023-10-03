import { useEffect, useState } from "react";
import SweetsCard from "../../components/SweetsCard/SweetsCard";
import Sweetdata from './../../SweetsData/SweetsData.json'
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
       <div>
        {
            Sweetdata.sweets.map((sweet,i)=>{
                const {name,price,description }=sweet
                return <SweetsCard name={name} price={price} description={description} img={sweet.img} />

            })
        }
       </div>

    )

}
export default SweetsPage;