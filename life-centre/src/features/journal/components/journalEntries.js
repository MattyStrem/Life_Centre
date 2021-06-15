import React from "react";
import JournalEntry from "./journalEntry";

const JournalEntries = ({entries}) => {
    const COLORS = [
        "surface-blue",
        "surface-red",
        "surface-green",
        "surface-orange"
      ];

    const getEntryColor = (index) => COLORS[index % COLORS.length];

    return (
        <div className="surface">
            <ul className="entries-list" >
                {entries.map(({item, complete}, index) => (
                    <li
                        key={item}
                        className={`${getEntryColor(index)} surface-styles ${
                            complete? "entry-done" : ""
                        }`}
                    >
                        <JournalEntry id={index}  complete={complete}>
                            {item}
                        </JournalEntry>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JournalEntries;