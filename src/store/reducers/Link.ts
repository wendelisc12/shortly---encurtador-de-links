import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type linkObj = {
    linkOrigin:string,
    linkEncurtado:string
}

const initialState:linkObj[] = []

const LinkSlice = createSlice({
    name: 'link',
    initialState,
    reducers:{
        adicionarLinks: (state, action:PayloadAction<linkObj>) => {
            state.push(action.payload)
        },
    }
})

export const {adicionarLinks} = LinkSlice.actions
export default LinkSlice.reducer