import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import userAPI  from '../api/userAPI';

interface UserState {
    loggedInUser: any
}

const initialState: UserState = {
    loggedInUser: null
}

interface FetchUserDetailsReqBody {
    username: string;
    password: string;
}

export const fetchUserDetails = createAsyncThunk(
    'users/fetchUserDetails',
    async (req: FetchUserDetailsReqBody, thunkAPI) => await userAPI.fetchUserDetails(req.username, req.password)
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
            state.loggedInUser = action.payload;
        });
        builder.addCase(fetchUserDetails.rejected, (state) => {
            state.loggedInUser = null;
        });
    }
})

export const  { } = userSlice.actions;
export default userSlice.reducer;