const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});

function likePost(button) {
  const counter = button.querySelector("span");
  counter.textContent = Number(counter.textContent) + 1;
}

function createPost() {
  const text = prompt("Write your post:");

  if (!text || !text.trim()) return;

  const post = document.createElement("div");
  post.className = "post";

  post.innerHTML = `
    <h3>You</h3>
    <p>${escapeHTML(text)}</p>
    <button onclick="likePost(this)">
      ❤️ <span>0</span>
    </button>
  `;

  document.getElementById("feed").prepend(post);
}

function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
