// Исходный список случайных слов
var originalWords = [
  "Поет",
  "Мазепа",
  "Княжна",
  "Макогон",
  "Марія",
  "Сотник",
  "Відьма",
  "Неофіти",
  "Стодоля",
  "Поема",
  "Повість",
  "Вірш",
  "Ніч",
  "Псалми",
  "Єретик",
];

// Копия массива слов для работы с ним
var words = originalWords.slice();

function generateRandomWord() {
  // Проверка, есть ли слова в массиве
  if (words.length === 0) {
    document.getElementById("randomWord").innerHTML = "Всі слова використані";
  } else {
    // Генерация случайного индекса
    var randomIndex = Math.floor(Math.random() * words.length);

    // Получение и удаление случайного слова из массива
    var randomWord = words.splice(randomIndex, 1)[0];

    // Вывод слова на странице
    document.getElementById("randomWord").innerHTML = randomWord;
  }
}
