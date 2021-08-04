<script>
  import {onMount} from 'svelte';
  import {writable} from "svelte/store";

  import './registration'
  import Safe from './Safe.svelte';
  import {getEngineResponse} from './domain/engine/api';

  let i = 0
  let n = 0

  const props = [1, 2, null];
  const engineResponse = writable({});

  const changeVal = () => {
    n = props[i++ % props.length]
  }

  onMount(async () => {
    engineResponse.set(await getEngineResponse());
  })

</script>

<style>
    .app, .fixed-container {
        display: flex;
        flex-direction: column;

        gap: 1em;

        padding: 2rem;
    }

    .fixed-container {
        border-top: 2px #333333 solid;
    }
</style>

<div class="app">
    {#if $engineResponse.type}
        <Safe engineId={$engineResponse.type} data={$engineResponse.data} items={$engineResponse.items}/>
    {/if}
    <div class="fixed-container">
        <Safe engineId="fixed" data={ { nested: { num: n } } }/>
        <span>roll between values to insert on that would break the app (1,2,null)</span>
        <button on:click={changeVal}>next value</button>
    </div>
</div>
