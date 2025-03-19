import express from 'express';
import updateUser, { deleteUser, getUser, getUsers } from '../controller/user.controller.js';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controller/product.controller.js';
import { createSellProduct, deleteSellProduct, getSellProduct, getSellProducts, updateSellProduct } from '../controller/sell.controller.js';
import { Login, register } from '../controller/auth.controller.js';

const route = express.Router();

///Login
route.post("/login", Login);

//userall
route.get('/get-users', getUsers);

//user one
route.get('/get-user/:id', getUser);

route.post('/register/user', register);
route.put('/update/user/:id', updateUser);
route.delete("/delete-user", deleteUser);


///products
route.get('/get-products', getProducts);
route.get('/get-product/:id', getProduct);
route.post('/create/product', createProduct);
route.put('/update/product/:id', updateProduct);
route.delete("/delete-product/:id", deleteProduct);

///Sell products
route.get('/get-sell/products', getSellProducts);
route.get('/get-sell/product/:id', getSellProduct);
route.post('/create-sell/product', createSellProduct);
route.put('/update-sell/product/:id', updateSellProduct);
route.delete("/delete-sell/product/:id", deleteSellProduct);

///upload file
// route.post('/upload/file', uploadeFile);

export default route;