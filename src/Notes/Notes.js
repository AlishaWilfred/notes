import "./Notes.css";
import NotesList from "./NotesList";
import React, { useEffect } from "react";

export default function Notes({
  input,
  setInput,
  addNote,
  notes,
  deleteNote,
  editNote,
  setEditNote,
}) {
  function handleChange(e) {
    const { name, value } = e.target;
    setInput((input) => {
      return {
        ...input,
        [name]: value,
      };
    });
  }

  React.useEffect(() => {
    if (editNote) {
      const note = notes.find((n) => n.id === editNote);
      setInput(note);
    } else {
      setInput({
        id: Math.floor(Math.random() * 10000),
        title: "",
        text: "",
        date: "21/07/2022",
      });
    }
  }, [editNote]);

  return (
    <section className="main-container">
      <div className="heading">
        <h1>Write Your Notes...</h1>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={input.title}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Description"
          name="text"
          value={input.text}
          onChange={handleChange}
        ></input>
        <button className="btn" title="Add Note" onClick={addNote}>
          {editNote ? 'Save' : 'Add Note'}
        </button>
      </div>

      <NotesList
        notes={notes}
        deleteNote={deleteNote}
        editNote={editNote}
        setEditNote={setEditNote}
      />
    </section>
  );
}
