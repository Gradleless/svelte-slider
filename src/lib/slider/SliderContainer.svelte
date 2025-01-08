<script lang="ts">
	import type { SliderContainerProps } from '../types.js';

	let { scrollContainer = $bindable(), cardItems, scrollEvent, Item }: SliderContainerProps = $props();
</script>

<ul
	class="scrollbar-hidden flex gap-5 overflow-x-scroll"
	bind:this={scrollContainer}
	onscroll={scrollEvent}
>
	{#each cardItems as item}
		{@render Item(item.data)}
	{/each}
</ul>
