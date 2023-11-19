<script lang="ts">
  let count = 0

  function add() {
    count += 1
  }

  function subtract() {
    count -= 1
  }
</script>

<div>
  <div class="counter">
    <button on:click={subtract}>
      -
    </button>
  
    <span>
      {count}
    </span>
  
    <button on:click={add}>
      +
    </button>
  </div>
  
  <div class="counter-message">
    <slot />
  </div>
</div>
