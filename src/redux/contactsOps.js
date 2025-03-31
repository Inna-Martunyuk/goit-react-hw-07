import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://6787f591c4a42c916108e4c5.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch  {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk("contacts/addContact",
    async (contactData, {rejectWithValue}) => {
        try {
            const response = await axios.post(BASE_URL, contactData);
            return response.data;
    
} catch  {
    return thunkAPI.rejectWithValue(e.message);
        }
    });


export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactId, { rejectWithValue }) => {
        try {
           await axios.delete(`${BASE_URL}/${contactId}`);
            return contactId;
        } catch  {
           return thunkAPI.rejectWithValue(e.message);
        }
    }
);