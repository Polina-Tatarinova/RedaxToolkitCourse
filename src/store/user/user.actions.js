import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserById = (userId) => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          id: userId,
          name: "Max",
        }),
      1000,
    ),
  );
};

export const getUserById = createAsyncThunk(
  "users/by-id",
  async (userId, thunkApi) => {
    try {
      const response = await fetchUserById(userId);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
