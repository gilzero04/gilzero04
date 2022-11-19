<script lang="ts">
	import panvoraLoading from '$lib/assets/svg/panvora-logo-animation.svg';
	import backgroundVideo from '$lib/assets/video/background-video.mp4';
</script>

<div class=" ring absolute top-1/2 left-1/2 w-44 h-44 bg-transparent text-xl text-center uppercase font-serif">
	<!-- svelte-ignore a11y-missing-attribute -->
	<object type="image/svg+xml" data={panvoraLoading} class=" absolute top-[-16px]" />
	<span class=" font-bold text-slate-900 ">PANVORA</span>
	<span class="pointer"/>
</div>

<style lang="scss">
	.ring {
		transform: translate(-50%, -50%);
		border: 3px solid #3c3c3c;
		border-radius: 50%;
		line-height: 230px;
		letter-spacing: 3px;
		text-shadow: 0 0 10px #22c55e;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
	}
	.ring:before {
		content: '';
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		border: 3px solid transparent;
		border-top: 3px solid #22c55e;
		border-right: 3px solid #22c55e;
		border-radius: 50%;
		animation: animateC 2s linear infinite;
	}
	.pointer {
		display: block;
		position: absolute;
		top: calc(50% - 2px);
		left: 50%;
		width: 50%;
		height: 4px;
		background: transparent;
		transform-origin: left;
		animation: animate 2s linear infinite;
	}
	.pointer:before {
		content: '';
		position: absolute;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: #22c55e;
		top: -6px;
		right: -8px;
		box-shadow: 0 0 20px #22c55e;
	}
	@keyframes animateC {
		0% {
			transform: rotate(360deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
	@keyframes animate {
		0% {
			transform: rotate(585deg);
		}
		100% {
			transform: rotate(225deg);
		}
	}
</style>
