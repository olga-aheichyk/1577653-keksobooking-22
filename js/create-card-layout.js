const ApartmentTypes = {
  PALACE: 'Дворец',
  FLAT: 'Квартира',
  HOUSE: 'Дом',
  BUNGALOW: 'Бунгало',
}

const isVoidElement = function (element) {
  return element.length === 0 || element.src === null
}

/**
 * Функция создания DOM-элемента тестовой карточки объявления из объекта
 * @param {object} — объект тестовой карточки объявления
 * @return {object} — DOM-элемент тестовой карточки объявления
 */
const createCardLayout = function({author, offer, location}) {
  const cardTemplate = document.querySelector('#card').content;
  const cardTemplateArticle = cardTemplate.querySelector('article');

  const cardArticle = cardTemplateArticle.cloneNode(true);

  // доделать remove при пустых значениях поля
  const articleAvatar = cardArticle.querySelector('.popup__avatar');

  if (isVoidElement(articleAvatar)) {
    articleAvatar.remove();
  }
  else {
    articleAvatar.src = author.avatar;
  }

  const articleTitle=cardArticle.querySelector('.popup__title');

  if (isVoidElement(articleTitle)) {
    articleTitle.remove();
  }
  else {
    articleTitle.textContent = offer.title;
  }

  cardArticle.querySelector('.popup__text--address').textContent = `Координаты: ${location.lat}, ${location.lng}`;
  cardArticle.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardArticle.querySelector('.popup__type').textContent = ApartmentTypes[offer.type.toUpperCase()];
  cardArticle.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей.`;
  cardArticle.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}.`;

  const articleDescription = cardArticle.querySelector('.popup__description');

  if (isVoidElement(articleDescription)) {
    articleDescription.remove();
  }
  else {
    articleDescription.textContent = offer.description;
  }

  const articleFeatures = cardArticle.querySelector('.popup__features');

  if (isVoidElement(articleFeatures)) {
    articleFeatures.remove();
  }
  else {
    articleFeatures.textContent = '';

    let featuresHtmlLayout = offer.features
      .map(item => `<li class="popup__feature popup__feature--${item}"></li>`)
      .join('\n');
    articleFeatures.innerHTML = featuresHtmlLayout;


    // Пыталась сделать без innerHTML, но так не работает.
    // В чём здесь ошибка:

    // offer.features.map((item) => {
    //     const liElement = document.createElement('li');
    //     const classOfLi = `popup__feature popup__feature--${item}`
    //     liElement.classList.add(classOfLi);
    //     return liElement;
    //   })
    //   .forEach((liElement) => {
    //     articleFeatures.appendChild(liElement)
    //   })
  }

  const articlePhotos = cardArticle.querySelector('.popup__photos');

  if (offer.photos.length === 0) {
    articlePhotos.remove();
  }
  else {
    const articlePhoto = cardArticle.querySelector('.popup__photo');
    articlePhoto.src = offer.photos[0];

    if (offer.photos.length > 1) {
      for (let i = 1; i < offer.photos.length; i++) {
        const nextArticlePhoto = articlePhoto.cloneNode(true);
        nextArticlePhoto.src = offer.photos[i];
        articlePhotos.appendChild(nextArticlePhoto);
      }
    }
  }

  return cardArticle;
}

export { createCardLayout }
