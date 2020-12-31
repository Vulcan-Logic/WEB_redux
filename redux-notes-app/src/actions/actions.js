export const ADD_NOTE = 'ADD_NOTE';

export function addNote(title, content) {
    return { type: ADD_NOTE, title: title, content: content };
}

export const REMOVE_NOTE = 'REMOVE_NOTE';

export function removeNote(id) {
  return { type: REMOVE_NOTE, id: id };
}

export const SHOW_ALL = 'SHOW_ALL';

export function showAll() {
  return { type: SHOW_ALL };
}