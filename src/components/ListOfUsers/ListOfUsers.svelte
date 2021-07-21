<script>
  export let users;
</script>

<!-- (no checks on users being an array because its forced by the schema) -->
<div>List of users:</div>
<ul>
  {#each users as user}
    <li>
      [{user.id}] {user.name} {#if user.email}({user.email}){/if}
    </li>
  {/each}
</ul>
