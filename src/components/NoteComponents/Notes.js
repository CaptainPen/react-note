import { useState } from "react";
import "../styles/Form.scss";
import "../styles/Notes.scss";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { v4 as uuid } from "uuid";

const Notes = () => {
  //states
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem(`notes`)) || []);
  const [inputText, setInputText] = useState("");
  const [value, setValue] = useState("");

  //get text and store in state
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  //add new note
  const saveHandler = () => {
    //tag search
    let tags = inputText.split(" ").filter((obj) => {
      return obj.includes("#");
    });
    //get data and store in state
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
        tags: tags,
      },
    ]);
    //save localStorage
    setLocalStorage(notes);
    //clear the textarea
    setInputText("");
  };

  //edit note
  const editHandler = (id) => {
    //tag search
    let tags = inputText.split(" ").filter((obj) => {
      return obj.includes("#");
    });
    //data replacement
    notes.map((note) => {
      if (note.id === id) {
        note.text = inputText;
        note.tags = tags;
        setInputText("");
      }
    });
    //save localStorage
    setLocalStorage(notes);
  };

  //delete note
  const deleteNote = (id) => {
    //filter by id
    const filteredNotes = notes.filter((note) => note.id !== id);
    //store in state
    setNotes(filteredNotes);
    //save localStorage
    setLocalStorage(filteredNotes);
  };

  //tag search
  const filteredTags = notes.filter((note) => {
    let resultValue = value;
    //adding a tag before value
    if (value) {
      resultValue = `#` + value.toLowerCase();
    }
    //search by value
    return note.tags.join("").toLowerCase().includes(resultValue);
  });

  //the function of saving to localStorage
  const setLocalStorage = (dataNotes) => {
    localStorage.setItem(`notes`, JSON.stringify(dataNotes));
  };

  return (
    <div className="wrapper">
      <div className="search">
        <div className="content">
          <form className="search-form">
            <span>#</span>
            <input
              type="text"
              placeholder="Search tags"
              className="search-input"
              onChange={(e) => setValue(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="notes">
        <CreateNote
          textHandler={textHandler}
          saveHandler={saveHandler}
          inputText={inputText}
        />
        {filteredTags.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            tags={note.tags}
            editHandler={editHandler}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default Notes;
