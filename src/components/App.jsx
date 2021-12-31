import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function emojiEntry(emojipe) {
  return (
    <Entry
      emoji={emojipe.emoji}
      name={emojipe.name}
      meaning={emojipe.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(emojiEntry)}</dl>
    </div>
  );
}

export default App;
