export const DISPLAY_PLANTS = 'DISPLAY_PLANTS'

export function displayPlants(arr) {
  return {
    type: DISPLAY_PLANTS,
    payload: arr,
  }
}
