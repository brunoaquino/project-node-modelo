const db = require('../config/database');

exports.createProduct = async (productname, quantity, price) => {
    return await db.query(
        'INSERT INTO products (productname, quantity, price) VALUES ($1, $2, $3)',
        [productname, quantity, price],
      );
};

exports.listAllProducts = async () => {
  return await db.query(
    'SELECT * FROM products ORDER BY productname ASC',
  );
};

exports.findProductById = async (productId) => {
  return await db.query(
    'SELECT * FROM products WHERE productid = $1',
    [productId],
  );
};


exports.updateProductById = async (productname, quantity, price, productId) => {
  return await db.query(
    'UPDATE products SET productname = $1, quantity = $2, price = $3 WHERE productId = $4',
    [productname, quantity, price, productId],
  );
};

exports.deleteProductById = async (productId) => {
  return await db.query('DELETE FROM products WHERE productId = $1', [
    productId,
  ]);
};