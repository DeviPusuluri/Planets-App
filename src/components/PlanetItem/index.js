// Write your code here

import './index.css'

const PlanetItem = ({planetDetails}) => {
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-container">
      <img src={imageUrl} className="image" alt={`Planet ${name}`} />
      <h2 className="name">{name}</h2>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
