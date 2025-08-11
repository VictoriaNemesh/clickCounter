// --- Переменые ---
// Объявляем переменную, которая хранит количество кликов
let count = 0; // текущее значение счетчика

// Находим на странице элемент с числом
const countEl = document.getElementById('count');

// Находим кнопки
const btnIncrease = document.getElementById('btn-increase');
const btnDecrease = document.getElementById('btn-decrease');
const btnReset = document.getElementById('btn-reset');

// --- Функции ---
// Функция для обновления интерфейса и сохранения значений
function updateDisplay() {
    countEl.textContent = count;
    btnReset.disabled = (count === 0);
    localStorage.setItem('counterValue', count);
}

// --- События ---
// Добавляем обработчик клика на кнопку +1 -1
btnIncrease.addEventListener('click', () => {
    count++; // увеличиваем count на 1
    updateDisplay(); // обновление
});

btnDecrease.addEventListener('click', () => {
    if (count > 0) { // запрещаем отрицательные значения
  count--;
  updateDisplay();
    }
});

// Добавляем обработчик клика на кнопку Reset
btnReset.addEventListener('click', () => {
    count = 0; // сбрасываем count в 0
    updateDisplay(); // обновление
});

// --- При загрузке страници
const savedCount = localStorage.getItem('counterValue');
if (savedCount !== null) {
    count = parseInt(savedCount, 10) || 0;
}
updateDisplay();