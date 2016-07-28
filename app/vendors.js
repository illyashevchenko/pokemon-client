const deps = [
];

const depsFull = [
  'babel-polyfill',
];

module.exports = deps.map(dep => dep.split('/')[0]).concat(depsFull);
