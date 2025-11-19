
document.addEventListener('DOMContentLoaded', function() {

   
    // Сначала мы ищем слайдер на странице.
    // Если мы не на странице "Портфолио", этого блока не будет, и код внутри if не выполнится.
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        const track = document.querySelector('.slider-track');
        const slides = Array.from(track.children); // Все картинки-слайды
        const nextButton = document.querySelector('.next');
        const prevButton = document.querySelector('.prev');
        const slideWidth = slides[0].getBoundingClientRect().width; // Ширина одного слайда

        let currentIndex = 0; // Индекс текущего слайда (начинаем с 0)

        // Функция для перемещения "ленты" со слайдами
        const moveToSlide = (targetIndex) => {
            track.style.transform = 'translateX(-' + slideWidth * targetIndex + 'px)';
            currentIndex = targetIndex;
        }

        //  Обработчики для кнопок 

        // Когда нажимаем на кнопку "Вперед"
        nextButton.addEventListener('click', () => {
            let nextIndex = currentIndex + 1;
            if (nextIndex > slides.length - 1) {
                nextIndex = 0; // Если дошли до конца, переходим на первый слайд
            }
            moveToSlide(nextIndex);
        });

        // Когда нажимаем на кнопку "Назад"
        prevButton.addEventListener('click', () => {
            let prevIndex = currentIndex - 1;
            if (prevIndex < 0) {
                prevIndex = slides.length - 1; // Если мы на первом, переходим на последний
            }
            moveToSlide(prevIndex);
        });
    }


   

    // Анимация для картинок (например, GitHub) ---
    const images = document.querySelectorAll('.kartunku img');
    images.forEach(function(img) {
        img.addEventListener('mouseover', function() {
            img.style.transform = 'scale(1.05)';
        });
        img.addEventListener('mouseout', function() {
            img.style.transform = 'scale(1)';
        });
    });


});