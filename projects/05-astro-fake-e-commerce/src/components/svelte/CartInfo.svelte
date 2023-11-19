<script>
  import { cart } from '../../store'
</script>

<button class="bg-slate-600 py-2 px-6 rounded-full font-bold text-white text-lg">
  Carrito - {Object.values($cart).length}
</button>
