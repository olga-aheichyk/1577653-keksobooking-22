import {CARDS_COUNT, makeCards} from './make-cards.js';
const mocks = makeCards(CARDS_COUNT);
//console.log(mocks);

const mapCanvas = document.querySelector('.map__canvas');




const createCardLayout = function(object) {
  const cardTemplate = document.querySelector('#card').content;
  const cardTemplateArticle = cardTemplate.querySelector('article');

  const cardArticle = cardTemplateArticle.cloneNode(true);
  const articleTitle = cardArticle.querySelector('.popup__title');
  const articleAddress = cardArticle.querySelector('.popup__text--address');
  const articlePrice = cardArticle.querySelector('.popup__text--price');
  const articleType = cardArticle.querySelector('.popup__type');
  const articleText = cardArticle.querySelector('.popup__text--capacity');
  const articleTime = cardArticle.querySelector('.popup__text--time');
  const articleFeatures = cardArticle.querySelector('.popup__features');
  const articleDescription = cardArticle.querySelector('.popup__description');
  const articlePhotos = cardArticle.querySelector('.popup__photos');
  const articlePhoto = cardArticle.querySelector('.popup__photo');
  const articleAvatar = cardArticle.querySelector('.popup__avatar');

  articleTitle.textContent = object.offer.title;
  articleAddress.textContent = object.offer.address;
  articlePrice.textContent = `${object.offer.price} ₽/ночь`

  let typeName;
  switch (object.offer.type) {
    case 'flat' : typeName = 'Квартира';
      break;

    case 'bungalow' : typeName = 'Бунгало';
      break;

    case 'house' : typeName = 'Дом';
      break;

    case 'palace' : typeName = 'Дворец';
      break;
  }

  articleType.textContent = typeName;
  articleText.textContent = `${object.offer.rooms} комнаты для ${object.offer.guests} гостей.`;
  articleTime.textContent = `Заезд после ${object.offer.checkin}, выезд до ${object.offer.checkout}.`;
  articleFeatures.textContent = `${object.offer.features}`;
  articleDescription.textContent = `${object.offer.description}`;
  articlePhoto.src = object.offer.photos[0];

  if (object.offer.photos.length > 1) {
    for (let i = 1; i < object.offer.photos.length; i++) {
      const nextArticlePhoto = articlePhoto.cloneNode(true);
      nextArticlePhoto.src = object.offer.photos[i];
      articlePhotos.appendChild(nextArticlePhoto);
    }
  }

  articleAvatar.src = object.avatar;

  return cardArticle;

}

const mock = createCardLayout(mocks[0]);


mapCanvas.appendChild(mock);
