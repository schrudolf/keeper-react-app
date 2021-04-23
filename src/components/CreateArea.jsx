import React from "react";

function CreateArea(props) {
    const [note, setNote] = React.useState([])
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
      })}
  return (
    <div>
      <form>
        <input onChange={noteValue} name="title" placeholder="Title" />
        <textarea onChange={noteValue} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={function(e){
          props.saveNote(note)
          e.preventDefault()
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
