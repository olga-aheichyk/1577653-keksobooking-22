/**
 * Функция создания DOM-элемента тестовой карточки объявления из объекта
 * @param {object} — объект тестовой карточки объявления
 * @return {object} — DOM-элемент тестовой карточки объявления
 */
const createCardLayout = function(object) {
  const cardTemplate = document.querySelector('#card').content;
  const cardTemplateArticle = cardTemplate.querySelector('article');

  const cardArticle = cardTemplateArticle.cloneNode(true);

  cardArticle.querySelector('.popup__avatar').src = object.avatar;
  cardArticle.querySelector('.popup__title').textContent = object.offer.title;
  cardArticle.querySelector('.popup__text--address').textContent = object.offer.address;
  cardArticle.querySelector('.popup__text--price').textContent = `${object.offer.price} ₽/ночь`;
  cardArticle.querySelector('.popup__type').textContent = Object.values(object.offer.type);
  cardArticle.querySelector('.popup__text--capacity').textContent = `${object.offer.rooms} комнаты для ${object.offer.guests} гостей.`;
  cardArticle.querySelector('.popup__text--time').textContent = `Заезд после ${object.offer.checkin}, выезд до ${object.offer.checkout}.`;
  cardArticle.querySelector('.popup__description').textContent = object.offer.description;

  const articleFeatures = cardArticle.querySelector('.popup__features');

  if (object.offer.features.length === 0) {
    articleFeatures.remove();
  }
  else {
    articleFeatures.textContent = '';
    let featuresHtmlLayout = object.offer.features
      .map(item => `<li class="popup__feature popup__feature--${item}"></li>`)
      .join('\n');
    articleFeatures.innerHTML = featuresHtmlLayout;
  }

  const articlePhotos = cardArticle.querySelector('.popup__photos');

  if (object.offer.photos.length === 0) {
    articlePhotos.remove();
  }
  else {
    const articlePhoto = cardArticle.querySelector('.popup__photo');
    articlePhoto.src = object.offer.photos[0];

    if (object.offer.photos.length > 1) {
      for (let i = 1; i < object.offer.photos.length; i++) {
        const nextArticlePhoto = articlePhoto.cloneNode(true);
        nextArticlePhoto.src = object.offer.photos[i];
        articlePhotos.appendChild(nextArticlePhoto);
      }
    }
  }

  return cardArticle;
}

export {createCardLayout};

