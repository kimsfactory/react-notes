const notes = [
  {id: 1, title: 'New note', body: ''},
  {id: 2, title: 'Another note', body: 'Empty'},
  {id: 4, title: 'Another note', body: 'Something else'},
  {id: 3, title: 'Yet another note!', body: ''},
]

export function createNote(title, body) {
  const note = {id: Date.now(), title, body}
  notes.splice(0, 0, note)
  return note
}

export function getNote(id) {
  return notes.find((note) => note.id === id)
}

export function getNoteList() {
  return notes
}

export function updateNote(id, title, body) {
  const indexForUpdate = notes.findIndex((note) => note.id === id)
  const note = {id, title, body}
  notes.splice(indexForUpdate, 1)
  notes.splice(0, 0, note)
  return notes
}

export function deleteNote(id) {
  const indexForDelete = notes.findIndex((note) => note.id === id)
  if (indexForDelete >= 0) notes.splice(indexForDelete, 1)
  return true
}
