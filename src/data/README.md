# Data Directory

This directory contains all dynamic content for the Biyagama Pradeshiya Sabha website.

## Structure

```
/data
├── hero/           # Hero slider images
│   ├── images.ts   # Hero image configuration
│   └── README.md   # Hero images guide
├── news/           # News articles
│   ├── news_1.ts   # Individual news items
│   ├── news_2.ts
│   ├── news_3.ts
│   ├── news_4.ts
│   ├── index.ts    # Exports all news items
│   └── README.md   # News data guide
└── README.md       # This file
```

## Quick Start

### Adding News Articles

1. Navigate to `/data/news/`
2. Create a new file: `news_[number].ts`
3. Copy the structure from existing news files
4. Add your content in English, Sinhala, and Tamil
5. Import the new file in `/data/news/index.ts`

See `/data/news/README.md` for detailed instructions.

### Adding Hero Images

1. Navigate to `/data/hero/`
2. Edit `images.ts`
3. Add new image objects to the `heroImages` array
4. Provide image URL and alt text

See `/data/hero/README.md` for detailed instructions.

## Features

### Multilingual Support

All content supports three languages:
- English (en)
- Sinhala (si)
- Tamil (tm)

The website automatically displays content in the user's selected language.

### Automatic Updates

- News items added to `/data/news/` automatically appear on:
  - Newsletter page
  - Latest Updates carousel (homepage)
  - Announcements carousel (homepage)

- Hero images added to `/data/hero/images.ts` automatically appear in the hero slider

## Content Guidelines

### News Articles

- Keep headlines concise (under 100 characters)
- Write clear, informative summaries (2-3 sentences)
- Provide detailed content in the full article
- Use relevant, high-quality images
- Date format: YYYY-MM-DD

### Hero Images

- Use high-resolution images (1920x1080 or higher)
- Ensure images represent Biyagama or municipal services
- Optimize file sizes for web performance
- Provide descriptive alt text for accessibility

## Technical Details

### News Data Structure

```typescript
{
  date: string;           // YYYY-MM-DD
  heading: {
    en: string;
    si: string;
    tm: string;
  };
  summary: {
    en: string;
    si: string;
    tm: string;
  };
  content: {
    en: string;
    si: string;
    tm: string;
  };
  image: string;          // URL
}
```

### Hero Image Structure

```typescript
{
  url: string;           // Image URL or import
  alt: string;           // Alt text (English)
}
```

## Best Practices

1. **Translations**: Ensure translations are accurate and culturally appropriate
2. **Images**: Use royalty-free images or properly licensed content
3. **Dates**: Use ISO date format (YYYY-MM-DD) for consistency
4. **Testing**: Preview content in all three languages before publishing
5. **Backup**: Keep backups of content before making changes

## Support

For questions or issues with content management:
1. Check the README files in each subdirectory
2. Review existing content files as examples
3. Ensure proper TypeScript syntax and structure
