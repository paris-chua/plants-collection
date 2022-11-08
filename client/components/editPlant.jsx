import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUpdatedPlant } from '../actions/plants'

function EditPlant(plant) {
  console.log(plant, 'from editplant')
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

  const handleEdit = () => {
    setIsUpdate(!isUpdate)
  }

  const handleChange = (e) => {
    setEditedPlant({ ...editedPlant, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchUpdatedPlant(editedPlant, plant.id))
    setIsUpdate(false)
  }

  // useEffect(() => {
  //   setEditedPlant(plant)
  // }, [])

  return (
    <>
      {/* <div key={plant.id}>
        <img src={plant?.img} alt="plant" width="400px" height="auto" />
        <p>Common Name: {plant?.common_name}</p>
        <p>Botanical Name: {plant?.botanical_name}</p>
        <p>Last Watered: {plant?.last_watered}</p>
        <p>Additional Care: {plant?.additional_care}</p>
      </div> */}
      {isUpdate ? (
        <div>
          <form>
            <input type="hidden" id="id" name="id" value={plant.id} />
            <label htmlFor="common">
              {''}
              Common Name:
              <input
                // id={plant.id}
                type="text"
                name="common_name"
                value={plant.common_name}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="botanical">
              {''}
              Botanical Name:
              <input
                // id={plant.id}
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
                // id={plant.id}
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
                // id={plant.last_watered}
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
                // id={plant.id}
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
      <button onClick={handleEdit}>Edit</button>
    </>
  )
}

export default EditPlant
