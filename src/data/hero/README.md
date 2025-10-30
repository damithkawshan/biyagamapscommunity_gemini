# Hero Images Directory

This directory contains images used in the hero slider on the homepage.

## How to Add Hero Images

To add new hero slider images, edit the `images.ts` file:

```typescript
import aerialView from "figma:asset/f5fdd1b35bad522e2d178bdf6e79e09f3ca96a82.png";

export const heroImages = [
  {
    url: aerialView,
    alt: "Biyagama Aerial View"
  },
  {
    url: "https://images.unsplash.com/photo-xxxxx?w=1920&q=80",
    alt: "Description of the image"
  },
  // Add more images here
];
```

## Image Guidelines

- **Resolution**: Use high-quality images (recommended: 1920x1080 or higher)
- **Aspect Ratio**: 16:9 works best for the hero slider
- **File Size**: Optimize images for web (aim for under 500KB)
- **Format**: JPG or PNG
- **Content**: Use images that represent Biyagama or municipal services

## Image Sources

1. **Figma Assets**: Import using `figma:asset/[hash].png`
2. **Unsplash**: Use URLs like `https://images.unsplash.com/photo-xxxxx?w=1920&q=80`
3. **Local Images**: Can be placed in this directory and imported

## Slider Settings

The hero slider automatically:
- Changes slides every 5 seconds
- Shows navigation arrows
- Displays dot indicators
- Applies a dark overlay for text readability

## Alt Text

Always provide descriptive alt text for accessibility. Use English for alt text.

Examples:
- "Biyagama Municipal Building"
- "Community Park in Biyagama"
- "Road Development Project"
