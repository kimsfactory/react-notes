import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import List from './components/list'
import Editor from './components/editor'
import {getNoteList} from './utils/noteFunctions'

export default function App() {
  const [chosenNote, setChosenNote] = useState(undefined)
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const notes = getNoteList()
    setNotes(notes)
  }, [])

  const refreshList = () => {
    setChosenNote(undefined)
    const notes = getNoteList()
    setNotes([...notes])
  }

  const onClickNewNote = () => setChosenNote(undefined)

  return (
    <Container>
      <p></p>
      <Jumbotron>
        <h1>Notes</h1>
      </Jumbotron>
      <Row>
        <Col xs={12} md={4} lg={4}>
          <Button className="mb-3" variant="info" onClick={onClickNewNote} block>
            New note
          </Button>
          <List notes={notes} chosenNote={chosenNote} setChosenNote={setChosenNote} />
        </Col>
        <Col xs={12} md={8} lg={8}>
          <Editor refreshList={refreshList} chosenNote={chosenNote} />
        </Col>
      </Row>
    </Container>
  )
}
