<script lang="ts">
  import type { Product } from "../../types/types.d"
  import { isCartOpen, addProduct } from "../../store"
  
  export let product: Product
</script>

<button
  on:click={() => {
    isCartOpen.set(true)
    addProduct(product)
  }}
  class="py-1 px-3 bg-slate-700 text-white font-medium text-center rounded-md shadow hover:shadow-none hover:-translate-y-[0.125rem] transition"
>
  Agregar
</button>
