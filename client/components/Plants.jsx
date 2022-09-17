import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deletePlant, fetchPlants, sendNewPlant } from '../actions/plants'

function Plants() {
  const plants = useSelector((redux) => redux.plants)
  console.log('from component', plants)
  // const aPlant = { plant.id, plant.common_name, plant. }
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlants())
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(sendNewPlant(formData))
  }

  const [formData, setFormData] = useState([])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleClick = () => {
    dispatch(deletePlant())
  }

  return (
    <>
      <form>
        <label htmlFor="common">Common Name: </label>
        <input
          id="common"
          type="text"
          name="common_name"
          onChange={handleChange}
        />
        <label htmlFor="botanical">Botanical Name: </label>
        <input
          id="botanical"
          type="text"
          name="botanical_name"
          onChange={handleChange}
        />
        <label htmlFor="img">Image: </label>
        <input id="img" type="text" name="img" onChange={handleChange} />
        <button onClick={handleSubmit}>Add a plant</button>
      </form>
      {plants.map((e) => (
        <div key={e.id}>
          <img src={e.img} alt="plant" width="400px" height="auto" />
          <p>Common Name: {e.common_name}</p>
          <p>Botanical Name: {e.botanical_name}</p>
          <button onClick={handleClick}>Remove</button>
        </div>
      ))}
    </>
  )
}
export default Plants
