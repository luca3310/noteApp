var e=new class{parentEl=document.querySelector(".main");renderNote(e){this.parentEl.querySelector(".noteContainer").innerHTML="",e.forEach((e=>{const t=this._generateNoteMarkup(e);this.parentEl.querySelector(".noteContainer").insertAdjacentHTML("afterbegin",t)}))}renderCompleteNote(e){this.parentEl.querySelector(".completedNoteContainer").innerHTML="",e.forEach((e=>{const t=this._generateCompleteNoteMarkup(e);this.parentEl.querySelector(".completedNoteContainer").insertAdjacentHTML("afterbegin",t)}))}getNote(){const e=this.parentEl.querySelector(".inputNote").value;return this.parentEl.querySelector(".inputNote").value="",e}getCloseId(e){this.parentEl.addEventListener("click",(function(t){const n=t.target.closest(".bi-x");n&&e(n.closest(".note").id)}))}getCompletedNote(e){this.parentEl.addEventListener("click",(function(t){const n=t.target.closest(".bi-check");n&&e(n.closest(".note").id)}))}addHandlerSubmit(e){this.parentEl.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault(),e()}))}_generateNoteMarkup([e,t]){return`\n      <div id="${t}" class="note">\n        <div class="noteHeader">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="16"\n            height="16"\n            fill="currentColor"\n            class="bi bi-x"\n            viewBox="0 0 16 16"\n          >\n            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />\n          </svg>\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="16"\n            height="16"\n            fill="currentColor"\n            class="bi bi-check"\n            viewBox="0 0 16 16"\n          >\n            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />\n          </svg>\n        </div>\n    \n        <p class="noteText">\n          ${e}\n        </p>\n      </div>`}_generateCompleteNoteMarkup([e,t]){return`\n      <div id="${t}" class="note">\n        <div class="noteHeader">\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            width="16"\n            height="16"\n            fill="currentColor"\n            class="bi bi-x"\n            viewBox="0 0 16 16"\n          >\n            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />\n          </svg>\n          \n        </div>\n    \n        <p class="noteText">\n          ${e}\n        </p>\n      </div>`}};let t={notes:[],completedNotes:[]};const n=function(){localStorage.setItem("state",JSON.stringify(t))},o=function(e){const o=(new Date).getTime().toString();t.notes.push([e,o]),n(),console.log(t.notes)},r=function(){o(e.getNote()),e.renderNote(t.notes)},s=function(o){var r;r=o,t.notes.forEach((function(e){e[1]===r&&t.notes.pop(e)})),t.completedNotes.forEach((function(e){e[1]===r&&t.completedNotes.pop(e)})),n(),console.log(t.notes),e.renderNote(t.notes),e.renderCompleteNote(t.completedNotes)},l=function(o){var r;r=o,t.notes.forEach((function(e){e[1]===r&&(t.completedNotes.push(e),t.notes.pop(e))})),n(),console.log(t),e.renderNote(t.notes),e.renderCompleteNote(t.completedNotes)};e.addHandlerSubmit(r),e.getCloseId(s),e.getCompletedNote(l),function(){const e=localStorage.getItem("state");e&&(t=JSON.parse(e))}(),e.renderNote(t.notes),e.renderCompleteNote(t.completedNotes);
//# sourceMappingURL=index.563f7b22.js.map
