
const translations = {
  en: { title: "pixPLace", tagline: "Create stunning images with AI inside Telegram", open_in_tg: "Open in Telegram", all_rights: "All rights reserved." },
  ru: { title: "pixPLace", tagline: "Создавайте потрясающие изображения с ИИ прямо в Telegram", open_in_tg: "Открыть в Telegram", all_rights: "Все права защищены." },
  es: { title: "pixPLace", tagline: "Crea imágenes asombrosas con IA en Telegram", open_in_tg: "Abrir en Telegram", all_rights: "Todos los derechos reservados." },
  fr: { title: "pixPLace", tagline: "Créez des images impressionnantes avec l'IA sur Telegram", open_in_tg: "Ouvrir dans Telegram", all_rights: "Tous droits réservés." },
  de: { title: "pixPLace", tagline: "Erstelle beeindruckende Bilder mit KI in Telegram", open_in_tg: "In Telegram öffnen", all_rights: "Alle Rechte vorbehalten." },
  it: { title: "pixPLace", tagline: "Crea immagini straordinarie con l'IA su Telegram", open_in_tg: "Apri su Telegram", all_rights: "Tutti i diritti riservati." },
  zh: { title: "pixPLace", tagline: "使用 AI 在 Telegram 中创建令人惊叹的图像", open_in_tg: "在 Telegram 中打开", all_rights: "版权所有。" },
  ja: { title: "pixPLace", tagline: "TelegramでAIを使って素晴らしい画像を作成", open_in_tg: "Telegramで開く", all_rights: "全著作権所有。" },
  ko: { title: "pixPLace", tagline: "Telegram에서 AI로 멋진 이미지를 생성하세요", open_in_tg: "Telegram에서 열기", all_rights: "모든 권리 보유." }
};

function setLanguage(lang) {
  const dict = translations[lang] || translations["en"];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerText = dict[key];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const userLang = navigator.language.slice(0, 2);
  setLanguage(userLang);
  document.getElementById("langSwitcher").value = userLang;
  document.getElementById("langSwitcher").addEventListener("change", e => {
    setLanguage(e.target.value);
  });
});
