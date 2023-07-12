import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const removeUser = createAsyncThunk('users/remove', async (user) => {
    const response = await axios.delete(`http://127.0.0.2:3001/users/${user.id}`)
    console.log(response)
    return response.data;
})