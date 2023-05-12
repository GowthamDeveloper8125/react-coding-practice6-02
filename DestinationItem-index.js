// Write your code here
import './index.css'

const DestinationItem = props => {
  const {name, imgUrl, uniqueNo} = props
  return (
    <div className="imageContainer">
      <div>
        <img className="images" src={imgUrl} alt={name} />
        <p className="name">{name}</p>
      </div>
    </div>
  )
}

export default DestinationItem
