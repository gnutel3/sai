// Плавная прокрутка
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.getAttribute("href");
        document.querySelector(id).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Обработка формы
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;

    if (!email.includes("@")) {
        document.getElementById("formStatus").textContent = "Введите корректный email!";
        return;
    }

    document.getElementById("formStatus").textContent = "Сообщение успешно отправлено!";
    this.reset();
});

// Кнопка купить
document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", () => {
        alert("Спасибо за покупку! Наш менеджер скоро свяжется с вами.");
    });
});
