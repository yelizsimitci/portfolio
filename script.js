// CUSTOM CURSOR
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

// PASSWORD PROTECTED CLIENT GALLERY
function checkPassword() {
  const password = prompt("Enter client password:");
  if (password === "editorial2026") {
    window.location.href = "client-gallery.html";
  } else {
    alert("Incorrect password.");
  }
}
