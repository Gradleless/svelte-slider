import type { Snippet } from 'svelte';
import type { Icon as IconType } from 'lucide-svelte';

interface SliderItem {
	data: any;
}

interface SliderProps {
	Item: Snippet<[any]>;
	cardItems: SliderItem[];
	buttonProps?: ButtonSliderR;
}

interface ButtonSliderR {
	containerClasses?: string;
	buttonClasses?: string;
	iconClasses?: string;
	gradientClasses?: string;
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
}

export type { SliderItem, SliderProps, ButtonSliderR, ButtonSliderProps, SliderContainerProps };
