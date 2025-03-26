import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  keyword: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data.push(action.payload);
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter((dt) => dt.id !== action.payload)];
    },
    updateDataFunc: (state, action) => {
      state.data = [
        ...state.data.map((dt) =>
          dt.id == action.payload.id ? { ...dt, ...action.payload } : dt
        ),
      ];
    },
    sortingDataFunc: (state, action) => {
      state.data.sort((a, b) =>
        action.payload == "asc" ? a.price - b.price : b.price - a.price
      );
    },
    searchDataFunc: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const {
  createDataFunc,
  deleteDataFunc,
  updateDataFunc,
  sortingDataFunc,
  searchDataFunc,
} = dataSlice.actions;

export default dataSlice.reducer;
