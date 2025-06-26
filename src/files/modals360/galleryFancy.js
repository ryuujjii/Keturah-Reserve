
const matches1 = window.matchMedia("(max-width:479.98px)").matches;
var preconnectLink = document.createElement("link");
preconnectLink.rel = "preconnect";
preconnectLink.href = "https://fonts.gstatic.com";
preconnectLink.crossOrigin = true;
const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Montserrat&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(preconnectLink);
document.head.appendChild(fontLink);


try {
  const parentWindow1 = window.parent;
  const elementToHide1 = parentWindow1.document.querySelector(".hide-fancy");
  const closeModal3601 =
    parentWindow1.document.querySelectorAll(".close-modal360");
  const galleryShadow1 =
    parentWindow1.document.querySelector(".gallery__shadow ");


  Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options
    trapFocus: false,
    on: {
      initLayout: () => {
        const parentBlock = document.querySelector(".fancybox__footer");
        const newDiv = getCopyRightForMedia(false);
        parentBlock.appendChild(newDiv);
        // parentBlock.appendChild(style);
      },
      close: () => {
        document
          .querySelector(".gallery360__wrapper")
          .classList.contains("hide")
          ? document
            .querySelector(".gallery360__wrapper")
            .classList.remove("hide")
          : null;
        elementToHide1.classList.contains("hide")
          ? elementToHide1.classList.remove("hide")
          : null;
        closeModal3601.forEach((item) => {
          item.classList.contains("none")
            ? item.classList.remove("none")
            : null;
        });
        closeModal3601.forEach((item) => {
          item.classList.contains("hide-hard")
            ? item.classList.remove("hide-hard")
            : null;
        });
        galleryShadow1.classList.remove("show");
      },
    },
  });
} catch (error) {
  console.log('without fancy box');
}


document.head.appendChild(getCopyRightStylesForMedia());

try {
  viewer.addEventListener('ready', (e) => {
    const photoSphereBar = document.querySelector('.psv-navbar.psv--capture-event.psv-navbar--open');
    const galleryBody = document.querySelector('.gallery360__body');
    let shouldBeLower = false;
    if (galleryBody) {
      const isDisplayNone = window.getComputedStyle(galleryBody).display === 'none';
      shouldBeLower = window.matchMedia('(max-width:991.98px)').matches && isDisplayNone;
    } else {
      shouldBeLower = window.matchMedia('(max-width:991.98px)').matches;
    }
    const newDiv = getCopyRightForMedia(true);
    shouldBeLower ? newDiv.classList.add('shouldBeLower') : null;
    photoSphereBar.appendChild(newDiv);
  }, { once: true });


  viewer.addEventListener('fullscreen', ({ data }) => {
    document.documentElement.classList.toggle('fullscreen-enabled');
  });

} catch (error) {
  console.log('viewer is not found. check script tag below');
}

function getCopyRightForMedia(isNewline) {
  const isRU = window.location.href.endsWith('/ru') ||
    window.location.href.includes('/ru/');
  const newDiv = document.createElement("div");
  const currentYear = new Date().getFullYear();
  newDiv.className = "copiryit-text";
  if (!isRU) {
    newDiv.innerHTML += `© ${currentYear} All rights reserved. ${matches1 && isNewline ? '<br/>' : ''}No commercial reuse without permission.`;
  } else {
    newDiv.classList.add('_ru');
    newDiv.innerHTML += `© ${currentYear}. Все права защищены. ${matches1 ? '<br/>' : ''} Коммерческое использование запрещено.`;
  }
  return newDiv;
}

function getCopyRightStylesForMedia() {
  const style = document.createElement("style");
  style.innerText = `
  .copiryit-text{
      position: absolute;
      z-index:100;
      top: -70px;
      left: 50%;
      transform: translateX(-50%);
      max-width: 500px;
      width: 100%;
      color: #FFF;
      text-align: center;
      font-family: Montserrat;
      font-size: ${!matches1 ? 12 : 10}px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      pointer-events: none;
      transition: top 0.3s ease;
    }
    .without-gallery .copiryit-text{
      top: -20px;
    }
    .copiryit-text._ru{
      max-width: 500px;
    }
    .fullscreen-enabled .copiryit-text, .hide .copiryit-text{
      top: -20px;
    }
    .with-fancybox .fancybox__footer .copiryit-text{
      top: -20px;
    }
    .shouldBeLower.copiryit-text{
      top: -30px;
    }
    .hide .copiryit-text{
      top: 5px;
      transition-delay: 0.2s;
    }
    @media (max-width: 479.98px) {
      .copiryit-text{
        top: -90px;
      }
      .with-fancybox .fancybox__footer .copiryit-text._ru{
        top: -30px;
      }
      .without-gallery .copiryit-text{
        top: -30px;
      }
    }
      `;
  return style;
}