export const initialState = {
  cars: [
    {
      id: 1,
      title: "Audi A7",
      image: "./Image/Audi A7.png",
      priceDaysUsd: [100, 90, 80, 70, 60],
      priceDaysByn: [260, 235, 210, 180, 155],
      priceHoursUsd: [20, 15, 10, 5],
      priceHoursByn: [50, 40, 25, 10]
    },
    {
      id: 2,
      title: "BMW X5",
      image: "./Image/BMW X5.png",
      priceDaysUsd: [120, 110, 100, 90, 80],
      priceDaysByn: [315, 285, 260, 235, 210],
      priceHoursUsd: [30, 25, 20, 15],
      priceHoursByn: [75, 65, 50, 40]
    },
    {
      id: 3,
      title: "Jeep Patriot",
      image: "./Image/Jeep Patriot.png",
      priceDaysUsd: [45, 40, 35, 30, 25],
      priceDaysByn: [115, 105, 90, 80, 65],
      priceHoursUsd: [20, 15, 10, 5],
      priceHoursByn: [50, 40, 25, 10]
    },
    {
      id: 4,
      title: "Kia Rio",
      image: "./Image/Kia Rio.png",
      priceDaysUsd: [40, 35, 30, 25, 20],
      priceDaysByn: [105, 90, 80, 65, 50],
      priceHoursUsd: [20, 15, 10, 5],
      priceHoursByn: [50, 40, 25, 10]
    }
  ]
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CARS":
      return {
        ...state
      };
    case "ADD_CARS":
      return {
        ...state,
        cars: state.cars.concat(action.payload)
      };
    case "DELETE_CARS":
      return {
        ...state,
        cars: state.cars.filter(car => car.id !== action.payload)
      };

    default:
      return state;
  }
}
