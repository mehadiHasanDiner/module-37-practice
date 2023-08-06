const first = { a: 1, b: 2, c: 3, d: 4 };
const second = { a: 1, b: 2, c: 3, d: 4 };

function compareObject(first, second) {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
  if (firstKeys.length === secondKeys.length) {
    for (const keys of firstKeys) {
      if (first[keys] !== second[keys]) {
        return false;
      }
    }
  }
  return true;
}

const result = compareObject(first, second);
console.log(result);
