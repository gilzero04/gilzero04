<script lang="ts">
	import '../app.scss';
	import { onAuthStateChanged, type User } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { auth } from '$lib/firebase/auth/firebase';
	import Toasts from '$lib/components/toast/Toasts.svelte';
	import profileDummy from '$lib/assets/svg/profile-dummy.svg';
	import backgroundVideo from '$lib/assets/video/background-video.mp4';
	import { page } from '$app/stores';
	import { onDestroy, onMount } from 'svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Drawer from './../lib/components/topbar/Drawer.svelte';
	import TopBar from './../lib/components/topbar/TopBar.svelte';

	let isPageLoaded = false;
	let user: User | undefined;
	onMount(async () => {
		await onAuthStateChanged(auth, (users) => {
			if (users) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				user = users;
			} else {
				// User is signed out
				user = undefined;
				if (
					$page.routeId !== '/signin/panvora' &&
					$page.routeId !== '/signup' &&
					$page.routeId !== '/signin/panvora/forgot'
				) {
					goto('/signin');
				}
			}
			isPageLoaded = true;
		});
	});

	onDestroy(async () => {
		isPageLoaded = false;
	});
	$: profileImage = user?.photoURL || profileDummy;
	$: displayName = user?.displayName || 'Undefined';
	$: email = user?.email || 'Undefined';
	$: providerId = user?.providerData[0].providerId || 'Undefined';
	$: innerHeight = 0;
	$: innerWidth = 0;
	$: placement = 'topCenter';
	$: {
		if (innerWidth > 640) {
			placement = 'topEnd';
		}
	}
</script>

<svelte:window bind:innerHeight bind:innerWidth />
<svelte:head>
    <title>Panvora Link.</title>
    <meta name="description" content="Panvora Link">
</svelte:head>

<div class=" h-[100vh] w-[100vw] z-0 absolute overflow-hidden top-0 left-0 bg-gradient-to-r from-zinc-900 to-zinc-900 ">
	<video autoplay loop muted class="min-w-full min-h-full absolute object-cover top-0 left-0">
		<source src={backgroundVideo} type="video/mp4"/>
		Your browser does not support the video tag.
	</video>
</div>

<div class=" relative">
	<div class=" bg-transparent  w-[100vw] h-[100vh] absolute z-50 top-0 left-0">
		{#if isPageLoaded}
			{#if user}
				<TopBar {profileImage} {displayName} />
			{/if}
			<Drawer {user}>
				<Toasts {placement} />
				<slot />
			</Drawer>
		{:else}
			<Loading />
		{/if}
	</div>
</div>
