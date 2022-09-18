import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deletePlant, fetchPlants, sendNewPlant } from '../actions/plants'

function Plants() {
  const plants = useSelector((redux) => redux.plants)
  const [formData, setFormData] = useState([])
  console.log('from component', plants)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(sendNewPlant(formData))
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    dispatch(fetchPlants())
  }, [])

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
      {plants.map(({ id, common_name, botanical_name, img }) => (
        <div key={id}>
          <img src={img} alt="plant" width="400px" height="auto" />
          <p>Common Name: {common_name}</p>
          <p>Botanical Name: {botanical_name}</p>
          <button onClick={() => dispatch(deletePlant(id))}>Remove</button>
        </div>
      ))}
    </>
  )
}
export default Plants
