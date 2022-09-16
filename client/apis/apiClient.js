import request from 'superagent'

const plantsUrl = '/api/v1/plants/'

export async function getPlantsApi() {
  const res = await request.get(plantsUrl)
  // console.log(res.body)
  return res.body
}

export async function sendPlantApi(newPlant) {
  const resp = await request.post(plantsUrl).send(newPlant)
  console.log('hi', resp)
  return resp.body
}
