<script>
  import { cart, isCartOpen } from "../../store";
</script>

<button
  on:click={() => isCartOpen.set(!$isCartOpen)}
  class="px-6 py-2 text-lg font-bold text-white rounded-full bg-slate-600"
>
  Carrito - {Object.values($cart).length}
</button>
