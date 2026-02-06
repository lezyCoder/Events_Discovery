import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchEvents from "../../Axios/Axios";
import { fetchEventsBySegment } from "../../Axios/Axios";

const initialState = {
  events: [],
  isloading: false,
  error: null,
};

//============ Creating Thunk for Events Fetching ================
export const fetchlistOfEvents = createAsyncThunk(
  "/events",
  // ======== payload/Data creator ============= (Payload/Data creator → creates the data inside that action)
  async (page = 0) => {
    const response = await fetchEvents(page);
    // console.log("response data in thunk ", response._embedded.events);
    return response._embedded.events;
  },
);

//============ Creating Thunk for Events Fetching using Segment ================
export const fetchlistOfEventsBySegment = createAsyncThunk(
  "/events",
  // ======== payload/Data creator ============= (Payload/Data creator → creates the data inside that action)
  async ({ page, segmentId }, thunkAPI) => {
    try {
      const response = await fetchEventsBySegment(page, segmentId);
      return response._embedded.events;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || "Failed to fetch events",
      );
    }
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
