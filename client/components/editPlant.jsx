import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUpdatedPlant } from '../actions/plants'

function EditPlant(props) {
  // console.log(props, 'from editplant')
  const plantId = props.id
  console.log(plantId, 'from editplant')
  const dispatch = useDispatch()
  const [isUpdate, setIsUpdate] = useState(false)
  const [editedPlant, setEditedPlant] = useState(props)

  const handleEdit = () => {
    setIsUpdate(!isUpdate)
  }

  const handleChange = (e) => {
    setEditedPlant({ ...editedPlant, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchUpdatedPlant(editedPlant, plantId.toString()))
    setIsUpdate(false)
  }

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
            {/* <input type="hidden" name="id" value={plant.id} /> */}
            <label htmlFor="common">
              {/* {''} */}
              Common Name:
              <input
                // id={plant.id}
                type="text"
                name="common_name"
                defaultValue={props.common_name}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="botanical">
              {''}
              Botanical Name:
              <input
                // id={props.id}
                type="text"
                name="botanical_name"
                defaultValue={props.botanical_name}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="img">
              {''}
              Image:
              <input
                // id={props.id}
                type="text"
                name="img"
                defaultValue={props.img}
                onChange={handleChange}
              />
              {/* expecting a route/path when editing, otherwise 404 error appears when putting other strings  */}
            </label>
            <label htmlFor="water">
              {''}
              Last watered:
              <input
                // id={plant.last_watered}
                type="date"
                name="last_watered"
                defaultValue={props.last_watered}
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
                defaultValue={props.additional_care}
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
