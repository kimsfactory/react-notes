import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import {createNote, updateNote, deleteNote, getNoteList} from '../utils/noteFunctions'

export default function Editor({chosenNote, setChosenNote, refreshList}) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const onChangeTitle = (e) => setTitle(e.target.value)
  const onChangeBody = (e) => setBody(e.target.value)

  const [status, setStatus] = useState('')

  const onSave = (e) => {
    e.preventDefault()
    setTitle('')
    setBody('')
    setStatus(<Alert variant="success">SAVED!</Alert>)
    if (chosenNote) {
      updateNote(chosenNote.id, title, body)
      return refreshList()
    }
    createNote(title, body)
    refreshList()
  }

  const onDelete = (e) => {
    e.preventDefault()
    const {id} = chosenNote
    deleteNote(id)
    refreshList()
    setTitle('')
    setBody('')
    setStatus(<Alert variant="danger">DELETED!</Alert>)
  }

  useEffect(() => {
    if (chosenNote) {
      setTitle(chosenNote.title)
      setBody(chosenNote.body)
    } else {
      setTitle('')
      setBody('')
    }
  }, [chosenNote])

  // 'message when list is empty' not working(down)
  const existList = getNoteList()
  useEffect(() => {
    if (existList == []) setStatus(<Alert variant="danger">no notes found.</Alert>)
  }, [existList])
  // 'message when list is empty' not working(up)

  useEffect(() => {
    setTimeout(() => setStatus(''), 3000)
  }, [status])

  return (
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control className="mb-3" size="lg" value={title} onChange={onChangeTitle} />
        <Form.Label>Note</Form.Label>
        <Form.Control as="textarea" size="lg" value={body} onChange={onChangeBody} />
      </Form.Group>

      <Button className="mr-3" variant="primary" onClick={onSave}>
        Save
      </Button>
      {chosenNote && (
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      )}
      <p></p>
      {status && <p>{status}</p>}
    </Form>
  )
}
