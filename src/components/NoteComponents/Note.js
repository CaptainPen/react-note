import { SlTrash, SlPencil } from "react-icons/sl";

const Note = ({ id, text, tags, editHandler, deleteNote }) => {
  return (
    <div className="note">
      <div className="note-header">
        <div className="note-btn">
          <div
            className="note-header-edit"
            title="Edit a note"
            onClick={() => editHandler(id)}
          >
            <SlPencil />
          </div>
          <div
            className="note-header-delete"
            title="Delete a note"
            onClick={() => deleteNote(id)}
          >
            <SlTrash />
          </div>
        </div>
      </div>
      <div className="note-body">
        <span>{text}</span>
      </div>
      <div className="note-footer">
        {tags.map((tag, index) => (
          <span key={index}>{tag} </span>
        ))}
      </div>
    </div>
  );
};

export default Note;
