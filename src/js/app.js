export default function orderByProps(obj, sortOrder) {
  const sorted = sortOrder.map((key) => ({ key, value: obj[key] }));
  const unsortedKeys = [];
  for (const key in obj) {
    if (!(sortOrder.includes(key))) {
      unsortedKeys.push(key);
    }
  }
  unsortedKeys.sort();
  return [...sorted, ...unsortedKeys.map((key) => ({ key, value: obj[key] }))];
}
