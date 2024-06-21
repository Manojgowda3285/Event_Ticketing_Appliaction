import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getEventData from "../../services/getEventData";
import getEventSponsors from "../../services/getEventSponsors";
import getEventWorkshops from "../../services/getEventWorkshops";
import getEventSpeakers from "../../services/getEventSpeakers";

export const fetchAsyncEvents = createAsyncThunk(
  'events/fetchAsyncEvents',
  async () => {
    const response = await getEventData();
    return response.data;
  }
);

export const fetchAsyncSponsors = createAsyncThunk(
  'events/fetchAsyncSponsors',
  async () => {
    const response = await getEventSponsors();
    return response.data;
  }
);

export const fetchAsyncWorkshops = createAsyncThunk(
  'events/fetchAsyncWorkshops',
  async () => {
    const response = await getEventWorkshops();
    return response.data;
  }
);

export const fetchAsyncSpeakers = createAsyncThunk(
  'events/fetchAsyncSpeakers',
  async () => {
    const response = await getEventSpeakers();
    return response.data;
  }
);

const initialState = {
  events: [],
  sponsors: [],
  speakers: [],
  workshops: [],
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncEvents.pending, (state) => {
        console.log("Pending");
      })
      .addCase(fetchAsyncEvents.fulfilled, (state, { payload }) => {
        console.log("Fetched Successfully!");
        state.events = payload;
      })
      .addCase(fetchAsyncEvents.rejected, (state) => {
        console.log("Rejected!");
      })
      .addCase(fetchAsyncSponsors.fulfilled, (state, { payload }) => {
        state.sponsors = payload;
      })
      .addCase(fetchAsyncWorkshops.fulfilled, (state, { payload }) => {
        state.workshops = payload;
      })
      .addCase(fetchAsyncSpeakers.fulfilled, (state, { payload }) => {
        state.speakers = payload;
      });
  },
});

export const getEventsData = (state) => state.events.events;
export const getEventWorkshopsData = (state) => state.events.workshops;
export const getEventSpeakersData = (state) => state.events.speakers;
export const getEventSponsorsData = (state) => state.events.sponsors;

export default eventSlice.reducer;
