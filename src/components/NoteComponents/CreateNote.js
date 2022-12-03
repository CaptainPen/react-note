import { SlPin } from "react-icons/sl";

const CreateNote = ({ textHandler, saveHandler, inputText }) => {
  return (
    <div className="note">
      <div className="note-header">
        <div className="note-header-save" onClick={saveHandler}>
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
          /* maxLength="100" */
        ></textarea>
      </div>
    </div>
  );
};

export default CreateNote;
