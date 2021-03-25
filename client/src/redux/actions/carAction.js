export function getCars() {
  return {
    type: "GET_CARS"
  };
}
export function addCars(data) {
  return {
    type: "ADD_CARS",
    payload: data
  };
}
export function deleteCar(id) {
  return {
    type: "DELETE_CARS",
    payload: id
  };
}
