// Action types
export const SET_DATABASE = 'SET_DATABASE'
export const CLOSE_DATABASE = 'CLOSE_DATABASE'

export const INSERT_INTO_DATABASE = 'ADD_INTO_DATABASE'
export const DELETE_FROM_DATABASE = 'DELETE_FROM_DATABASE'
export const READ_FROM_DATABASE = 'READ_FROM_DATABASE'
export const EDIT_DATABASE = 'EDIT_DATABASE'

// Action creators
//TODO: Edit parameters of these to be correct
export function setDatabase(realm) {
    return { type: SET_DATABASE, realm }
}

export function closeDatabase(realm) {
    return { type: CLOSE_DATABASE, realm }
}

export function insertIntoDatabase(key, value) {
  return { type: INSERT_INTO_DATABASE, key, value }
}

export function deleteFromDatabase(key) {
  return { type: DELETE_FROM_DATABASE, key }
}

export function readFromDatabase(key) {
  return { type: READ_FROM_DATABASE, key }
}

export function editDatabase(key, value) {
    return { type: EDIT_DATABASE, key, value }
}