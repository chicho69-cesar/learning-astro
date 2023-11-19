<script>
  import {
    cart,
    decreaseQuantity,
    increaseQuantity,
    isCartOpen,
    removeProduct,
  } from "../../store";
</script>

<div
  class={`${
    $isCartOpen ? "fixed" : "hidden"
  } top-0 bottom-0 left-0 right-0 z-10 flex flex-row items-start justify-between transition-all`}
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    on:click={() => isCartOpen.set(false)}
    class="flex-1 h-screen bg-gray-500 opacity-50"
  />

  <aside class="w-1/4 p-2 h-screen bg-white shadow-lg opacity-100">
    <h3 class="mb-1 text-lg font-medium text-slate-900">
      Productos del carrito
    </h3>

    <h4 class="mb-4 text-4xl text-slate-700 font-thin">
      Total: ${Object.values($cart).reduce(
        (acc, el) => acc + el.product.price * el.quantity,
        0
      )}
    </h4>

    <section class="bg-gray-50 p-1 rounded-sm shadow-sm">
      {#each Object.values($cart) as cartItem}
        <article class="mb-2 flex flex-row justify-start items-center gap-2">
          <figure>
            <img
              src={cartItem.product.image}
              alt={cartItem.product.title}
              class="w-24 aspect-[9/12] object-cover object-center"
            />
          </figure>

          <section class="flex-1">
            <h2 class="mb-2 font-medium">
              {cartItem.product.title.length > 50
                ? cartItem.product.title.slice(0, 50) + "..."
                : cartItem.product.title}
            </h2>

            <div class="flex flex-row justify-between items-center gap-2">
              <div class="flex justify-start items-center gap-2">
                <button
                  on:click={() => decreaseQuantity(cartItem.product.id)}
                  class="py-0.5 px-3 shadow bg-slate-700 text-white font-bold rounded-md text-xl"
                >
                  -
                </button>

                <span class="text-slate-900 text-xl">
                  {cartItem.quantity}
                </span>

                <button
                  on:click={() => increaseQuantity(cartItem.product.id)}
                  class="py-0.5 px-3 shadow bg-slate-700 text-white font-bold rounded-md text-xl"
                >
                  +
                </button>
              </div>

              <button
                on:click={() => removeProduct(cartItem.product.id)}
                class="text-red-600 font-semibold"
              >
                Eliminar
              </button>
            </div>

            <p class="mt-2 text-gray-600 font-normal">
              ${cartItem.product.price} -
              <span class="text-xl font-medium text-slate-800">
                ${cartItem.quantity * cartItem.product.price}
              </span>
            </p>
          </section>
        </article>
      {:else}
        <h2>No hay productos en el carrito</h2>
      {/each}
    </section>
  </aside>
</div>
