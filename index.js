// Import stylesheets
import './style.scss';

const chunkify = (array, size) => {
  const map = Array(size).fill([]);
  return array.reduce((acc, curr, i) => {
    const chunkIndex = i % size;
    acc[chunkIndex] = [...acc[chunkIndex], curr];
    return acc;
  }, map);
};

const chunks = chunkify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 2);

console.log({ chunks });
