const botaoMenu = document.querySelector("#btn-menu");
const menu = document.querySelector(".main-nav");

botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("ativo");

    const menuAberto = menu.classList.contains("ativo");

    botaoMenu.textContent = menuAberto
        ? "✕ Fechar"
        : "☰ Menu";

    botaoMenu.setAttribute("aria-expanded", menuAberto);
});