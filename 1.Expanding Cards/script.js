const panels = document.querySelectorAll(".panel");

function removeActives() {
  panels.forEach((panel) => {
    if (panel.classList.contains("active")) panel.classList.remove("active");
  });
}
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActives();
    panel.classList.toggle("active");
  });
});
