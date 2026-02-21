// Получаем элементы модального окна и кнопки
const modal = document.getElementById("login");
const loginButton = document.querySelector(".header-actions .btn-secondary[href='#login']"); // Находим кнопку входа
const closeButton = document.querySelector(".modal-content .close-button");

// Если кнопка входа найдена, добавляем обработчик клика
if (loginButton) {
    loginButton.addEventListener("click", function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        modal.style.display = "block"; // Показываем модальное окно
    });
}

// Если кнопка закрытия найдена, добавляем обработчик клика
if (closeButton) {
    closeButton.addEventListener("click", function() {
        modal.style.display = "none"; // Скрываем модальное окно
    });
}

// Закрываем окно, если кликнуть за его пределами
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Скрываем модальное окно
    }
});
