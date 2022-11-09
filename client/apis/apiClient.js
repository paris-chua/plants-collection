import request from 'superagent'

const plantsUrl = '/api/v1/plants/'

export async function getPlantsApi() {
  const res = await request.get(plantsUrl)
  // console.log(res.body)
  return res.body
}

export async function sendPlantApi(newPlant) {
  const res = await request.post(plantsUrl).send(newPlant)
  console.log('hi', res)
  return res.body
}

export async function deletePlantApi(id) {
  const res = await request.delete(`${plantsUrl}${id}`)
  console.log('api', res.body)
  return res.body
}

export async function updatePlantApi(data, id) {
  const newInfo = {
    img: data.img,
    common_name: data.common_name,
    botanical_name: data.botanical_name,
    last_watered: data.last_watered,
    additional_care: data.additional_care,
    id: id,
  }
  const res = await request.patch(plantsUrl).send(newInfo)
  return res.body
}
