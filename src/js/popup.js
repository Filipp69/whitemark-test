//popup
const elements = document.querySelectorAll(".render-svg__group");
const popup = document.querySelector(".popup-outer");

// Добавляем обработчик события для каждого элемента
elements.forEach((element) => {
  // добавляем класс --active при наведении
  element.addEventListener("mouseenter", (e) => {
    popup.classList.add("popup-outer--active");
    updatePopupPosition(e);
  });

  // движение попапа за курсором
  element.addEventListener("mousemove", (e) => {
    updatePopupPosition(e);
  });

  element.addEventListener("mouseleave", () => {
    popup.classList.remove("popup-outer--active");
  });
});

// настраиваем движение попапа за курсором
function updatePopupPosition(event) {
  const popupWidth = popup.clientWidth;

  //расположение попапа относительно курсора
  const xOffset = 50;
  const yOffset = -180;

  const pageX = event.pageX;
  const pageY = event.pageY;

  const popupX = pageX + xOffset;
  const popupY = pageY + yOffset;

  popup.style.left = popupX + "px";
  popup.style.top = popupY + "px";
}
