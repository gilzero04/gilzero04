<script lang="ts">
	let isPageLoaded = false;
	import { onAuthStateChanged, type User, reload } from 'firebase/auth';
	import { auth } from '$lib/firebase/auth/firebase';
	import { authSignOut } from '$lib/firebase/auth/email-auth';

	import companyLogo from '$lib/assets/svg/company-logo.svg';
	import profileDummy from '$lib/assets/svg/profile-dummy.svg';
	import { onDestroy, onMount } from 'svelte';
	import Loading from '$lib/components/Loading.svelte';

	let user: User | undefined;

	const check = async () => {
		await onAuthStateChanged(auth, (users) => {
			if (users) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				user = users;
			} else {
				// User is signed out
			}
		});
	};

	onMount(async () => {
		await check().finally(() => {
			//const timeSet = setInterval(() => {
	    	isPageLoaded = true;
			//}, 1000);
			//clearInterval(timeSet);
		});
	});

	onDestroy(async () => {
		isPageLoaded = false;
	});
	$: profileImage = user?.photoURL || profileDummy;
	$: displayName = user?.displayName || 'Undefined';
	$: email = user?.email || 'Undefined';
	$: providerId = user?.providerData[0].providerId || 'Undefined';
</script>

{#if !isPageLoaded}
	<Loading/>
{:else if user}
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row-reverse w-[300px]">
			<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
				<div class="card-body">
					<div class="avatar flex flex-row justify-center items-center mb-3">
						<div class="w-24 rounded-full ring ring-slate-400 ring-offset-base-100 ring-offset-2">
							<!-- svelte-ignore a11y-missing-attribute -->
							<img class="w-20" src={profileImage} />
						</div>
					</div>
					<div class=" text-center font-bold mb-4 text-slate-500 text-lg">Dashboard</div>
					<hr />
					<div class="form-control relative">
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">
							<span class="label-text">Fullname : {displayName}</span>
						</label>
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">
							<span class="label-text">Email : {email}</span>
						</label>
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label">
							<span class="label-text">LoginType : {providerId}</span>
						</label>
					</div>
					<!--<div class="form-control relative">
						<button
							class="h-12 bg-yellow-400 hover:bg-lime-500 text-blue-600 hover:text-blue-600 font-bold py-0 px-2 rounded inline-flex items-center"
							on:click={() => {
								authSignOut('/signin/');
							}}
						>

							<img class="fill-current  w-8 h-8 ml-[6px] mr-[16px]" src={companyLogo} />
							<span>Sign Out</span>
						</button>
					</div>-->
					<hr />
					<!--<div class="text-center text-stone-600 text-sm">
						If remember you password? <a class=" text-red-500 hover:text-green-500" href="/signin/"
							>SignIn</a
						>
					</div>-->
				</div>
			</div>
		</div>
	</div>
{/if}

