<script>
  import {get} from './registry';
  export let engineId;
  export let data;
  const { ok, valid, component, properties, errors } = get(engineId, data)
</script>

{#if ok}
  {#if valid}
    <svelte:component this={component} {...properties} />
  {:else}
    <div class="error">Something is wrong with the data for <strong>{engineId}</strong>, please ensure it matches its associated schema</div>
    <!-- <details> -->
      <!-- <summary>Errors</summary> -->
      <pre>{JSON.stringify(errors, null, 2)}</pre>
    <!-- </details> -->
  {/if}
{:else}
  <div class="error"><strong>{engineId}</strong> is not registered, please ensure that it is in the bootstrap file</div>
{/if}

<style>
  .error {
    color: red;
  }
</style>