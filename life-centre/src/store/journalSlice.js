import { createSlice,  } from '@reduxjs/toolkit'; 

const journalSlice = createSlice({
    name: "journal",
    initialState: {
        entries: [
            { item: "pigs", complete: false},
            { item: "dogs", complete: false},
            { item: "cats", complete: false},
        ],
        entriesComplete: []
    },
    reducers: {
        enrtyAdd: (state, action) => {
            state.entries.push({ item: action.payload, complete: false });
        },
        entryCompleteToggle: (state, action) => {
            state.entries[action.payload].complete = !state.entries[action.payload].complete;
        },
        entryRemove: (state, action) => {
            state.entries.splice(action.payload, 1);
        }

    }
})

export const journalSelector = (state) => state.journal;

export const {
    enrtyAdd,
    entryCompleteToggle,
    entryRemove,
} = journalSlice.actions;

export default journalSlice.reducer