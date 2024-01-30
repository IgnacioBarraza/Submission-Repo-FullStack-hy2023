import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = () => {
  return axios.get(baseUrl);
}

const getPerson = (id) => {
  return axios.get(`${baseUrl}/${id}`)
}

const createPersons = (newNote) => {
  return axios.post(`${baseUrl}`, newNote)
}

const updatePersons = (id, updatePerson) => {
  return axios.put(`${baseUrl}/${id}`, updatePerson)
}

const deletePersons = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

export default {
  getAll: getAllPersons,
  getNote: getPerson,
  createNote: createPersons,
  deleteNote: deletePersons,
  updateNote:  updatePersons
}