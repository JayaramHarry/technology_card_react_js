// Write your code here.
import './index.css'

const CardsList = props => {
  const {cards} = props
  const {title, description, imgUrl, className} = cards

  return (
    <li className={`${className} card-list`}>
      <div>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <div className="image-container">
          <img className="card-image" src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardsList
