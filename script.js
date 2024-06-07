// Add the event listener to the "Add Note" button
document.getElementById("add-note").addEventListener("click", function () {
    // Get the content of the note text area
    const noteContent = document.getElementById("note-content").value;
  
    // check if the content is not empty
    if (noteContent.trim() !== "") {
      addNote(noteContent);
      document.getElementById("note-content").value = "";
    }
  });
  
  function addNote(content) {
    const note = document.createElement("div");
    note.className = "note";
    note.style.backgroundColor = getRandomColor();
  
    // Create a delete button for the note
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "&times;";
    deleteBtn.addEventListener("click", function () {
      note.remove();
    });
  
    // set the content of the note as a paragraph elemnt
    note.innerHTML = `<p>${content}</p>`;
    // Append the delete button to the note
    note.appendChild(deleteBtn);
  
    // Append the note to the notes container
    document.getElementById("notes").appendChild(note);
  }
  
  // Function to generate a random background color for the note
  function getRandomColor() {
    const colors = [
      "#f28b82",
    "#fbbc04",
    "#fff475",
    "#ccff90",
    "#a7ffeb",
    "#cbf0f8",
    "#aecbfa",
    "#d7aefb",
    "#fdcfe8",
    "#ffadad",
    "#ffd6a5",
    "#fdffb6",
    "#caffbf",
    "#9bf6ff",
    "#a0c4ff",
    "#bdb2ff",
    "#ffc6ff",
    "#fffffc",
    ];
    // return a random color from the colors array
    return colors[~~(Math.random() * colors.length)];
  }