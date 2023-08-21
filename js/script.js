document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.getElementById("name");
    const words = ["Zineks", "Z1neks", "Zinex", "Z1nex", "Zinkoks", "Zin0ks", "Zin0x", "Z1noks", "Z1n0ks", "Z1n0x", "Zinkeks"];

    // Функция для случайного перемешивания массива
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(words);

    let wordIndex = 0;

    function typeWriterEffect(element, text, callback) {
        let currentIndex = 0;
        const delay = 100;

        function type() {
            if (currentIndex < text.length) {
                element.textContent += text[currentIndex];
                currentIndex++;
                setTimeout(type, delay);
            } else {
                callback();
            }
        }

        type();
    }

    function deleteCharactersUntilSpace(element, text, currentIndex, callback) {
        if (currentIndex >= 0 && text[currentIndex] !== " ") {
            const newText = text.slice(0, currentIndex);
            element.textContent = newText;
            setTimeout(function () {
                deleteCharactersUntilSpace(element, newText, currentIndex - 1, callback);
            }, 100);
        } else {
            callback();
        }
    }

    function printNextWord() {
        if (wordIndex < 3) {
            typeWriterEffect(nameElement, words[wordIndex], function () {
                deleteCharactersUntilSpace(nameElement, words[wordIndex], words[wordIndex].length - 1, function () {
                    wordIndex++;
                    printNextWord();
                });
            });
        } else {
            typeWriterEffect(nameElement, "Zinoks", function () {
                // Действия после завершения
            });
        }
    }

    printNextWord();
});
