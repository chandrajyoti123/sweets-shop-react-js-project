
import './SweetsCard.css'
import sweet from './sweets1.avif'
const SweetsCard=({name,price,description , img})=>{
    return(
        <div className="sweetscard">
            <div className="img-body">
                <img src={img} className="sweetscardimg"/>
            </div>
            <div className="card-body">
                <div className='sweets-name'>{name}</div>
                <div className='price'> At Price {price}</div>
                <div className='description'> {description}</div>

            </div>

        </div>
    )
}
export default SweetsCard;