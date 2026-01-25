# RTL + Arabic/English Plan

## Goals
- Add Arabic and English content support.
- Enable RTL layout for Arabic and LTR for English.
- Provide a simple language switch that updates content and layout.

## Implementation Steps
1. **Locate text sources**
   - Find all hard-coded UI strings and identify data-driven text (likely `data/cv.json` and component labels).
   - Decide which strings should be translated and which should remain unchanged.

2. **Add language data**
   - Extend `data/cv.json` with Arabic translations (e.g., `title_en`/`title_ar`, or nested `i18n` objects).
   - Create a small dictionary for UI labels that are not in `cv.json`.

3. **Language state and toggle**
   - Add a language state (e.g., `en`/`ar`) at the app root.
   - Add a toggle in `Navbar` to switch language.

4. **RTL/LTR layout**
   - Set `dir="rtl"` on the HTML/root container when language is Arabic.
   - Add Tailwind RTL utilities or custom CSS for direction-aware spacing/alignment.

5. **Wire content**
   - Update components (e.g., `Navbar`, `Projects`, `Footer`) to read translated strings based on selected language.

6. **Validation**
   - Check Arabic layout for proper alignment and spacing.
   - Verify English remains LTR and layout is unchanged.

## File Impact (expected)
- `app/layout.tsx` (set direction, provide language state)
- `components/Navbar.tsx` (toggle)
- `components/*` (read localized strings)
- `data/cv.json` (add Arabic translations)
- `app/globals.css` or `tailwind.config.js` (RTL helpers if needed)
