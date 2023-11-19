import { atom, map } from 'nanostores'
import type { Cart, Product } from '../types/types.d'

export const isCartOpen = atom(false)
export const cart = map<Record<number, Cart>>({})

export function addProduct(product: Product) {
  const existsProduct = cart.get()[product.id]

  if (existsProduct) {
    cart.setKey(product.id, {
      ...existsProduct,
      quantity: existsProduct.quantity + 1,
    })
  } else {
    cart.setKey(product.id, {
      product,
      quantity: 1,
    })
  }
}

export function removeProduct(id: number) {
  const existsProduct = cart.get()[id]

  if (existsProduct) {
    const entries = Object.entries(cart.get())
    cart.set({})

    entries.map((entry) => {
      const [key, product] = entry
      if (Number(key) === id) return
      cart.setKey(Number(key), product)
    })
  }
}

export function increaseQuantity(id: number) {
  const existsProduct = cart.get()[id]

  if (existsProduct) {
    cart.setKey(id, {
      ...existsProduct,
      quantity: existsProduct.quantity + 1,
    })
  }
}

export function decreaseQuantity(id: number) {
  const existsProduct = cart.get()[id]

  if (existsProduct) {
    if (existsProduct.quantity >= 1) {
      cart.setKey(id, {
        ...existsProduct,
        quantity: existsProduct.quantity - 1,
      })
    }
  }
}
