
const db = require('../config/database');
const produtoRepository = require('../repository/produto.repository');

// ==> Método responsável por criar um novo 'Product':
exports.createProduct = async (req, res) => {
  const { productname, quantity, price } = req.body;
  console.log(req.body);

  await produtoRepository.createProduct(productname, quantity, price);

  res.status(201).send({
    message: 'Product added successfully!',
    body: {
      product: { productname, quantity, price },
    },
  });
};

// ==> Método responsável por listar todos os 'Products':
exports.listAllProducts = async (req, res) => {
  const response = await produtoRepository.listAllProducts();
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Product' pelo 'Id':
exports.findProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  const response = await produtoRepository.findProductById(productId);
  res.status(200).send(response.rows);
};

// ==> Método responsável por atualizar um 'Product' pelo 'Id':
exports.updateProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  const { productname, quantity, price } = req.body;

  const response = await produtoRepository.updateProductById(productname, quantity, price, productId);

  res.status(200).send({ message: 'Product Updated Successfully!' });
};

// ==> Método responsável por excluir um 'Product' pelo 'Id':
exports.deleteProductById = async (req, res) => {
  const productId = parseInt(req.params.id);
  produtoRepository.deleteProductById(productId);

  res.status(200).send({ message: 'Product deleted successfully!', productId });
};