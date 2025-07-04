// scrollIntoView
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// opsional, bisa ubah sesuai nama
const greetingEl = document.getElementById("greeting");
const nameInput = document.getElementById("name");

if (greetingEl && nameInput) {
  nameInput.addEventListener("input", () => {
    greetingEl.textContent = `Hi, Namaku ${nameInput.value || "Fawwaz"}`;
  });
}

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const message = document.getElementById("message").value;

  const resultBox = document.getElementById("formResult");
  resultBox.innerHTML = `
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender}</p>
      <p><strong>Pesan:</strong> ${message}</p>
    `;
});
