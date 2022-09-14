import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPlants, addNewPlant } from '../actions/plants'

function Plants() {
  const plants = useSelector((redux) => redux.plants)
  // console.log(plants)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPlants())
  }, [])

  const [newName, setNewName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addNewPlant(newName))
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Add a plant</button>
        <label htmlFor="common">Common Name: </label>
        <input
          id="commmon"
          type="text"
          name="comname"
          onChange={(e) => setNewName(e.target.value)}
        />
        <label htmlFor="botanical">Botanical Name: </label>
        <input id="botanical" type="text" name="botname" />
      </form>
      {plants.map((e) => (
        <div key={e.id}>
          <img src={e.img} alt="plant" width="400px" height="auto" />
          <p>Common Name: {e.common_name}</p>
          <p>Botanical Name: {e.botanical_name}</p>
        </div>
      ))}
    </>
  )
}
export default Plants
