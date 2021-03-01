import {CARDS_COUNT, makeCards} from './make-cards.js';
import {map} from './map.js';
import {renderPins} from './pins.js';
import './form.js'

const mockObjects = makeCards(CARDS_COUNT);
renderPins(map, mockObjects);
