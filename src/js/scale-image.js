function scaleImagesToWindow() {
    const container = document.querySelector('.render-container');
    const imageWrapper = document.querySelector('.image-wrapper');
    const svgWrapper = document.querySelector('.svg-wrapper');
  
    const containerAspectRatio = container.clientWidth / container.clientHeight;
  
    // Масштабируем изображение
    const image = imageWrapper.querySelector('img');
    const imageAspectRatio = image.naturalWidth / image.naturalHeight;
  
    // Масштабируем SVG
    const svg = svgWrapper.querySelector('svg');
    const svgAspectRatio = svg.viewBox.baseVal.width / svg.viewBox.baseVal.height;
  
    if (containerAspectRatio > imageAspectRatio) {
        image.style.width = '100%';
        image.style.height = 'auto';
    } else {
        image.style.width = 'auto';
        image.style.height = '100%';
    }
  
    if (containerAspectRatio > svgAspectRatio) {
        svg.style.width = '100%';
        svg.style.height = 'auto';
    } else {
        svg.style.width = 'auto';
        svg.style.height = '100%';
    }
  
    // Вычисляем смещение, чтобы центрировать изображение и SVG
    const xOffset = (container.clientWidth - image.clientWidth) / 2;
    const yOffset = (container.clientHeight - image.clientHeight) / 2;
  
    image.style.left = xOffset + 'px';
    image.style.top = yOffset + 'px';
  
    svg.style.left = xOffset + 'px';
    svg.style.top = yOffset + 'px';
  }
  
  // Вызываем функцию при загрузке и изменении размеров окна
  window.addEventListener('load', scaleImagesToWindow);
  window.addEventListener('resize', scaleImagesToWindow);