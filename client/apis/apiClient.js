import request from 'superagent'

const plantsUrl = '/api/v1/plants/'

export async function getPlantsApi() {
  const res = await request.get(plantsUrl)
  console.log(res.body)
  return res.body
}

// export async function fetchWidget(newWidget) {
//   const resp = await request.post(widgetUrl).send(newWidget)
//   return resp.body
// }
