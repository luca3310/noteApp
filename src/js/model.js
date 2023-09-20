export let state = {
  notes: [],
  completedNotes: [],
  allNotes: [],
};

const setLocal = function () {
  localStorage.setItem("state", JSON.stringify(state));
};

export const loadNote = function (note) {
  const id = new Date().getTime().toString();
  state.notes.push([note, id]);
  state.allNotes.push(note)
  setLocal();
  console.log(state);
};

export const closeNote = function (id) {
  state.notes = state.notes.filter((value) => value[1] !== id);

  state.completedNotes = state.completedNotes.filter(
    (value) => value[1] !== id
  );
  setLocal();
  console.log(state.notes);
};

export const completedNote = function (id) {
  state.notes.forEach(function (value) {
    if (value[1] === id) {
      state.completedNotes.push(value);
    }
  });
  state.notes = state.notes.filter((value) => value[1] !== id);
  setLocal();
  console.log(state);
};

export const getLocal = function () {
  const storage = localStorage.getItem("state");
  if (storage) {
    state = JSON.parse(storage);
  }
};
