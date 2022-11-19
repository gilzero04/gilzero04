<script lang="ts">
	import Profile from './../../lib/components/profile/Profile.svelte';
	import profileDummy from '$lib/assets/svg/profile-dummy.svg';
	import { onAuthStateChanged, type User } from 'firebase/auth';
	import { auth } from '$lib/firebase/auth/firebase';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
    import {page} from '$app/stores';

	let user: User | undefined;

	const check = async () => {
		await onAuthStateChanged(auth, (users) => {
			if (users) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				user = users;
				const uid = users.uid;
			} else {
				// User is signed out
				user = undefined;
                goto('/signin/');
			}
		});
	};

    onMount(async () => {
        await check().finally(() => {});
    });
    $: profileImage = user?.photoURL || profileDummy;
	$: displayName = user?.displayName || 'Undefined';
	$: email = user?.email || 'Undefined';
	$: providerId = user?.providerData[0].providerId || 'Undefined';
</script>

{#if user}
	<div class="text-sm breadcrumbs ml-3 mr-3 text-slate-300 dark:text-slate-300 ">
		<ul>
			<!-- svelte-ignore a11y-missing-attribute -->
			<li><a href="/">Dashboard</a></li>
			<li>{$page.routeId?.substr(1,$page.routeId.length-1).replace(/\w/, c => c.toUpperCase())}</li>
		</ul>
	</div>
	<section
		class=" bg-transparent  flex font-medium items-center justify-center h-[calc(100vh-66px-36px)] relative"
	>
		<section class="w-[260px] h-[400px] mx-auto bg-violet-700 bg-opacity-60  rounded-2xl px-8 py-6 shadow-lg absolute xsl:top-0 xsl:left-3">
			<div class="flex items-center justify-between">
				<span class="text-gray-400 text-sm">2d ago</span>
				<span class="text-emerald-400">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
						/>
					</svg>
				</span>
			</div>
			<div class="mt-6 w-fit mx-auto">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src={profileImage}
					class="rounded-full w-28 "
					alt="profile picture"
					srcset=""
				/>
			</div>

			<div class="mt-8 ">
				<h2 class="text-base-200 font-semibold text-xl tracking-wide">{displayName}</h2>
			</div>
			<p class="text-emerald-400 font-semibold text-sm mt-2.5">Active</p>

            <span class="font-semibold mt-2.5 text-xs text-sky-400">Email <span class="text-slate-400">:</span> <span class=" text-base-200"> {email}</span> </span>

			<div class="h-1 w-full bg-black mt-3 rounded-full">
				<div class="h-1 rounded-full w-1/5 bg-yellow-500 " />
			</div>
			<div class="mt-2 text-white text-sm">
				<span class="text-gray-400 font-semibold">Storage:</span>
				<span>20%</span>
                <span class=" right-8 absolute">{providerId}</span>
			</div>
		</section>
	</section>
{/if}

<!--
<div class="h-[calc(100vh-66px-36px)]">
 
    <div class="border-b-2 block md:flex">
  
      <div class="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
        <div class="flex justify-between">
          <span class="text-xl font-semibold block">Admin Profile</span>
          <a href="#" class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</a>
        </div>
  
        <span class="text-gray-600">This information is secret so be careful</span>
        <div class="w-full p-8 mx-2 flex justify-center">
          <img id="showImage" class="max-w-xs w-32 items-center border" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" alt="">                          
          </div>
      </div>
      
      <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
        <div class="rounded  shadow p-6">
          <div class="pb-6">
            <label for="name" class="font-semibold text-gray-700 block pb-1">Name</label>
            <div class="flex">
              <input disabled id="username" class="border-1  rounded-r px-4 py-2 w-full" type="text" value="Jane Name" />
            </div>
          </div>
          <div class="pb-4">
            <label for="about" class="font-semibold text-gray-700 block pb-1">Email</label>
            <input disabled id="email" class="border-1  rounded-r px-4 py-2 w-full" type="email" value="example@example.com" />
            <span class="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
          </div>
        </div>
      </div>
  
    </div>
   
  </div>
-->
