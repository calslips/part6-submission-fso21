import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotice } from '../reducers/notificationReducer'

const AnecdoteForm = ({ createAnecdote, setNotice }) => {
  const addAnecdote = async (event) => {
    event.preventDefault()
    const anecdoteContent = event.target.anecdote.value
    event.target.anecdote.value = ''
    createAnecdote(anecdoteContent)
    setNotice(`new anecdote '${anecdoteContent}'`, 5)
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}

export default connect(
  null,
  { createAnecdote, setNotice }
)(AnecdoteForm)
