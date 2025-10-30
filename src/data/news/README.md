# News Data Directory

This directory contains all news items for the Biyagama Pradeshiya Sabha website.

## How to Add News

To add a new news item:

1. Create a new file named `news_[number].ts` (e.g., `news_5.ts`)
2. Follow this structure:

```typescript
export const news5 = {
  date: "2025-10-30", // Format: YYYY-MM-DD
  heading: {
    en: "Your English Heading",
    si: "ඔබේ සිංහල මාතෘකාව",
    tm: "உங்கள் தமிழ் தலைப்பு"
  },
  summary: {
    en: "English summary of the news article.",
    si: "පුවත් ලිපියේ සිංහල සාරාංශය.",
    tm: "செய்தி கட்டுரையின் தமிழ் சுருக்கம்."
  },
  content: {
    en: `Full English content goes here. You can write multiple paragraphs.
    
Each paragraph should be separated by a blank line.

This makes the content more readable.`,
    si: `සම්පූර්ණ සිංහල අන්තර්ගතය මෙහි යයි. ඔබට ඡේද කිහිපයක් ලිවිය හැකිය.

සෑම ඡේදයක්ම හිස් රේඛාවකින් වෙන් කළ යුතුය.

මෙය අන්තර්ගතය වඩාත් කියවිය හැකි බවට පත් කරයි.`,
    tm: `முழு தமிழ் உள்ளடக்கம் இங்கே செல்கிறது. நீங்கள் பல பத்திகளை எழுதலாம்.

ஒவ்வொரு பத்தியும் வெற்று வரியால் பிரிக்கப்பட வேண்டும்.

இது உள்ளடக்கத்தை மேலும் படிக்கக்கூடியதாக ஆக்குகிறது.`
  },
  image: "https://images.unsplash.com/photo-xxxxx?w=800&q=80" // Image URL
};
```

3. Import the new news item in `index.ts`:

```typescript
import { news5 } from './news_5';

export const allNews = [news1, news2, news3, news4, news5];
```

## Image Guidelines

- Use high-quality images (minimum 800px wide)
- Images from Unsplash work well: `https://images.unsplash.com/photo-xxxxx?w=800&q=80`
- Ensure images are relevant to the news content
- Maintain consistent aspect ratio (16:9 or 16:10)

## Date Format

- Always use YYYY-MM-DD format
- Example: `2025-10-30`

## Translation Tips

- Keep translations consistent in meaning across all three languages
- Maintain similar length for better UI display
- Use proper Unicode characters for Sinhala and Tamil
