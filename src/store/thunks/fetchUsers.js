import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const res = await axios.get('http://127.0.0.2:3001/users');
    await pause(10000)
    return res.data;
});

// Dev only 
const pause = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })
}
export default fetchUsers;