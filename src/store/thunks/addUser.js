import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

export const addUser = createAsyncThunk('users/add', async () => {
    const response = await axios.post('http://127.0.0.2:3001/users', {
        name: faker.name.fullName()
    })

    return response.data;
})