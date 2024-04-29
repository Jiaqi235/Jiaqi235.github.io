document.addEventListener('DOMContentLoaded', function () {
    // Agregar eventos de clic a las palabras para crear flechas entre ellas
    const words = document.querySelectorAll('.word');

    // Variables para mantener el estado del proceso de selección
    let firstSelectedWord = null;
    let secondSelectedWord = null;

    // Función para crear una flecha entre dos palabras
    function createArrow(start, end) {
        new LeaderLine(start, end);
    }

    // Función para verificar si todas las palabras están relacionadas
    function checkAllWordsConnected() {
        const arrows = document.querySelectorAll('.leader-line');
        const words = document.querySelectorAll('.word');

        // Verificar si todas las palabras tienen una flecha conectada
        for (let word of words) {
            let connected = false;
            for (let arrow of arrows) {
                if (arrow.getAttribute('start') === word.id || arrow.getAttribute('end') === word.id) {
                    connected = true;
                    break;
                }
            }
            if (!connected) return false;
        }
        return true;
    }

    // Función para habilitar/deshabilitar el botón de verificación según las relaciones establecidas
    function toggleCheckButton() {
        const button = document.getElementById('check-button');
        button.disabled = !checkAllWordsConnected();
    }

    // Agregar evento de clic a cada palabra
    words.forEach(word => {
        word.addEventListener('click', function () {
            // Si es la primera palabra seleccionada
            if (firstSelectedWord === null) {
                firstSelectedWord = word;
                word.classList.add('selected');
            } else if (firstSelectedWord === word) {
                // Si haces clic en la primera palabra seleccionada nuevamente, la deselecciona
                firstSelectedWord.classList.remove('selected');
                firstSelectedWord = null;
            } else {
                // Si es la segunda palabra seleccionada, crea una flecha y restablece el estado
                secondSelectedWord = word;
                createArrow(firstSelectedWord, secondSelectedWord);
                firstSelectedWord.classList.remove('selected');
                firstSelectedWord = null;
                toggleCheckButton();
            }
        });
    });

    // Agregar evento de clic al botón de verificación
    document.getElementById('check-button').addEventListener('click', function () {
        alert('Verification done');
        // Aquí puedes implementar la lógica para verificar las respuestas y mostrar retroalimentación
    });
});
