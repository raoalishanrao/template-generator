# Intelligent Multi-Variation Template Generator

Node.js/TypeScript backend that generates **N** unique social media templates from a **niche**, **category**, and **count**, with image search, color extraction, and a simple UI that shows JSON output as **image previews in a grid**.

## Features

- **Content expansion (Gemini):** Generates N unique "Content Packages" with different density scores (1 = minimal, 5 = information-heavy).
- **Master skeletons:** Alpha (1 image + headline), Beta (image + headline + subhead + CTA), Gamma (3-image grid + headline + logo).
- **Semantic fitting:** Maps LLM text into skeleton element roles (HEADLINE, SUBHEAD, CTA, etc.).
- **Image & color:** Unsplash search per variation, dominant color extraction, `$VAR_PRIMARY` / `$VAR_ACCENT` and contrast (dark image → light text).
- **Strict JSON schema:** Metadata, canvas, content_slots, elements with position, dimensions, style, content, constraints.

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment variables**  
   Copy `.env.example` to `.env` and set:
   - `GEMINI_API_KEY` – from [Google AI Studio](https://aistudio.google.com/apikey)
   - `UNSPLASH_ACCESS_KEY` – from [Unsplash Developers](https://unsplash.com/developers)
   - `PORT` (optional, default `3000`)

3. **Build and run**
   ```bash
   npm run build && npm start
   ```
   Or for development:
   ```bash
   npm run dev
   ```

4. **Open**  
   http://localhost:3000

## Usage

- **Niche:** e.g. "Coffee Shop", "Fitness", "Cafe"
- **Category:** e.g. "Social" (default)
- **Templates to generate:** 1–5 (dropdown)
- Click **Generate** → backend calls Gemini + Unsplash, returns template JSON; the UI renders each template as a **preview in a grid**.

## API

**POST /api/generate**

Body (JSON):

```json
{
  "niche": "Coffee Shop",
  "category": "Social",
  "count": 2,
  "marketing_goal": "optional",
  "brand_assets": {
    "logo_url": "https://...",
    "colors": { "primary": "#hex", "accent": "#hex" }
  }
}
```

Response:

```json
{
  "templates": [
    {
      "metadata": { "id", "name", "category", "subCategory" },
      "canvas": { "width", "height", "color_palette" },
      "total_elements": 2,
      "content_slots": ["HEADLINE", "HERO_IMAGE"],
      "elements": [ ... ]
    }
  ]
}
```

## Project structure

- `src/index.ts` – Express server, `POST /api/generate`, static serve
- `src/engine/generateVariations.ts` – main `generateVariations(input)`
- `src/engine/contentExpansion.ts` – Gemini content packages
- `src/engine/skeletons.ts` – Alpha, Beta, Gamma master JSON
- `src/engine/semanticFitting.ts` – map content to roles
- `src/engine/imageService.ts` – Unsplash search
- `src/engine/colorExtraction.ts` – dominant color + contrast
- `src/types/schema.ts` – strict output types
- `public/` – frontend (form + grid + `render.js` canvas previews)
