import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface queryType {
  query:string,
}

const initialState:queryType = {
  query:'',
}

const searchSlice = createSlice({
  name:'search',
  initialState,
  reducers :{
   setQuery:(state,action:PayloadAction<{query:string}>) => {
    state.query = action.payload.query
   }
  }

})

export default searchSlice.reducer;
export const { setQuery } = searchSlice.actions 