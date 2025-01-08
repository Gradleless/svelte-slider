<script lang="ts">
	import { fade } from 'svelte/transition';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import type { ButtonSliderProps } from '../types.js';

	let {
		direction,
		containerClasses = 'absolute bottom-0 top-0 flex w-20 items-center justify-center h-full',
		buttonClasses = 'rounded-full bg-zinc-800 p-2 duration-200 hover:bg-zinc-700 from-transparent to-zinc-800' + (direction === 'left' ? ' bg-gradient-to-l' : ' bg-gradient-to-r'),
		iconClasses = 'h-5 w-5 text-white',
		scrollFunc,
		Icon
	}: ButtonSliderProps = $props();
</script>

<div
	transition:fade={{ duration: 200 }}
	class={containerClasses}
	style={direction === 'right' ? 'right: 0;' : 'left: 0;'}
>
	<button class={buttonClasses} onclick={scrollFunc}>
		{#if Icon}
			<Icon class={iconClasses} />
		{:else}
			<ChevronRight
				class={iconClasses}
				style="transform: rotate({direction === 'left' ? 180 : 0}deg);"
			/>
		{/if}
	</button>
</div>
