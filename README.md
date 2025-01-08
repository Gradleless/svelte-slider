# Svelte-slider

A modern, customizable slider component built for Svelte 5. (Kinda poorly written)

## Features

- Smooth horizontal scrolling
- Dynamic button visibility based on scroll position
- Customizable button styles and icons
- Responsive design
- Built with TypeScript
- Tailwind CSS support

## Usage

```svelte
<script lang="ts">
import { Slider } from 'svelte-slider';
import type { SliderItem } from 'svelte-slider';

const cardItems: SliderItem[] = [
                                    {
                                        data: { / your card data / }
                                    }
                                ];

</script>

<Slider {cardItems} {Item} />

{#snippet Item()}
    <!-- Ur snippet -->
{/snippet}
```

## Components

### Slider

The main component that orchestrates the slider functionality.

#### Props

- `cardItems`: Array of `SliderItem` objects
- `buttonProps`: (Optional) Customization options for the slider buttons
- `Item`: Snippet of your items

### ButtonSlider

Handles the navigation buttons for the slider.

#### Props

- `direction`: 'left' | 'right'
- `containerClasses`: Custom classes for the button container
- `buttonClasses`: Custom classes for the button element
- `iconClasses`: Custom classes for the icon
- `Icon`: Custom icon component (optional)
- `scrollFunc`: Function to handle scroll behavior

### SliderContainer

Contains the scrollable content of the slider.

#### Props

- `scrollContainer`: Reference to the container element
- `cardItems`: Array of items to display
- `scrollEvent`: Function to handle scroll events
- `Item`: Snippet of your items

## Types

```typescript

interface SliderItem {
    Item: Snippet<[any]>;
    href: string;
    data: any;
}

interface ButtonSliderR {
    containerClasses?: string;
    buttonClasses?: string;
    iconClasses?: string;
    gradientClasses?: string;
    Icon?: typeof IconType; // Lucide Icons type
}

interface SliderProps {
    cardItems: SliderItem[];
    buttonProps?: ButtonSliderR;
}
```

## Customization

The slider comes with default styling using Tailwind CSS, but you can customize the appearance by passing custom classes through the `buttonProps`:

```svelte
<Slider
    cardItems={items}
    buttonProps={{
        containerClasses: "your-custom-container-classes",
        buttonClasses: "your-custom-button-classes",
        iconClasses: "your-custom-icon-classes",
    }}
    {Item}
/>
```

## Dependencies

- Svelte 5.0.0 or higher
- Lucide Svelte (for default icons)
- Tailwind CSS (optional but recommended)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


