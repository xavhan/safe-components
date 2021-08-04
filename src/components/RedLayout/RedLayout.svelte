<script>
  export let title = 'default title';
</script>

<div class="red">
  <h1>{title}</h1>
  <slot />
</div>

<style>
  .red {
    border: 1px solid red;
    padding: 10px;
  }
</style>
