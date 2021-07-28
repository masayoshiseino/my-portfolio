btn.onclick = (function () {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    let n = Math.random();
    if (n < 0.3) {
      this.textContent = "大吉"; // 30%
    } else if (n < 0.45) {
      this.textContent = "吉"; // 15%
    } else if (n < 0.6) {
      this.textContent = "中吉"; // 15%
    } else if (n < 0.85) {
      this.textContent = "小吉"; // 15%
    } else {
      this.textContent = "凶"; // 15%
    }
  });
})();
