import { SlTrash, SlPencil } from "react-icons/sl";

const Note = ({ id, text, editHandler, deleteNote }) => {
  return (
    <div className="note">
      <div className="note-header">
        <div className="note-btn">
          <div className="note-header-edit" onClick={() => editHandler(id)}>
            <SlPencil />
          </div>
          <div className="note-header-delete" onClick={() => deleteNote(id)}>
            <SlTrash />
          </div>
        </div>
      </div>
      <div className="note-body">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Note;
