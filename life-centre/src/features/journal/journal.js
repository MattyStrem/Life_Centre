import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Card from '../../components/card'

import { enrtyAdd, journalSelector } from "../../store/journalSlice";


const Journal = () => {
    const [newJournalEntry, setNewJournalEntry] = useState("");
    const { entries } = useSelector(journalSelector);

    const dispatch = useDispatch();

    const onJournalSubmit = (e) => {
        e.preventDefault();

        if (newJournalEntry === "") {
            return;
        }

        dispatch(enrtyAdd(newJournalEntry));
        setNewJournalEntry("");
    }

    return (
        <div>
            <Card >
                <h2>What's on your mind?</h2>
                <form onSubmit={onJournalSubmit}>
                    <input
                        type="text"
                        className="journal-input"
                        value={newJournalEntry}
                        onChange={(e) => {
                            setNewJournalEntry(e.target.value)
                        }}
                        aria-label="New journal Entry"
                        >
                    </input>
                </form>
            </Card>
            <Card>
                <p>{entries[1].item}</p>
                
            </Card>
        </div>
    )

}

export default Journal;