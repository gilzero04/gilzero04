<script lang="ts">
	import { useForm, HintGroup, Hint, validators, email, required } from 'svelte-use-form';
	import { onAuthStateChanged, type User } from 'firebase/auth';
	import { auth } from '$lib/firebase/auth/firebase';

	import companyLogo from '$lib/assets/svg/company-logo.svg';
	import { emailSignIn } from '$lib/firebase/auth/email-auth';

	const frm_signin = useForm();
	const requiredMessage = 'This field is required';

	let fld_email: string = '';
	let fld_password: string = '';

	let user: User | undefined;

	const check = async () => {
		await onAuthStateChanged(auth, (users) => {
			if (users) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				user = users;
				const uid = users.uid;
				console.log(uid);
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
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row-reverse">
			<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
				<div
					class="card-body 
						xsp:w-[285px]
						xsl:w-[235px] xsl:p-0 xsl:ml-4 xsl:mr-4 xsl:mt-2 xsl:mb-3"
				>
					<div
						class="flex flex-row justify-center items-center mb-3
						xsp:mb-0
						xsl:mb-0"
					>
						<div>
							<!-- svelte-ignore a11y-missing-attribute -->
							<img class="xsl:w-12 w-14" src={companyLogo} />
						</div>
					</div>
					<div
						class=" text-center font-bold mb-4 text-slate-500 text-lg 
					xsp:mb-1 xsp:text-sm 
					xsl:mb-1 xsl:text-sm"
					>
						Sign In
					</div>
					<form use:frm_signin>
						<div class="form-control relative">
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label class="label">
								<span class="label-text xsp:text-sm xsl:text-sm">Email :</span>
							</label>
							<input
								id="fld_email"
								name="fld_email"
								type="email"
								placeholder="Your email"
								class="input input-bordered xsp:input-sm xsl:input-sm"
								class:input-success={$frm_signin.fld_email?.valid}
								class:input-error={!$frm_signin.fld_email?.valid}
								bind:value={fld_email}
								use:validators={[required, email]}
							/>
							<HintGroup for="fld_email">
								<Hint on="required" class="text-xs text-error">{requiredMessage}</Hint>
								<Hint on="email" hideWhenRequired class="text-xs text-error"
									>Email is not valid</Hint
								>
							</HintGroup>
						</div>
						<div class="form-control relative">
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label class="label">
								<span class="label-text xsp:text-sm xsl:text-sm">Password :</span>
							</label>
							<input
								id="fld_password"
								name="fld_password"
								type="password"
								placeholder="Your password"
								class="input input-bordered xsp:input-sm xsl:input-sm"
								class:input-success={$frm_signin.fld_password?.valid}
								class:input-error={!$frm_signin.fld_password?.valid}
								bind:value={fld_password}
								use:validators={[required]}
							/>
							<HintGroup for="fld_password">
								<Hint on="required" class="text-xs text-error">{requiredMessage}</Hint>
							</HintGroup>
						</div>
					</form>
					<div class="form-control relative">
						<!-- svelte-ignore a11y-no-redundant-roles -->
						<button
							role="button"
							aria-disabled="true"
							class=" xsp:h-10 
									xsl:h-10 
									h-12 hover:bg-lime-500 text-blue-600 hover:text-blue-600 font-bold py-0 px-2 rounded inline-flex items-center"
							class:btn-disabled={!$frm_signin?.valid}
							class:bg-yellow-400={$frm_signin?.valid}
							on:click|preventDefault={() => {
								emailSignIn(fld_email, fld_password);
							}}
						>
							<!-- svelte-ignore a11y-missing-attribute -->
							<img
								class="fill-current  w-9  h-9 ml-[6px] mr-[16px] 
							xsp:ml-[-4px] xsp:mr-[2px]
							xsl:ml-[3px] xsl:mr-[12px]"
								src={companyLogo}
							/>
							<span class="xsp:text-sm xsl:text-sm">Continue with Panvora</span>
						</button>
					</div>
					<hr />
					<div class="text-center text-stone-600 xsp:text-xs xsl:text-xs">
						Have a ready account? <a class=" text-red-500 hover:text-green-500" href="/signup/">
							SignUp</a
						>
						|
						<a class=" text-red-500 hover:text-green-500" href="/signin/panvora/forgot/"> Forgot</a>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<!--<pre>
	{JSON.stringify($frm_signin, null, 1)}
</pre>-->
