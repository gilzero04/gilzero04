<script lang="ts">
	import Toast from './Toast.svelte';

	import { dismissToast, toasts } from './store';
    export let placement : 'topStart' | 'topCenter' | 'topEnd' | 'bottomStart' | 'bottomCenter' | 'bottomEnd' | 'middleStart' | 'middleCenter' | 'middleEnd' = 'topEnd';
</script>

{#if $toasts}
	<div class="toast z-50 absolute"
        class:toast-top={placement === 'topEnd' || placement === 'topCenter' || placement === 'topStart'}
        class:toast-bottom={placement === 'bottomEnd' || placement === 'bottomCenter' || placement === 'bottomStart'}
        class:toast-middle={placement === 'middleEnd' || placement === 'middleCenter' || placement === 'middleStart'}
        class:toast-start={placement === 'topStart' || placement === 'bottomStart' || placement === 'middleStart'}
        class:toast-center={placement === 'topCenter' || placement === 'bottomCenter' || placement === 'middleCenter'}
        class:toast-end={placement === 'topEnd' || placement === 'bottomEnd' || placement === 'middleEnd'}
    >
		{#each $toasts as toast (toast.id)}
			<Toast
                type={toast.type}
				title={toast.title}
				dismissible={toast.dismissible}
				on:dismiss={() => dismissToast(toast.id)}>{toast.message}</Toast
			>
		{/each}
	</div>
{/if}
