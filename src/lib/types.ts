import type { Snippet } from 'svelte';
import type { Icon as IconType } from 'lucide-svelte';

interface SliderItem {
	data: any;
}

interface SliderProps {
	Item: Snippet<[any]>;
	cardItems: SliderItem[];
	buttonProps?: ButtonSliderR;
	axis: 'x' | 'y';
	gap?: number | string;
}

interface ButtonSliderR {
	containerClasses?: string;
	buttonClasses?: string;
	iconClasses?: string;
	Icon?: typeof IconType;
}
interface ButtonSliderProps extends ButtonSliderR {
	direction: 'left' | 'right';
	scrollFunc: () => void;
}

interface SliderContainerProps {
	Item: Snippet<[any]>;
	scrollContainer: HTMLUListElement | undefined;
	cardItems: SliderProps['cardItems'];
	scrollEvent: () => void;
	axis: 'x' | 'y';
	gap?: number | string;
}

export type { SliderItem, SliderProps, ButtonSliderR, ButtonSliderProps, SliderContainerProps };
