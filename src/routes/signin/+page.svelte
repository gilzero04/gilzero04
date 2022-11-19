<script lang="ts">
	import { googleSignIn } from '$lib/firebase/auth/google-auth';
	import { onAuthStateChanged, type User } from 'firebase/auth';
	import { auth } from '$lib/firebase/auth/firebase';

	import { goto } from '$app/navigation';

	import companyLogo from '$lib/assets/svg/company-logo.svg';
	import googleLogo from '$lib/assets/svg/google-logo.svg';
	import facebookLogo from '$lib/assets/svg/facebook-logo.svg';
	import backgroundVideo from '$lib/assets/video/background-video.mp4';
	import { facebookSignIn } from '$lib/firebase/auth/facebook-auth';

	let user: User | undefined;

	const check = async () => {
		await onAuthStateChanged(auth, (users) => {
			if (users) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				user = users;
				const uid = users.uid;
				console.log(uid);
				goto('/');
			} else {
				// User is signed out
				user = undefined;
			}
		});
	};

	$: {
		check();
	}
</script>

{#if !user}
	<div
		class="hero h-[calc(100vh)] overflow-hidden z-10 absolute bg-transparent"
	>
		<div class="hero-content flex-col bg-transparent">
			<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
				<div
					class="card-body 
						xsp:w-[285px]
						xsl:w-[235px] xsl:p-0 xsl:ml-4 xsl:mr-4 xsl:mt-2 xsl:mb-3"
				>
					<div
						class="flex flex-row justify-center items-center mb-3 
						xsp:mb-0
						xsl:mb-0
						border-none"
					>
						<div>
							<!-- svelte-ignore a11y-missing-attribute -->
							<img class="xsl:w-12 w-14" src={companyLogo} alt="Panvora Logo." />
						</div>
					</div>
					<div
						class=" text-center font-bold mb-4 text-slate-500 text-lg 
						xsp:mb-1 xsp:text-sm 
						xsl:mb-1 xsl:text-sm"
					>
						Sign In
					</div>
					<div class="form-control relative">
						<button
							class="
								xsp:h-10 
								xsl:h-10 
								h-12 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-0 px-2 rounded inline-flex items-center"
							on:click={() => {
								goto('/signin/panvora/');
							}}
						>
							<!-- svelte-ignore a11y-missing-attribute -->
							<img
								class="fill-current  w-9  h-9 ml-[4px] mr-[10px] 
								xsp:ml-[-4px] xsp:mr-[2px]
								xsl:ml-[1px] xsl:mr-[8px]"
								src={companyLogo}
								alt="Panvora Logo."
							/>
							<span class=" text-slate-900 xsp:text-sm  xsl:text-sm">Continue with Panvora</span>
						</button>
					</div>
					<div class="form-control relative">
						<button
							class=" h-12
									xsp:h-10 
									xsl:h-10
									bg-red-400 hover:bg-red-300 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center"
							on:click={() => {
								googleSignIn();
							}}
						>
							<!-- svelte-ignore a11y-missing-attribute -->
							<img
								class="fill-current  
								w-8 h-8 ml-[6px] mr-3 
								xsp:w-7 xsp:h-7 xsp:mr-1.5 xsp:ml-[0px]
								xsl:w-7 xsl:h-7 xsl:mr-3"
								src={googleLogo}
								alt="Google Logo."
							/>
							<span class=" text-slate-700 xsp:text-sm xsl:text-sm">Continue with Google</span>
						</button>
					</div>
					<div class="form-control relative">
						<button
							class="	h-12
									xsp:h-10 
									xsl:h-10
							 bg-blue-500 hover:bg-blue-400 hover:text-slate-100 font-bold py-0 px-2 rounded inline-flex items-center"
							on:click={() => {
								facebookSignIn();
							}}
						>
							<!-- svelte-ignore a11y-missing-attribute -->
							<img
								class="fill-current 
								 w-8 h-8 ml-[6px] mr-3 
								 xsp:w-7 xsp:h-7 xsp:mr-1.5 xsp:ml-[0px]
								 xsl:w-7 xsl:h-7 xsl:mr-3"
								src={facebookLogo}
								alt="Facebook Logo."
							/>
							<span class=" text-slate-200 xsp:text-sm xsl:text-sm">Continue with Facebook</span>
						</button>
					</div>
					<hr />
					<div class="text-center text-yellow-100 text-sm">
						Don't have an account? <a class=" text-orange-500 hover:text-green-500" href="/signup"
							>SignUp</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--<div class=" h-[100vh] w-[100vw] z-0 absolute overflow-hidden">
		<video autoplay loop muted class="min-w-full min-h-full absolute object-cover">
			<source
				src="{backgroundVideo}"
				type="video/mp4"
			/>
			Your browser does not support the video tag.
		</video>
	</div>-->
{/if}
