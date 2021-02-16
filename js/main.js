import {CARDS_COUNT, makeCards} from './make-cards.js';
import {createCardLayout} from './create-card-layout.js';

const mapCanvas = document.querySelector('.map__canvas');

const mockObjects = makeCards(CARDS_COUNT);

const mockCard = createCardLayout(mockObjects[0]);

mapCanvas.appendChild(mockCard);




