import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "@store/store"
import { InitialState } from "./TemplateName.interface"

const initialState: InitialState = {}

const TemplateNameSlice = createSlice({
	name: "templateName",
	initialState,
	reducers: {},
})

export const {} = TemplateNameSlice.actions

export const selectTemplateName = (state: RootState) => state.templateName

export const TemplateNameReducer = TemplateNameSlice.reducer
