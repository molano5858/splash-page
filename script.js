const { body } = document; // destructuring syntax

function changeBackground(number) {
  // Start to functionality that shown any background and if we click again after that background is shown then
  // return the background to the original background
  let previousBackground;
  if (body.className) {
    previousBackground = body.className;
  }
  // reset class from the body
  body.className = "";
  console.log(previousBackground);
  switch (number) {
    case "1":
      return previousBackground === "background-1"
        ? false
        : body.classList.add("background-1");
    case "2":
      return previousBackground === "background-2"
        ? false
        : body.classList.add("background-2");
    case "3":
      return previousBackground === "background-3"
        ? false
        : body.classList.add("background-3");
    default:
      break;
  }
}
