document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#myButton");
  const output = document.querySelector("#output");

  button.addEventListener("click", () => {
    output.textContent = "Button was clicked!";
    output.style.color = "green";
  });
});
