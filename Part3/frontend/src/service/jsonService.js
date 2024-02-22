import axios from 'axios'

const url = 'api/persons'

const getAllPersons = () => {
  return axios.get(url);
}

const getPerson = (id) => {
  return axios.get(`${url}/${id}`)
}

const createPersons = (newNote) => {
  return axios.post(`${url}`, newNote)
}

const updatePersons = (id, updatePerson) => {
  return axios.put(`${url}/${id}`, updatePerson)
}

const deletePersons = (id) => {
  return axios.delete(`${url}/${id}`)
}

export default {
  getAll: getAllPersons,
  getNote: getPerson,
  createNote: createPersons,
  deleteNote: deletePersons,
  updateNote:  updatePersons
}