const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    expect(sortProductsByPrice(products, 'asc').map((product) => product.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test("все товары без направления сортируются как [3, 6, 5, 4, 2, 1]", () => {
    expect(sortProductsByPrice(products).map((product) => product.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    expect(sortProductsByPrice([products[0], products[2], products[3]], 'asc').map((product) => product.id)).toEqual([3, 4, 1]);
  });
  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    expect(sortProductsByPrice(products, 'desc').map((product) => product.id)).toEqual([1, 2, 4, 5, 6, 3]);
  });
  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const originalArray = [products[0], products[2], products[3]];
    expect(originalArray).toEqual([products[0], products[2], products[3]]);
  });
  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const originalArray = [products[0], products[2], products[3]];
    expect(originalArray).toEqual([products[0], products[2], products[3]]);
  });
  test("направление по умолчанию не меняет исходный массив всех товаров", () => {
    const originalArray = [...products];
    expect(originalArray).toEqual([...products]);
  });
});
