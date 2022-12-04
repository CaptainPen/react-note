import { SlPin } from "react-icons/sl";

const CreateNote = ({ textHandler, saveHandler, inputText }) => {
  return (
    <div className="note">
      <div className="note-header">
        <h3>Create and edit a note</h3>
        <div
          className="note-header-save"
          title="Pin a note"
          onClick={saveHandler}
        >
          <SlPin />
        </div>
      </div>
      <div
        className="note-body"
        style={{ background: "rgba(255, 255, 255, 0)" }}
      >
        <textarea
          cols="10"
          rows="5"
          value={inputText}
          placeholder="Type..."
          onChange={textHandler}
          maxLength="360"
        ></textarea>
      </div>
    </div>
  );
};

export default CreateNote;
