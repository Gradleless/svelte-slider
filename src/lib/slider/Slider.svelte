<script lang="ts">
	import SliderContainer from '$lib/slider/SliderContainer.svelte';
	import ButtonSlider from '$lib/slider/ButtonSlider.svelte';
	import type { SliderProps } from '../types.js';
	import '$lib/slider/slider.css';
	
	let { cardItems, buttonProps, Item }: SliderProps = $props();

	let scrollContainer = $state<HTMLUListElement>();
	let showLeftButton = $state(false);
	let showRightButton = $state(true);

	function getGapSize(): number {
		if (!scrollContainer) return 0;
		const computedStyle = window.getComputedStyle(scrollContainer);
		const gap = computedStyle.gap || computedStyle.columnGap;
		return parseInt(gap) || 0;
	}

	function scroll(direction: 'left' | 'right') {
		if (!scrollContainer) return;
		const firstCard = scrollContainer.firstElementChild as HTMLLIElement;
		if (!firstCard) return;

		const cardWidth = firstCard.offsetWidth + getGapSize();
		const visibleCards = Math.floor(scrollContainer.clientWidth / cardWidth);
		const scrollAmount = cardWidth * visibleCards * (direction === 'left' ? -1 : 1);

		scrollContainer.scrollBy({
			left: scrollAmount,
			behavior: 'smooth'
		});
	}

	function checkScrollButtons() {
		if (!scrollContainer) return;

		showLeftButton = scrollContainer.scrollLeft > 0;
		showRightButton =
			scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth;
	}

	$effect(() => {
		if (scrollContainer) {
			checkScrollButtons();
		}
	});
</script>

<div class="relative">
	<SliderContainer bind:scrollContainer scrollEvent={checkScrollButtons} {cardItems} {Item} />

	{#if showRightButton}
		<ButtonSlider
			direction="right"
			scrollFunc={() => scroll('right')}
			{...buttonProps}
		/>
	{/if}

	{#if showLeftButton}
		<ButtonSlider
			direction="left"
			scrollFunc={() => scroll('left')}
			{...buttonProps}
		/>
	{/if}
</div>
