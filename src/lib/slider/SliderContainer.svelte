<script lang="ts">
	import type { SliderContainerProps } from '../types.js';

	let { scrollContainer = $bindable(), cardItems, scrollEvent, Item, gap, axis }: SliderContainerProps = $props();

	let gapValue = typeof gap === 'number' ? `${gap}px` : gap;
</script>

<ul
	class="scrollbar-hidden slider-list {axis}"
	bind:this={scrollContainer}
	onscroll={scrollEvent}
	style="--slider-gap: {gapValue};"
>
	{#each cardItems as item}
		{@render Item(item.data)}
	{/each}
</ul>
