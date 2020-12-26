import store from './store/store';
import { addNote } from './actions/actions';

// ------ HTML references ------
let notesUList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let addNoteTitle = addNoteForm['title'];
let addNoteContent = addNoteForm['content'];

// We use store.getState() to get our app state from the store
console.log('Before:', store.getState());
console.log(store.dispatch);
store.dispatch(addNote('One', 'One content'));
store.dispatch(addNote('Two', 'Two content'));
store.dispatch(addNote('Three', 'Three content'));
console.log('After:', store.getState());

// ------ Redux ------
function deleteNote(index) {
    // console.log(index);
}

function renderNotes() {
    setDeleteNoteButtonsEventListeners();
}

// ------ Event Listeners ------
addNoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = addNoteTitle.value;
    let content = addNoteContent.value;
    store.dispatch(addNote(title, content));
    console.log(store.getState());
    // console.log('Title:', addNoteTitle.value, 'Content:', addNoteContent.value);
});

function setDeleteNoteButtonsEventListeners() {
    let buttons = document.querySelectorAll('ul#notes li button');

    for (let button of buttons) {
        button.addEventListener('click', () => {
            deleteNote(button.dataset.id);
        });
    }
}

// ------ Render the initial Notes ------
renderNotes();