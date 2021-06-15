import React from "react";
import { useDispatch } from "react-redux";

import { entryRemove, entryCompleteToggle} from "../../../store/journalSlice"


const JournalEntry = ({ children, id, complete}) => {
    const dispatch = useDispatch();

    return (
        <div className={`item`}>
            <div className="entry-actions-container">
                <button
                    aria-label="Remove"
                    className="remove"
                    onClick={ () => dispatch(entryRemove(id)) }
                >
                    Remove
                </button>
                <button
                    aria-label="Complete"
                    className="done"
                    onClick={ () => dispatch(entryCompleteToggle(id)) }
                >
                    {complete ? "Redo" : "Done"}
                </button>
            </div>
            {children}
        </div>
    )
}

export default JournalEntry;