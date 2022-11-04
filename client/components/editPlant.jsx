import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {} from '../actions/plants'

function EditPlant(plant) {
  // const plant = props.plants
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
            <label htmlFor="common">
              {''}
              Common Name:
              <input
                id={plant.id}
                type="text"
                name="common_name"
                defaultValue={plant.common_name}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="botanical">
              {''}
              Botanical Name:
              <input
                id={plant.id}
                type="text"
                name="botanical_name"
                defaultValue={plant.botanical_name}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="img">
              {''}
              Image:
              <input
                id={plant.id}
                type="text"
                name="img"
                defaultValue={plant.img}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="water">
              {''}
              Last watered:
              <input
                id={plant.last_watered}
                type="date"
                name="last_watered"
                defaultValue={plant.last_watered}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="add_care">
              {''}
              Additional care:
              <input
                id={plant.id}
                type="text"
                name="additional_care"
                defaultValue={plant.additional_care}
                onChange={handleChange}
              />
            </label>
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

export default EditPlant
