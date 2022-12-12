export let state = {
  notes: [],
  completedNotes: [],
};

const setLocal = function () {
  localStorage.setItem("state", JSON.stringify(state));
};

export const loadNote = function (note) {
  const id = new Date().getTime().toString();
  state.notes.push([note, id]);
  setLocal();
  console.log(state.notes);
};

export const closeNote = function (id) {
  state.notes.forEach(function (value) {
    if (value[1] === id) {
      state.notes.pop(value);
    }
  });
  state.completedNotes.forEach(function (value) {
    if (value[1] === id) {
      state.completedNotes.pop(value);
    }
  });
  setLocal();
  console.log(state.notes);
};

export const completedNote = function (id) {
  state.notes.forEach(function (value) {
    if (value[1] === id) {
      state.completedNotes.push(value);
      state.notes.pop(value);
    }
  });
  setLocal();
  console.log(state);
};

export const getLocal = function () {
  const storage = localStorage.getItem("state");
  if (storage) {
    state = JSON.parse(storage);
  }
};
