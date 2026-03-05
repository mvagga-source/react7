import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { getUsers, addUser, updateUser, deleteUser } from "../../api/userApi";
import { getUsers } from "./userApi";

// 비동기 thunk
export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await getUsers();
  return res.data;
});

// export const createUser = createAsyncThunk("users/add", async (user) => {
//   const res = await addUser(user);
//   return res.data;
// });

// export const editUser = createAsyncThunk("users/edit", async ({id, name}) => {
//   const res = await updateUser(id, { name });
//   return res.data;
// });

// export const removeUser = createAsyncThunk("users/remove", async (id) => {
//   const res = await deleteUser(id);
//   return res.data;
// });

const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";
      })
    //   .addCase(createUser.fulfilled, (state, action) => {
    //     state.list.push(action.payload);
    //   })
    //   .addCase(editUser.fulfilled, (state, action) => {
    //     const idx = state.list.findIndex(u => u.id === action.payload.id);
    //     if (idx !== -1) state.list[idx] = action.payload;
    //   })
    //   .addCase(removeUser.fulfilled, (state, action) => {
    //     state.list = state.list.filter(u => u.id !== action.payload.id);
    //   });
  },
});

export default userSlice.reducer;