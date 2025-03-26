# Aurora Background Component

A beautiful aurora gradient background effect for Next.js applications with Tailwind CSS.

## Preview

![Aurora Background Preview](https://github.com/Eliassylla/aurora-background-component/assets/preview.png)

## Features

- Stunning aurora gradient animation
- Support for dark and light modes
- Customizable with tailwind classes
- Simple and easy to use
- Responsive design

## Installation

1. Clone this repository or copy the component files
2. Make sure you have Next.js and Tailwind CSS set up in your project
3. Follow the setup instructions below

## Setup

### 1. Add the Aurora Background Component

Create a file at `components/ui/aurora-background.tsx` with the component code.

### 2. Update your Tailwind Configuration

Add the following to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  // ... your existing config
  theme: {
    extend: {
      // Add the aurora animation
      animation: {
        "aurora": "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  // ... rest of your config
}
```

### 3. Add CSS Variables

Add these CSS variables to your `globals.css` file:

```css
:root {
  --white: rgb(245, 245, 245);
  --black: rgb(0, 0, 0);
  --transparent: transparent;
  --blue-300: rgb(147, 197, 253);
  --blue-400: rgb(96, 165, 250);
  --blue-500: rgb(59, 130, 246);
  --indigo-300: rgb(165, 180, 252);
  --violet-200: rgb(221, 214, 254);
}
```

### 4. Add the cn Utility (if you don't already have it)

Create a file at `lib/utils.ts`:

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

And install the required dependencies:

```bash
npm install clsx tailwind-merge
```

## Usage

Here's a simple example of how to use the Aurora Background component:

```tsx
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <AuroraBackground>
      <div className="z-10 relative flex flex-col items-center justify-center gap-5 p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Aurora Background
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl">
          A stunning background effect for your Next.js applications
        </p>
        <button className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition">
          Get Started
        </button>
      </div>
    </AuroraBackground>
  );
}
```

## License

MIT

## Credits

Inspired by [Aceternity's](https://aceternity.com/) UI components.
