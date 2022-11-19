<script lang="ts">
	import { useForm, HintGroup, Hint, validators, email, required } from 'svelte-use-form';
	import companyLogo from '$lib/assets/svg/company-logo.svg';
	import { emailRegister } from '$lib/firebase/auth/email-auth';
	import { onAuthStateChanged, type User } from 'firebase/auth';
	import { auth } from '$lib/firebase/auth/firebase';
	import { passwordMatch } from '$lib/validators/customValidators';

	const frm_signup = useForm();
	const requiredMessage = 'This field is required';

	let fld_email: string = '';
	let fld_password: string = '';
	let fld_confirmpassword: string = '';
	let fld_fullname: string = '';

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
				<div class="card-body 
				xsp:w-[285px]
				xsl:w-[235px] xsl:p-0 xsl:ml-4 xsl:mr-4 xsl:mt-2 xsl:mb-3">
					<div class="flex flex-row justify-center items-center mb-3
						xsp:mb-0
						xsl:mb-0">
						<div>
							<!-- svelte-ignore a11y-missing-attribute -->
							<img class="xsl:w-12 w-14" src={companyLogo} />
						</div>
					</div>
					<div class=" text-center font-bold mb-4 text-slate-500 text-lg
						xsp:mb-1 xsp:text-sm 
						xsl:mb-1 xsl:text-sm">Sign Up</div>
					<form use:frm_signup>
						<div class="form-control relative">
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label class="label">
								<span class="label-text xsp:text-sm xsl:text-sm">Full Name :</span>
							</label>
							<input
								id="fld_fullname"
								name="fld_fullname"
								type="text"
								placeholder="Your Fullname"
								class="input input-bordered input-md xsp:input-sm xsl:input-sm"
								class:input-success={$frm_signup.fld_fullname?.valid}
								class:input-error={!$frm_signup.fld_fullname?.valid}
								bind:value={fld_fullname}
								use:validators={[required]}
							/>
							<HintGroup for="fld_fullname">
								<Hint on="required" class="text-xs text-error">{requiredMessage}</Hint>
								<Hint on="passwordMatch" hideWhenRequired class="text-xs text-error"
									>Email is not valid</Hint
								>
							</HintGroup>
						</div>
						<div class="form-control relative">
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label class="label">
								<span class="label-text xsp:text-sm xsl:text-sm">Email :</span>
							</label>
							<input
								id="fld_email"
								name="fld_email"
								required
								placeholder="Your Email"
								class="input input-bordered input-md xsp:input-sm xsl:input-sm"
								class:input-success={$frm_signup.fld_email?.valid}
								class:input-error={!$frm_signup.fld_email?.valid}
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
								placeholder="Your Password"
								class="input input-bordered input-md xsp:input-sm xsl:input-sm"
								class:input-success={$frm_signup.fld_password?.valid}
								class:input-error={!$frm_signup.fld_password?.valid}
								bind:value={fld_password}
								use:validators={[required]}
							/>
							<HintGroup for="fld_password">
								<Hint on="required" class="text-xs text-error">{requiredMessage}</Hint>
							</HintGroup>
						</div>
						<div class="form-control relative">
							<!-- svelte-ignore a11y-label-has-associated-control -->
							<label class="label">
								<span class="label-text xsp:text-sm xsl:text-sm">Verify Password :</span>
							</label>
							<input
								id="fld_confirmpassword"
								name="fld_confirmpassword"
								type="password"
								placeholder="Confirm Password"
								class="input input-bordered input-md xsp:input-sm xsl:input-sm"
								class:input-success={$frm_signup.fld_confirmpassword?.valid}
								class:input-error={!$frm_signup.fld_confirmpassword?.valid}
								bind:value={fld_confirmpassword}
								use:validators={[required, passwordMatch]}
							/>
							<HintGroup for="fld_confirmpassword">
								<Hint on="required" class="text-xs text-error">{requiredMessage}</Hint>
								<Hint on="passwordMatch" class="text-xs text-error" hideWhenRequired>Passwords do not match</Hint>
							</HintGroup>
						</div>
					</form>
					<div class="form-control relative mt-2">
						<button
							class=" xsp:h-10 
									xsl:h-10 
									h-12 hover:bg-lime-500 text-blue-600 hover:text-blue-600 font-bold py-0 px-2 rounded inline-flex items-center"
							class:btn-disabled={!$frm_signup?.valid}
							class:bg-yellow-400={$frm_signup?.valid}
							on:click|preventDefault={async () =>
								emailRegister(fld_email, fld_password, fld_fullname)}
						>
							<!-- svelte-ignore a11y-missing-attribute -->
							<img class="fill-current  w-9 h-9 ml-[4px] mr-[8px]
							xsp:ml-[-4px] xsp:mr-[2px]
							xsl:ml-[3px] xsl:mr-[12px]" src={companyLogo} />
							<span class="xsp:text-sm xsl:text-sm">Confirm with Panvora</span>
						</button>
					</div>
					<hr />
					<div class="text-center text-stone-600 xsp:text-xs xsl:text-xs">
						Have a ready account? <a class=" text-red-500 hover:text-green-500" href="/signin"
							>SignIn</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<!--<pre>
	{JSON.stringify($frm_signup, null, 1)}
</pre>-->
