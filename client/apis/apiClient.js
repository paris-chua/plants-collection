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
  const res = await (await request.patch(`${plantsUrl}${id}`)).send(data)
  return res.body
}
