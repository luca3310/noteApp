import view from "./view";
import { loadNote, closeNote, getLocal, completedNote } from "./model";
import { state } from "./model";

const controlSubmit = function () {
  loadNote(view.getNote());
  view.renderNote(state.notes);
};

const controlClose = function (data) {
  closeNote(data);

  view.renderNote(state.notes);
  view.renderCompleteNote(state.completedNotes);
};

const controlCompleteNote = function (data) {
  completedNote(data);
  view.renderNote(state.notes);
  view.renderCompleteNote(state.completedNotes);
};

const controlGetAutoComplete = function (str) {
  const autoCompleteArray = []
  state.allNotes.forEach((note) => {
    if (note.includes(str)) { 
      autoCompleteArray.push(note)
    }
  })
  return autoCompleteArray[0]
}

const init = function () {
  view.addHandlerSubmit(controlSubmit);
  view.getCloseId(controlClose);
  view.getCompletedNote(controlCompleteNote);
  getLocal();
  view.renderNote(state.notes);
  view.renderCompleteNote(state.completedNotes);
  view.addHandlerChange(controlGetAutoComplete);
  view.addHandlerChooseSuggestion();
};

init();
