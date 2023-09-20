class view {
  parentEl = document.querySelector(".main");

  renderNote(data) {
    this.parentEl.querySelector(".noteContainer").innerHTML = "";
    data.forEach((note) => {
      const markup = this._generateNoteMarkup(note);
      this.parentEl
        .querySelector(".noteContainer")
        .insertAdjacentHTML("afterbegin", markup);
    });
  }

  renderCompleteNote(data) {
    this.parentEl.querySelector(".completedNoteContainer").innerHTML = "";
    data.forEach((note) => {
      const markup = this._generateCompleteNoteMarkup(note);
      this.parentEl
        .querySelector(".completedNoteContainer")
        .insertAdjacentHTML("afterbegin", markup);
    });
  }

  getNote() {
    const note = this.parentEl.querySelector(".inputNote").value;
    this.parentEl.querySelector(".inputNote").value = "";
    return note;
  }

  getCloseId(handler) {
    this.parentEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".bi-x");
      if (!btn) return;
      handler(btn.closest(".note").id);
    });
  }

  getCompletedNote(handler) {
    this.parentEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".bi-check");
      if (!btn) return;
      handler(btn.closest(".note").id);
    });
  }

  addHandlerSubmit(handler) {
    this.parentEl
      .querySelector(".form")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        handler();
      });
  }
  addHandlerChange(handler) {
    this.parentEl
      .querySelector(".inputNote")
      .addEventListener("input", function () {
        const inputNote = this.parentEl.querySelector(".inputNote")
        handler(inputNote.value) === undefined ? 
        inputNote.innerHTML = ""
         :
        inputNote.querySelector(".suggestion").innerHTML = handler(str)
      })
  }
  addHandlerChooseSuggestion() {
    this.parentEl.querySelector(".suggestion").addEventListener("click", function () {
        this.parentEl.querySelector(".inputNote").value = sug.innerHTML
    })
  }

  _generateNoteMarkup([data, id]) {
    return `
      <div id="${id}" class="note">
        <div class="noteHeader">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
          </svg>
        </div>
    
        <p class="noteText">
          ${data}
        </p>
      </div>`;
  }

  _generateCompleteNoteMarkup([data, id]) {
    return `
      <div id="${id}" class="note">
        <div class="noteHeader">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
          
        </div>
    
        <p class="noteText">
          ${data}
        </p>
      </div>`;
  }
}

export default new view();
