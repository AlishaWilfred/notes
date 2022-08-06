import React from "react";
import "./Notes.css";

const NotesList = ({ notes, deleteNote, setEditNote }) => {
  return (
    <div className="list-container">
      {notes.map((elem, ids) => {
        return (
          <section className="list" key={ids}>
            <header className="list-header">
              <small className="date">{elem.date}</small>
              <i
                className="fa fa-trash delete-button"
                onClick={() => deleteNote(ids)}
                title="Delete Note"
              ></i>
              <span onClick={() => setEditNote(elem.id)}>Edit note</span>
            </header>
            <div className="list-content">
              <h2>{elem.title}</h2>
              <p>{elem.text}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default NotesList;
