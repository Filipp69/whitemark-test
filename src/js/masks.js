// подсветка блока при наведении на кнопку
const buttons = document.querySelectorAll('.button-list__item');
const highlightMasks = document.querySelectorAll('.render-svg__group');

// Добавляем обработчик события для каждого элемента
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');

    // Удаляем класс --active со всех других элементов
    highlightMasks.forEach(highlightMask => {
      if (highlightMask !== button) {
        highlightMask.classList.remove('render-svg__group--active');
      }
    });

    // Добавляем класс --active для соответствующего кнопке элемента
    const highlightMask = document.querySelector(`.render-svg__group[data-target="${target}"]`);
    highlightMask.classList.toggle('render-svg__group--active');
  });
});