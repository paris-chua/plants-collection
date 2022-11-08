import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deletePlant, fetchPlants, sendNewPlant } from '../actions/plants'
// action creators are imported into components
import EditPlant from './EditPlant'

function Plants() {
  const plants = useSelector((redux) => redux.plants)
  // console.log('from component', plants)
  // 'plants' is an array of objects
  const [formData, setFormData] = useState([])
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
        <label htmlFor="water">Last watered: </label>
        <input
          id="water"
          type="date"
          name="last_watered"
          onChange={handleChange}
        />
        <label htmlFor="add_care">Additional care: </label>
        <input
          id="add_care"
          type="text"
          name="additional_care"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add a plant</button>
      </form>

      {plants.map(
        ({
          id,
          common_name,
          botanical_name,
          img,
          last_watered,
          additional_care,
        }) => (
          <div key={id}>
            <img src={img} alt="plant" width="400px" height="auto" />
            <p>Common Name: {common_name}</p>
            <p>Botanical Name: {botanical_name}</p>
            <p>Last Watered: {last_watered}</p>
            <p>Additional Care: {additional_care}</p>
            <button onClick={() => dispatch(deletePlant(id))}>Remove</button>
            <EditPlant props={id} />
          </div>
        )
      )}
    </>
  )
}
export default Plants
