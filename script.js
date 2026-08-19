
document.getElementById("year").textContent = new Date().getFullYear();

const cfg = window.STORE_CONFIG || {};
const price = document.getElementById("priceText");
const info = document.getElementById("purchaseInfo");
const btn = document.getElementById("buyButton");

if (cfg.price) price.textContent = cfg.price;
if (cfg.purchaseInfo) info.textContent = cfg.purchaseInfo;

btn.addEventListener("click", () => {
  if (cfg.buyUrl && cfg.buyUrl.trim()) {
    window.open(cfg.buyUrl, "_blank", "noopener,noreferrer");
    return;
  }

  info.textContent =
    "Ссылка на покупку ещё не указана. Открой config.js и вставь buyUrl.";
  btn.classList.add("attention");
});
