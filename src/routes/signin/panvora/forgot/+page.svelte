<script lang="ts">
	import companyLogo from '$lib/assets/svg/company-logo.svg';
	import { goto } from '$app/navigation';
	let email: string = '';
	let password: string = '';
</script>

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
				<div class=" text-center font-bold mb-4 text-slate-500 text-lg
					xsp:mb-1 xsp:text-sm 
					xsl:mb-1 xsl:text-sm">Forgot Password</div>
				<div class="form-control relative">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span class="label-text xsp:text-sm xsl:text-sm">Email</span>
					</label>
					<input type="text" placeholder="email" class="input input-bordered xsp:input-sm xsl:input-sm" />
				</div>
				<div class="form-control relative">
					<button
						class=" xsp:h-10 
								xsl:h-10 
								h-12 bg-yellow-400 hover:bg-lime-500 text-blue-600 hover:text-blue-600 font-bold py-0 px-2 rounded inline-flex items-center"
						on:click={() => {}}
					>
						<!-- svelte-ignore a11y-missing-attribute -->
						<img class="fill-current  w-9 h-9 ml-[4px] mr-[8px]
						xsp:ml-[-4px] xsp:mr-[2px]
						xsl:ml-[3px] xsl:mr-[12px]" src={companyLogo} />
						<span class="xsp:text-sm xsl:text-sm">Send link to Email</span>
					</button>
				</div>
				<hr />
				<div class="text-center text-stone-600 text-sm xsp:text-xs xsl:text-xs">
					If remember you password? <a
						class=" text-red-500 hover:text-green-500"
						href="/signin/panvora/">SignIn</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
