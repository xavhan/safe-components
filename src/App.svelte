<script>
  import './registration'
  import Safe from './Safe.svelte';
  import Spacer from './Spacer.svelte';

  const responseFromEngine = [
    { type: 'hello', data: { foo: 123 } }, // bad
    { type: 'hello', data: { foo: 123, bar: '456' } }, // ok
    { type: 'userlisting', data: { users: 'bad' } }, // bad (would break the app)
    { type: 'userlisting', data: { users: [
      { id: '1', name: 'Xavier' },
      { id: '2', name: 'Bertrand', email: 'example@ex.org' }
    ] } }, // ok
  ]
</script>

{#each responseFromEngine as engineResolvedComponent}
  <Safe engineId={engineResolvedComponent.type} data={engineResolvedComponent.data} />
  <Spacer/>
{/each}
