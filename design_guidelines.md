# Design Guidelines: Manifestation & Spiritual Practice App

## Design Approach

**Selected Approach:** Reference-Based with Spiritual Wellness Focus

Drawing inspiration from premium meditation and spiritual apps (Calm, Insight Timer, Headspace) while incorporating New Thought spiritual aesthetics. The design emphasizes serenity, elegance, and transformative experiences through thoughtful visual hierarchy and calming interactions.

**Core Design Principles:**
- Sacred simplicity: Clean, uncluttered spaces that honor the spiritual practice
- Purposeful elegance: Every element serves the user's manifestation journey
- Grounded serenity: Calming without being overly mystical or New Age cliché

---

## Color Palette

### Light Mode
- **Primary Background:** 252 100% 98% (soft lavender white)
- **Secondary Background:** 270 60% 96% (light purple mist)
- **Card/Surface:** 0 0% 100% (pure white with subtle shadow)
- **Primary Brand:** 270 70% 65% (gentle royal purple)
- **Accent (use sparingly):** 280 45% 75% (soft amethyst)
- **Text Primary:** 270 15% 25% (deep purple-gray)
- **Text Secondary:** 270 10% 50% (medium purple-gray)
- **Border/Divider:** 270 20% 90% (barely-there lavender)

### Dark Mode
- **Primary Background:** 270 25% 12% (deep midnight purple)
- **Secondary Background:** 270 20% 16% (slightly lighter dark purple)
- **Card/Surface:** 270 18% 20% (elevated dark surface)
- **Primary Brand:** 270 60% 75% (bright lavender)
- **Accent (use sparingly):** 280 50% 70% (luminous amethyst)
- **Text Primary:** 270 15% 95% (near-white with purple tint)
- **Text Secondary:** 270 10% 70% (muted lavender-gray)
- **Border/Divider:** 270 15% 25% (subtle dark border)

**Color Philosophy:** Avoid metallic gold accents - they can appear garish. Instead, use warm cream tones (45 30% 92%) for subtle richness when needed.

---

## Typography

**Font Stack:**
- **Primary (Headings):** 'Cormorant Garamond', serif - elegant, spiritual
- **Secondary (Body):** 'Inter', sans-serif - clean, readable
- **Accent (Special quotes):** 'Crimson Text', serif - for affirmation displays

**Scale:**
- Hero/Display: text-5xl md:text-6xl (60-72px)
- H1: text-4xl md:text-5xl (48-60px)
- H2: text-3xl md:text-4xl (36-48px)
- H3: text-2xl (30px)
- Body Large: text-lg (18px)
- Body: text-base (16px)
- Small: text-sm (14px)

**Weights:** Regular (400), Medium (500), Semibold (600)

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 24
- Tight spacing: p-4, gap-4
- Comfortable: p-6, p-8
- Generous: p-12, py-16, py-24
- Section padding: py-16 md:py-24

**Container Strategy:**
- Max width: max-w-6xl for main content
- Forms/focused content: max-w-2xl
- Dashboard cards: max-w-7xl with grid layouts

**Grid Patterns:**
- Mobile: Single column (grid-cols-1)
- Tablet: 2 columns where appropriate (md:grid-cols-2)
- Desktop: 3 columns for feature cards (lg:grid-cols-3)

---

## Component Library

### Navigation
- Minimal top nav with logo (stylized sacred geometry icon) + user menu
- Sticky header with glass-morphism effect (backdrop-blur-md)
- Subtle shadow on scroll

### Forms & Inputs
- Rounded corners (rounded-lg to rounded-xl)
- Soft focus rings (ring-2 ring-purple-400/30)
- Large touch targets (min-h-12)
- Textarea for desires/goals with ample height
- Floating labels or clear top-aligned labels
- Dark mode: Inputs with slightly lighter background than page

### Cards & Surfaces
- Gentle shadows (shadow-sm to shadow-lg, never harsh)
- Border option: border border-purple-100/50 dark:border-purple-800/30
- Padding: p-6 md:p-8 for content cards
- Hover: Subtle lift (hover:shadow-xl transition-shadow)

### Visualization Scripts Display
- Full-width card with generous padding (p-8 md:p-12)
- Script text in serif font, larger size (text-lg md:text-xl)
- Line height: leading-relaxed (1.625)
- Max width for readability: max-w-3xl mx-auto
- Gentle background gradient or subtle pattern

### Affirmation Cards
- Quote-style presentation
- Large, elegant serif typography
- Centered alignment
- Optional decorative quotation marks (CSS)
- Border accent on left side (border-l-4 border-purple-500)

### Action Items
- Checklist style with custom checkboxes
- Each item in its own card (p-4, rounded-lg)
- Icon indicators (checkmark, star, bell)
- Completion state with fade/strikethrough

### 30-Day Calendar/Tracker
- Grid layout (7 columns for week view)
- Each day as clickable card
- Visual progress indicators (completed, current, upcoming)
- Subtle color coding (completed: green tint, current: purple glow)

### Buttons
- Primary: Solid purple with white text (rounded-full, px-8 py-3)
- Secondary: Outline with purple border
- Ghost: Text-only for tertiary actions
- Icon buttons: Square (w-10 h-10) with rounded-lg
- CTA buttons: Slightly larger (px-10 py-4, text-lg)

### Modals & Overlays
- Backdrop blur (backdrop-blur-sm)
- Centered card with max-w-2xl
- Smooth entrance animation (scale + fade)
- Close button top-right

### Progress Indicators
- Circular progress for day completion
- Linear progress bar for 30-day journey
- Soft gradients (purple to lavender)

---

## Images

**Hero Image:** Yes - include a serene, atmospheric hero image
- Placement: Full-width hero section on landing/home
- Subject: Abstract spiritual imagery - soft light rays, peaceful nature scenes (NOT cliché lotus/Buddha), ethereal cloudscapes, or gentle water reflections
- Treatment: Overlay with gradient (from transparent to background color)
- Overlay text: Centered, large serif headline with subtitle

**Supporting Images:**
- Dashboard background: Subtle, low-opacity textural pattern or soft gradient
- Empty states: Minimalist line illustrations of meditation, journaling
- 30-day program cards: Abstract icon-style illustrations, not photos

---

## Animations

**Minimal & Purposeful:**
- Page transitions: Gentle fade (duration-300)
- Card hover: Subtle lift (transform translate-y-1)
- Button interaction: Scale on press (active:scale-95)
- Modal entry: Scale + fade (transition-all duration-200)
- Progress bars: Smooth fill animation
- **Avoid:** Spinning elements, bouncing, excessive parallax

---

## Special Treatments

### Affirmation Display
- Consider glass-morphism card effect for featured affirmation
- Background: rgba with backdrop-blur
- Subtle border glow

### Visualization Script Reveal
- Progressive text reveal option (word by word) for immersive reading
- Or static display with excellent typography

### 30-Day Program Prompt
- Modal or slide-up panel
- Clear benefits listed
- Single prominent CTA button
- Non-intrusive dismissal option

---

## Accessibility & Dark Mode

- All dark mode colors maintain WCAG AA contrast ratios
- Form inputs clearly visible in both modes
- Focus indicators prominent (ring-2 ring-offset-2)
- Reduced motion option respected for animations
- Semantic HTML for screen readers

---

## Page-Specific Layouts

### Home/Landing
- Hero with spiritual image + headline + CTA
- 3-column feature cards (Visualizations, Affirmations, 30-Day Programs)
- How it works section (numbered steps)
- Testimonial/quote carousel (minimal, elegant)
- Footer with simple links

### Input Form Page
- Centered, max-w-2xl container
- Single-column form with clear sections
- Progress indicator if multi-step
- Sticky CTA button at bottom

### Results Display (Visualizations + Affirmations)
- Two-column layout on desktop (lg:grid-cols-2)
- Visualization script on left, affirmations on right
- Action items below, full width
- 30-day program prompt as modal overlay

### Dashboard
- Card-based layout
- Current day's practice prominently featured
- Progress calendar/tracker
- Quick access to past visualizations
- Stats/streak counter with subtle celebration

---

**Overall Aesthetic:** Sophisticated spiritual wellness app that feels premium, calming, and transformative - avoiding New Age clichés while honoring the profound teachings of Goddard and Shinn.