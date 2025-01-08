<script lang="ts">
	import type { SliderContainerProps } from '../types.js';

	let { scrollContainer = $bindable(), cardItems, scrollEvent }: SliderContainerProps = $props();
</script>

<ul
	class="scrollbar-hidden flex gap-5 overflow-x-scroll"
	bind:this={scrollContainer}
	onscroll={scrollEvent}
>
	{#each cardItems as item}
		{@render item.Item(item.data)}
	{/each}
</ul>
