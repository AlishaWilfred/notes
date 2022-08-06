import React from "react";
import Header from "./Notes/Header";
import Notes from "./Notes/Notes";

function App() {
  const [input, setInput] = React.useState({
    id: Math.floor(Math.random() * 10000),
    title: "",
    text: "",
    date: "21/07/2022",
  });

  const [notes, setNotes] = React.useState([]);
  const [editNote, setEditNote] = React.useState("");

  React.useEffect(() => {
    const retrieve = JSON.parse(localStorage.getItem("notes"));
    if (retrieve) setNotes(retrieve);
  }, []);

  const addNote = (e) => {
    e.preventDefault();

    if (editNote) {
      const newNotes = notes.map((n) => {
        if (n.id === editNote) {
          return {
            ...input,
          };
        }
        return { ...n };
      });
      setNotes(newNotes);
      setInput({
        id: Math.floor(Math.random() * 10000),
        title: "",
        text: "",
        date: "21/07/2022",
      });
      localStorage.setItem("notes", newNotes);
    } else {
      const dates = new Date();
      const newNote = {
        id: Math.floor(Math.random() * 10000),
        title: input.title,
        text: input.text,
        date: dates.toLocaleDateString("en", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
      console.log(newNotes);
      localStorage.setItem("notes", JSON.stringify(newNotes));
      setInput({ title: "", text: "" });
    }
  };

  const deleteNote = (id) => {
    const updatedNote = notes.filter((elem, ids) => ids !== id);
    setNotes(updatedNote);
    localStorage.setItem("notes", JSON.stringify(updatedNote));
  };

  console.log(editNote);
  return (
    <div className="App">
      <Header />
      <Notes
        input={input}
        setInput={setInput}
        addNote={addNote}
        notes={notes}
        deleteNote={deleteNote}
        editNote={editNote}
        setEditNote={setEditNote}
      />
    </div>
  );
}

export default App;
