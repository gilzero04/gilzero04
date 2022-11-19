<script lang="ts">
      import {page} from '$app/stores';
</script>

<div class="text-sm breadcrumbs ml-3 mr-3 text-slate-300">
    <ul>
      <!-- svelte-ignore a11y-missing-attribute -->
      <li><a href="/">Dashboard</a></li> 
      <li>{$page.routeId?.substr(1,$page.routeId.length-1).replace(/\w/, c => c.toUpperCase())}</li> 
    </ul>
</div>