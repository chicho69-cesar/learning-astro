<script>
  import { isCartOpen } from "../../store";
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

  <aside class="w-1/4 h-screen bg-white shadow-lg opacity-100">
    <ul>
      <li>
        <h1>Holis</h1>
      </li>
    </ul>
  </aside>
</div>
