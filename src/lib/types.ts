import type { Snippet } from 'svelte';
import type { Icon as IconType } from 'lucide-svelte';

interface SliderItem {
	Item: Snippet<[any]>;
	href: string;
	data: any;
}

interface SliderProps {
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
	scrollContainer: HTMLUListElement | undefined;
	cardItems: SliderProps['cardItems'];
	scrollEvent: () => void;
}

export type { SliderItem, SliderProps, ButtonSliderR, ButtonSliderProps, SliderContainerProps };
