
import "./Cards.css"

 const Card= ({desc,img,title}) => {
  return (
    <div className='cardContainer'>
        <h2>{title}</h2>
        <img src={img} alt="img" className='cardImg'/>
        <p className="par">{desc}</p>
    </div>
  )
}
export default Card
