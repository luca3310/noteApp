import view from "./view";
const form = document.querySelector(".form");
const noteContainer = document.querySelector(".noteContainer");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  view._generateNoteMarkup();
});

noteContainer.addEventListener("click", function (e) {
  const btn = e.target.closest(".bi-check");
  console.log(btn);
  const data = btn.closest(".note").querySelector(".noteText").innerHTML;

  if (!btn) return;
  view._generateCompleteNoteMarkup(data);
  btn.closest(".note").remove();
});

view.addHandlerClose();
