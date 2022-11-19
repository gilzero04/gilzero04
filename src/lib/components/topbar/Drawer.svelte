<script lang="ts">
	import Toast from './../toast/Toast.svelte';
	import type { User } from 'firebase/auth';
	export let user: User | undefined;
	let oppenDrawer: boolean = false;
	function handleClick() {
		oppenDrawer = !oppenDrawer;
	}
</script>

<div class="drawer bg-transparent absolute"
	 class:h-[calc(100vh-66px)]={user}
>
	<input id="left-drawer" type="checkbox" class="drawer-toggle" bind:checked={oppenDrawer} />
	<div class="drawer-content bg-transparent">
		<!-- Page content here -->
		<slot />
	</div>
	<div class="drawer-side">
		<label for="left-drawer" class="drawer-overlay" />
		<!--	<ul class="menu bg-base-100 w-80">
			<li class="hover-bordered">
				<a>
					<svg xmlns="http://www.w3.org/2000/svg"
                        class="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
					<span class="ml-3">Dashboard</span>
				</a>
			</li>
			<li class="hover-bordered">
				<a>
					<svg
						aria-hidden="true"
						class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path
							d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
						/></svg
					>
					<span class="ml-3">Comonents</span></a
				>
			</li>
			<li class="hover-bordered"><a>
				<svg
					aria-hidden="true"
					class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path
						d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
					/></svg
				>
				<span class="ml-3">Help</span></a
			></li>
		</ul>
-->
		<div class="bg-violet-400 w-80 bg-opacity-60">
			<ul>
				<li>
					<div class="collapse collapse-close border-t border-b border-base-300 bg-base-100 w-80 bg-opacity-60">
						<div class="collapse-title text-md font-medium flex">
							<svg
								class="w-6 h-6  flex-none pl-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/></svg
							>
							<span class="flex-1 ml-4">Dashboard</span>
						</div>
						<div class="collapse-content">
							<p>tabindex="0" attribute is necessary to make the div focusable</p>
						</div>
					</div>
				</li>
				<li>
					<div class="collapse collapse-plus border-b bg-base-100 bg-opacity-60">
						<input type="checkbox" class="peer" />
						<div class="collapse-title text-md font-medium flex">
							<svg
								class="w-6 h-6 flex-none pl-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
								/></svg
							>
							<span class="flex-1 ml-4">Components</span>
						</div>
						<div
							class="collapse-content bg-violet-400 bg-opacity-30 peer-checked:bg-violet-400 peer-checked:text-content border-t peer-checked:bg-opacity-30"
						>
							<ul class="menu p-4 w-80 bg-transparent  text-base-content">
								<li>
									<a
										href="#"
										class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
										>Toast</a
									>
								</li>
							</ul>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>
