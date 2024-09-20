// export function moveCarousel() {
//   const carousel = document.querySelector(".carousel");
//   let items = document.querySelectorAll(".carousel-item");

//   items.forEach((item) => {
//     const clone = item.cloneNode(true);
//     carousel.appendChild(clone);
//   });

//   let offset = 0;

//   function animate() {
//     offset -= 1;

//     if (Math.abs(offset) >= items[0].offsetWidth + 10) {
//       offset = 0;
//       const firstItem = carousel.firstElementChild;
//       carousel.appendChild(firstItem);
//     }

//     carousel.style.transform = `translateX(${offset}px)`;
//     requestAnimationFrame(animate);
//   }

//   animate();
// }

export function moveCarousel() {
  const carousel = document.querySelector(".carousel");
  const items = Array.from(document.querySelectorAll(".carousel-item"));
  let itemWidth = items[0].offsetWidth; // Ширина элемента
  let currentIndex = 0;

  // Обновляем ширину элемента при изменении размера окна
  window.addEventListener("resize", () => {
    itemWidth = items[0].offsetWidth;
  });

  // Функция для перемещения карусели
  function animate() {
    carousel.style.transition = "transform 0.5s ease"; // Плавная анимация
    carousel.style.transform = `translateX(${-itemWidth}px)`; // Сдвиг влево на ширину одного элемента

    // После завершения анимации перемещаем первый элемент в конец
    setTimeout(() => {
      carousel.style.transition = "none"; // Убираем анимацию для мгновенного перехода
      const firstItem = items.shift(); // Убираем первый элемент из массива
      carousel.appendChild(firstItem); // Перемещаем его в конец карусели
      carousel.style.transform = "translateX(0)"; // Сбрасываем положение
      items.push(firstItem); // Обновляем массив
    }, 500); // 500 мс — время анимации
  }

  // Запускаем анимацию каждые 2 секунды
  setInterval(animate, 2000);
}
