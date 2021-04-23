import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [note, setNote] = React.useState({
      title: "",
      content: ""
    });
    const [isExpanded, setExpanded] = React.useState(false);

    function noteValue(event){
      const {value, name} = event.target
      setNote(prevValue => {
        if(name === "title"){
          return {
            title: value,
            content: prevValue.content
          }
        }else if(name === "content"){
          return {
            title: prevValue.title,
            content: value
          }
        }
      })
    }
      function submitNote(event){
            props.saveNote(note)
            event.preventDefault()
            setNote({
              title: "",
              content: ""
            });
      }

      function expand() {
        setExpanded(true);
      }
  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input onChange={noteValue} name="title" value={note.title} placeholder="Title" />
        : null}
        <textarea onChange={noteValue} onClick={expand}  name="content" value={note.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
