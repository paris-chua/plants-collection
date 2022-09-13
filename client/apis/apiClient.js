import request from 'superagent'

const plantsUrl = '/api/v1/plants/'

export async function getPlants() {
  const resp = await request.get(plantsUrl)
  return resp.body
}

// export async function fetchWidget(newWidget) {
//   const resp = await request.post(widgetUrl).send(newWidget)
//   return resp.body
// }
