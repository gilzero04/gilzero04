<script lang="ts">
	import { onAuthStateChanged, type User, reload } from 'firebase/auth';
	import { auth } from '$lib/firebase/auth/firebase';
	import { authSignOut } from '$lib/firebase/auth/email-auth';

	import companyLogo from '$lib/assets/svg/company-logo.svg';
	import profileDummy from '$lib/assets/svg/profile-dummy.svg';
	import musicVideoMetaverses from '$lib/assets/svg/music-video-metaverses.svg';
	import adMetaverses from '$lib/assets/svg/ad-metaverses.svg';
	import nftMetaverses from '$lib/assets/svg/nft-metaverses.svg';
	import kidMetaverses from '$lib/assets/svg/kid-metaverses.svg';
	import shoppingMetaverses from '$lib/assets/svg/shopping-metaverses.svg';
	import concertEventMetaverses from '$lib/assets/svg/concert-event-metaverses.svg';
	import { onMount } from 'svelte';

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
		await check().finally(() => {});
		//await new Promise((resolve) => setTimeout(resolve, 2000));
		//return () => {
		//	props: {isPageLoaded = true;};
		//};
	});

	$: profileImage = user?.photoURL || profileDummy;
	$: displayName = user?.displayName || 'Undefined';
	$: email = user?.email || 'Undefined';
	$: providerId = user?.providerData[0].providerId || 'Undefined';
</script>

{#if user}
	<div class="hero h-[calc(100vh-66px)] bg-transparent absolute overflow-auto">
		<div class=" absolute top-0 mx-6 grid gap-5 mt-5
		grid-cols-2
		xsp:grid-cols-1
		xsl:grid-cols-2
		xsm:grid-cols-2
		sm:grid-cols-2
		md:grid-cols-3 
		lg:grid-cols-3 
		xl:grid-cols-4
		2xl:grid-cols-6">
			<div class="shadow-lg rounded-t-md">
				<div class="relative">
					<img class="w-sm" src={musicVideoMetaverses} alt="" />
					<div class="pt-2 pb-2 pl-1 pr-1 relative">
						<p class="text-lg xsp:text-sm xsl:text-sm md:text-sm xsm:text-sm mt-6 font-medium text-yellow-50">MUSIC VIDEO METAVERSE</p>
						<img class="h-12 w-12 rounded-full absolute -top-6 p-0.5 border-2 right-6" src={companyLogo} alt="" />
      				</div>
				</div>
			</div>
			<div class="shadow-lg rounded-t-md ">
				<div class="relative">
					<img class="w-sm" src={kidMetaverses} alt="" />
					<div class="pt-2 pb-2 pl-1 pr-1 relative">
						<p class="text-lg xsp:text-sm xsl:text-sm md:text-sm xsm:text-sm mt-6 font-medium text-yellow-50">KID METAVERSES</p>
						<img class="h-12 w-12 rounded-full absolute -top-6 p-0.5 border-2 right-6" src={companyLogo} alt="" />
      				</div>
				</div>
			</div>
			<div class="shadow-lg rounded-t-md ">
				<div class="relative">
					<img class="w-sm" src={adMetaverses} alt="" />
					<div class="pt-2 pb-2 pl-1 pr-1 relative">
						<p class="text-lg xsp:text-sm xsl:text-sm md:text-sm xsm:text-sm mt-6 font-medium text-yellow-50">AD METAVERSES</p>
						<img class="h-12 w-12 rounded-full absolute -top-6 p-0.5 border-2 right-6" src={companyLogo} alt="" />
      				</div>
				</div>
			</div>
			<div class="shadow-lg rounded-t-md ">
				<div class="relative">
					<img class="w-sm" src={nftMetaverses} alt="" />
					<div class="pt-2 pb-2 pl-1 pr-1 relative">
						<p class="text-lg  xsp:text-sm xsl:text-sm md:text-sm xsm:text-sm mt-6 font-medium text-yellow-50">NFT METAVERSES</p>
						<img class="h-12 w-12 rounded-full absolute -top-6 p-0.5 border-2 right-6" src={companyLogo} alt="" />
      				</div>
				</div>
			</div>
			<div class="shadow-lg rounded-t-md ">
				<div class="relative">
					<img class="w-sm" src={shoppingMetaverses} alt="" />
					<div class="pt-2 pb-2 pl-1 pr-1 relative">
						<p class="text-lg xsp:text-sm xsl:text-sm md:text-sm xsm:text-sm mt-6 font-medium text-yellow-50">SHOPPING METAVERSE</p>
						<img class="h-12 w-12 rounded-full absolute -top-6 p-0.5 border-2 right-6" src={companyLogo} alt="" />
      				</div>
				</div>
			</div>
			<div class="shadow-lg rounded-t-md ">
				<div class="relative">
					<img class="w-sm" src={concertEventMetaverses} alt="" />
					<div class="pt-2 pb-2 pl-1 pr-1 relative">
						<p class="text-lg xsp:text-sm xsl:text-sm md:text-sm xsm:text-sm mt-6 font-medium text-yellow-50">CONCERT & EVENT METAVERSE</p>
						<img class="h-12 w-12 rounded-full absolute -top-6 p-0.5 border-2 right-6" src={companyLogo} alt="" />
      				</div>
				</div>
			</div>
		</div>
	</div>
{/if}
