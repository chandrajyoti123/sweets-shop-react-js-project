import { useParams } from 'react-router-dom'
import masti from './masti.jpg'
import Sweetdata from './../../utils/SweetsData.json'

import './SweetsSinglePage.css'
import { useEffect, useState } from 'react'
const SweetsSinglePage=()=>{
    const {id}=useParams()
    
    const [sweets,setSweets]=useState({})

useEffect(()=>{

    Sweetdata.sweets.forEach((sweet)=>{
        if(sweet.id==id){
            setSweets(sweet)
        }
    })
},[id])
console.log(sweets.img)
    return(
        <div className="sweetssinglepage">
            <img className='sweetmainsimg' src={masti}/>
            <div className="sweetmainname">{sweets.name}</div>
            <div className="sweetmainprice">{sweets.price}</div>
            <div className="sweetmaindescription">{sweets.description}</div>
        </div>
    )
}
export default SweetsSinglePage