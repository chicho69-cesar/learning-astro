import { loginUser, logout, registerUser } from './auth';
import { getProductsByPage } from './products/get-products-by-page.action';
import { getProductBySlug } from './products/get-product-by-slug.action';

export const server = {
  // actions

  // Auth
  loginUser,
  logout,
  registerUser,

  // Products
  getProductsByPage, 
  getProductBySlug,
};
