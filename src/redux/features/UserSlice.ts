import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { request } from '../../api/request';
import { getToken } from '../../helpers/Utils';

// Define the User State
interface UserState {
  data: Record<string, any>;
  isAuthenticated: boolean;
  loading: boolean;
}

// Initial state
const initialState: UserState = {
  data: {},
  isAuthenticated: false,
  loading: false,
};



export const getUser = createAsyncThunk(
  'user/setUser',
  async () => {
    const token = getToken('accessToken')
    if (token) {
      const res = await request.get('user/profile');
      console.log(res);
      
      return res.data.data;
    }
    return null; 
  }
)


// Create the User Slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Record<string, any>>) => {
      state.data = action.payload;
      state.isAuthenticated = true;
    },
    removeUser: (state) => {
      state.data = {};
      state.isAuthenticated = false;
    },
    setUnAuthed:(state)=> {
      state.isAuthenticated = false
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getUser.fulfilled, (state , action: PayloadAction<Record<string, any>>) => {
        state.data = action.payload || {};
        state.isAuthenticated = !!action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.data = {};
        state.isAuthenticated = false;
      });
  },
});

// Export actions and reducer
export const { setUser, removeUser , setUnAuthed } = userSlice.actions;
export default userSlice.reducer;
