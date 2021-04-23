import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
  return (
    <div id={props.id} className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={e => {
        props.deleteItem(props.id)
        e.preventDefault()
      }}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
