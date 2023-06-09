/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
 */

const emojis = {
  '-': ' ',
  O: '🪦',
  X: '🧱',
  I: '🧠',
  PLAYER: '🧟‍♀️',
  BOMB_COLLISION: '💥',
  GAME_OVER: '👎',
  WIN: '🏆',
  HEART: '💛',
};

const maps = [];
maps.push(`
  IXXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  OXXXXXXXXX
`);
maps.push(`
  O--XXXXXXX
  X--XXXXXXX
  XX----XXXX
  X--XX-XXXX
  X-XXX--XXX
  X-XXXX-XXX
  XX--XX--XX
  XX--XXX-XX
  XXXX---IXX
  XXXXXXXXXX
  `);
maps.push(`
  I-----XXXX
  XXXXX-XXXX
  XX----XXXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----OXX
  XXXXXXXXXX
`);
maps.push(`
  O--------X
  XXXXXXXX-X
  X--------X
  X-XXXXXXXX
  X-X---XXXX
  X---X--XXX
  XXXXXX-XXX
  XXXXXX---X
  XXI--XXX-X
  XXXX-----X
`);
maps.push(`
  XXX---XXXX
  XX--X----X
  XX-XXX-X-X
  XX---XXX-X
  XXXX-XXX-X
  XXX---XX-X
  X---XXXX-X
  XIXXXXXX-X
  XXOX---X-X
  XX---X---X
`);
