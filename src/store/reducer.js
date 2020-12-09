import { createAction, createSlice } from "@reduxjs/toolkit"

// export const fetchMenu = createAction('menu/fetchMenu');

const pricing = createSlice({
  name: "pricing",
  initialState: {
    users: {
      ammount: 1,
      price: "4,000",
    },
    branches: {
      ammount: 1,
      price: "24,000",
    },
    applications: [
      {
        type: "Accounting",
        price: "45,000",
        included: 3,
        noOfAdditionalFeature: 0,
        additionalFeaturePrice: 0,
      },
    ],
  },
  reducers: {},
})

export default pricing.reducer
// export const { storeMenu, selectMenu } = menu.actions;
