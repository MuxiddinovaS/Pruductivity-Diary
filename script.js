// XSSdan himoya
function sanitizeInput(input) {
  return input.replace(/[&<>"']/g, function (match) {
    const escape = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return escape[match];
  });
}

// Sahifaga foydalanuvchidan ismi kiritilganda salomlashish
// window.onload = () => {
//   const userName = prompt("Ismingizni kiriting (Xavfsiz):");
//   const safeName = sanitizeInput(userName || "Mehmon");
//   const greeting = document.createElement("h2");
//   greeting.innerHTML = `👋 Salom, <span style="color:#ff1493">${safeName}</span>! Saytga xush kelibsiz!`;
//   document.body.insertBefore(greeting, document.body.children[1]);
// };
