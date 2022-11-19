<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import InfoIcon from './InfoIcon.svelte';
	import SuccessIcon from './SuccessIcon.svelte';
	import ErrorIcon from './ErrorIcon.svelte';
	import WarningIcon from './WarningIcon.svelte';
	import CloseIcon from './CloseIcon.svelte';

	const dispatch = createEventDispatcher();

	export let type: 'info' | 'success' | 'error' | 'warning' = 'info';
	export let title: string;
	export let dismissible: boolean = true;
	export let opentime: boolean = true;
</script>

<div
	class="alert rounded-md border-2  m-0 p-0"
	class:alert-info={type === 'info'}
	class:alert-success={type === 'success'}
	class:alert-error={type === 'error'}
	class:alert-warning={type === 'warning'}
	class:border-blue-200={type === 'info'}
	class:border-green-200={type === 'success'}
	class:border-red-200={type === 'error'}
	class:border-yellow-200={type === 'warning'}
>
	<div
		class=" shadow-lg mx-auto w-[282px] max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block"
		class:bg-blue-500={type === 'info'}
		class:bg-green-500={type === 'success'}
		class:bg-red-500={type === 'error'}
		class:bg-yellow-500={type === 'warning'}
	>
		<div
			class="flex justify-between items-center py-1 px-2 bg-clip-padding border-b rounded-t-lg"
			class:bg-blue-500={type === 'info'}
			class:bg-green-500={type === 'success'}
			class:bg-red-500={type === 'error'}
			class:bg-yellow-500={type === 'warning'}
			class:border-blue-500={type === 'info'}
			class:border-green-500={type === 'success'}
			class:border-red-500={type === 'error'}
			class:border-yellow-500={type === 'warning'}
		>
			<p class="font-bold text-white flex items-center">
				{#if type === 'info'}
					<InfoIcon />
				{:else if type === 'success'}
					<SuccessIcon />
				{:else if type === 'error'}
					<ErrorIcon />
				{:else if type === 'warning'}
					<WarningIcon />
				{/if}
				<span class="ml-2">{title}</span>
			</p>
			<div class="flex items-center">
				{#if opentime}
					<p class="text-white opacity-90 text-xs">0 mins ago</p>
				{/if}

				{#if dismissible}
					<button
						class="btn-close btn-close-white box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
						on:click={() => dispatch('dismiss')}
					>
						<CloseIcon width="1.1em" />
					</button>
				{/if}
			</div>
		</div>
		<div
			class="p-2 rounded-b-lg break-words text-white opacity-90"
			class:bg-blue-400={type === 'info'}
			class:bg-green-400={type === 'success'}
			class:bg-red-400={type === 'error'}
			class:bg-yellow-400={type === 'warning'}
		>
			<slot />
		</div>
	</div>
</div>
