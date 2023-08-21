document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.getElementById("name");
    const originalName = "Zineks";

    function typeWriterEffect(element, text, callback) {
        let currentIndex = 0;
        const delay = 200;

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

    function deleteLastCharactersOneByOne(element, text, charactersCount, currentIndex, callback) {
        if (currentIndex >= 0 && charactersCount > 0) {
            const newText = text.slice(0, currentIndex);
            element.textContent = newText;
            setTimeout(function () {
                deleteLastCharactersOneByOne(element, newText, charactersCount - 1, currentIndex - 1, callback);
            }, 200);
        } else {
            callback();
        }
    }

    typeWriterEffect(nameElement, originalName, function () {
        deleteLastCharactersOneByOne(nameElement, originalName, 3, originalName.length - 1, function () {
            typeWriterEffect(nameElement, "oks", function () {
                // Действия после завершения
            });
        });
    });
});