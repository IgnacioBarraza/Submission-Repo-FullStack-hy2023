import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAllNotes = () => {
  return axios.get(baseUrl);
}

const getNote = (id) => {
  return axios.get(`${baseUrl}/${id}`)
}

const createNote = (newNote) => {
  return axios.post(`${baseUrl}`, newNote)
}

export default {
  getAll: getAllNotes,
  getNote: getNote,
  createNote: createNote
}