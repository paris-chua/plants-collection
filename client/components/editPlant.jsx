import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {} from '../actions/plants'

function editPlant(plant) {
  const dispatch = useDispatch()
  const [isUpdate, setIsUpdate] = useState(false)
  const [editedPlant, setEditedPlant] = useState({
    id: '',
    img: '',
    common_name: '',
    botanical_name: '',
    last_watered: '',
    additional_care: '',
  })

  const handleChange = (e) => {
    setEditedPlant({ ...editedPlant, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch()
  }

  return (
    <div>
      {isUpdate ? (
        <div>
          <div key={plant.id}>
            <img src={plant?.img} alt="plant" width="400px" height="auto" />
            <p>Common Name: {plant?.common_name}</p>
            <p>Botanical Name: {plant?.botanical_name}</p>
            <p>Last Watered: {plant?.last_watered}</p>
            <p>Additional Care: {plant?.additional_care}</p>
          </div>
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
            <button onClick={handleSubmit}>Update</button>
          </form>
        </div>
      ) : (
        <div></div>
      )}
      <button onClick={setIsUpdate(!isUpdate)}>Edit</button>
    </div>
  )
}

export default editPlant
