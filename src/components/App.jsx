import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function saveNotes(newNote){
    setNotes(prevValue => {
      return [...prevValue,newNote]
    })
  }
  function deleteItem(value){
    setNotes(prevValue => {
     return prevValue.filter((item, index) => {
        return index !== value
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea saveNote={saveNotes}/>
      {notes.map(function(note,index){
       return <Note key={index} id={index} title={note.title} content={note.content} deleteItem={deleteItem} />
      })}
      <Footer />
    </div>
  );
}

export default App;
