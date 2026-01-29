import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchEvents from "../../Axios/Axios";

const initialState = {
  events: [],
  isloading: false,
  error: null,
};

//============ Creating Thunk ================
export const fetchlistOfEvents = createAsyncThunk(
  "/events",
  // ======== payload/Data creator ============= (Payload/Data creator → creates the data inside that action)
  async () => {
    const response = await fetchEvents();
    console.log("response data in thunk ", response);
    // return response.products; // this is payload data
    return response;
  },
);

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchlistOfEvents.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchlistOfEvents.fulfilled, (state, action) => {
        state.isloading = false;
        state.events = action.payload;
      })
      .addCase(fetchlistOfEvents.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.error.message;
      });
  },
});

export default eventSlice.reducer;
