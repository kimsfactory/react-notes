import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default function List({chosenNote, setChosenNote, notes}) {
  const onChooseNote = (note) => {
    setChosenNote(note)
  }

  return (
    <ListGroup as="ul">
      {notes.map((note, index) => (
        <ListGroup.Item
          active={chosenNote ? note.id === chosenNote.id : false}
          onClick={() => onChooseNote(note)}
          as="li"
        >
          {note.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
