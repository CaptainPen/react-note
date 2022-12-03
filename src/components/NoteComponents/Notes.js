import { useState, useEffect } from "react";
import "../styles/Notes.scss";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { v4 as uuid } from "uuid";

const Notes = () => {
  //states
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  //get text and store in state
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  //add new note
  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
      },
    ]);
    //clear the textarea
    setInputText("");
  };

  //edit note
  const editHandler = (id) => {
    notes.map((note) => {
      if (note.id == id) {
        note.text = inputText;
        setInputText("");
      }
    });
  };

  //delete note
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <div>
      <div className="notes">
        <CreateNote
          textHandler={textHandler}
          saveHandler={saveHandler}
          inputText={inputText}
        />
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            editHandler={editHandler}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default Notes;
