<script>
// @ts-nocheck

	import { addToast } from '$lib/components/toast/store';
	import Toasts from '$lib/components/toast/Toasts.svelte';

	let title = 'Social-Login';
	let message = 'Successfully message.';
	let types = ['success', 'error', 'warning', 'info'];
	let placements = [
		'topStart',
		'topCenter',
		'topEnd',
		'bottomStart',
		'bottomCenter',
		'bottomEnd',
		'middleStart',
		'middleCenter',
		'middleEnd'
	];
	let placement = 'topEnd';
	let type = 'success';
	let dismissible = true;
	let timeout = 3000;
</script>

<Toasts placement={placement}/>

<form on:submit|preventDefault>
	<p>
		<label>
			Title:
			<input class="input input-bordered input-primary w-full max-w-xs input-sm" bind:value={title} />
		</label>
	</p>
	<p>
		<label>
			Message:
			<input class="input input-bordered input-primary w-full max-w-xs input-sm" bind:value={message} />
		</label>
	</p>
	<p>
		<label>
			Timeout:
			<input
				class="input input-bordered input-primary w-full max-w-xs input-sm"
				bind:value={timeout}
				type="number"
			/>
		</label>
	</p>
	<p>
		<label>
			Placement:
			<select class="select select-accent w-full max-w-xs select-sm" bind:value={placement}>
				{#each placements as placement}
					<option value={placement}>{placement}</option>
				{/each}
			</select>
		</label>
	</p>
	<p>
		<label>
			Type:
			<select class="select select-accent w-full max-w-xs select-sm" bind:value={type}>
				{#each types as type}
					<option value={type}>{type}</option>
				{/each}
			</select>
		</label>
	</p>
	<p>
		<label>
			<input class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" bind:checked={dismissible} type="checkbox" />
			Dismissible?
		</label>
	</p>
	<button class=" btn" on:click={() => addToast({ title, message, type, dismissible, timeout })}>
		Add toast
	</button>
</form>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	form {
		border: 0 none;
		margin-top: 55rem;
		text-align: center;
	}
</style>
