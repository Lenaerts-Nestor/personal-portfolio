# Project Modal UX Improvements - Implementation Guide

> **Goal**: Fix modal positioning, scroll lock, and sizing issues. Standardize summary layouts using existing design system.
> **Criteria**: Don't break existing sections. Keep design simple and professional. Use existing design tokens.

---

## 🎯 Quick Summary

**Current Issues:**
1. Modal opens in center of section instead of screen center
2. Background scrolling not fully locked
3. Modal feels cramped (max-w-4xl = 896px)
4. Inconsistent styling between custom summaries

**Files to Modify:**
- `src/components/home/sections/projects-sections.tsx` - Add React Portal
- `src/components/home/sections/projects/project-private-modal.tsx` - Fix positioning, scroll lock, sizing
- `src/utils/project-summaries/amotrack-summary.tsx` - Standardize styling
- `src/constants/design-tokens.ts` - Add modal tokens (optional)

---

## 🔧 Implementation Steps

### ✅ STEP 1: Fix Modal Positioning with React Portal

**File**: `src/components/home/sections/projects-sections.tsx`

**Current Code** (lines 100-104):
```tsx
<ProjectModal
  project={selectedProject}
  isOpen={isModalOpen}
  onClose={closeModal}
/>
```

**Replace With**:
```tsx
import { createPortal } from 'react-dom';

// ... inside component JSX, after the closing </Section> tag:

{typeof document !== 'undefined' && createPortal(
  <ProjectModal
    project={selectedProject}
    isOpen={isModalOpen}
    onClose={closeModal}
  />,
  document.body
)}
```

**Why**: Renders modal at document root level, ensuring `fixed` positioning works correctly relative to viewport, not section.

---

### ✅ STEP 2: Enhance Scroll Lock & Fix Layout Shift

**File**: `src/components/home/sections/projects/project-private-modal.tsx`

**Current Code** (lines 30-39):
```tsx
if (isOpen) {
  document.addEventListener('mousedown', handleClickOutside);
  document.body.style.overflow = 'hidden';
}

return () => {
  document.removeEventListener('mousedown', handleClickOutside);
  document.body.style.overflow = 'auto';
};
```

**Replace With**:
```tsx
if (isOpen) {
  document.addEventListener('mousedown', handleClickOutside);

  // Enhanced scroll lock with scrollbar compensation
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = `${scrollbarWidth}px`;
  document.body.style.touchAction = 'none'; // Prevent mobile scrolling
}

return () => {
  document.removeEventListener('mousedown', handleClickOutside);
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
  document.body.style.touchAction = '';
};
```

**Why**: Prevents layout shift caused by scrollbar disappearing and blocks touch scrolling on mobile.

---

### ✅ STEP 3: Increase Modal Size & Improve Backdrop

**File**: `src/components/home/sections/projects/project-private-modal.tsx`

#### 3.1 Update Backdrop (line 72):
**Current**:
```tsx
className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm'
```

**Replace With**:
```tsx
className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md'
```

#### 3.2 Update Modal Container (line 80):
**Current**:
```tsx
className='relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col'
```

**Replace With**:
```tsx
className='relative w-full max-w-[95vw] sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl max-h-[92vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col'
```

#### 3.3 Improve Content Padding (line 119):
**Current**:
```tsx
<div className='flex-1 overflow-y-auto p-6'>
```

**Replace With**:
```tsx
<div className='flex-1 overflow-y-auto p-6 md:p-8'>
```

**Why**:
- Responsive sizing from mobile to 4K displays
- Smoother border radius (`rounded-2xl`)
- Better backdrop for focus
- More breathing room on desktop

---

### ✅ STEP 4: Standardize Summary Component Styling

**Goal**: Make AmoTrack summary styling match CVO's cleaner layout.

**File**: `src/utils/project-summaries/amotrack-summary.tsx`

#### 4.1 Fix Technology Badges (lines 55-65):

**Current**:
```tsx
<div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
  {['React', 'TypeScript', 'Node.js', 'Fastify', 'PostgreSQL', 'Drizzle ORM', 'Swagger', 'Git'].map(
    (tech, index) => (
      <div key={index} className='flex items-center space-x-2 bg-gray-100 dark:bg-gray-700/60 p-2 rounded-md shadow-sm'>
        {renderTechIcon(tech)}
        <span className='text-sm text-gray-800 dark:text-gray-200'>{tech}</span>
      </div>
    )
  )}
</div>
```

**Replace With** (match CVO style):
```tsx
<div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
  {['React', 'TypeScript', 'Node.js', 'Fastify', 'PostgreSQL', 'Drizzle ORM', 'Swagger', 'Git'].map(
    (tech, index) => (
      <span
        key={index}
        className='flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-lg'
      >
        {renderTechIcon(tech)}
        {tech}
      </span>
    )
  )}
</div>
```

**Changes**:
- `<div>` → `<span>` (more semantic for inline badges)
- `space-x-2` → `gap-2` (consistent spacing)
- `rounded-md` → `rounded-lg` (matches site design system)
- Removed `shadow-sm` (cleaner look)
- Added `font-medium` (better text hierarchy)

---

### ✅ STEP 5: Improve Modal Animation

**File**: `src/components/home/sections/projects/project-private-modal.tsx`

**Current** (line 81-84):
```tsx
initial={{ scale: 0.9, y: 20, opacity: 0 }}
animate={{ scale: 1, y: 0, opacity: 1 }}
exit={{ scale: 0.9, y: 20, opacity: 0 }}
transition={{ type: 'spring', damping: 25, stiffness: 300 }}
```

**Replace With** (smoother, more professional):
```tsx
initial={{ scale: 0.96, y: 20, opacity: 0 }}
animate={{ scale: 1, y: 0, opacity: 1 }}
exit={{ scale: 0.96, y: 20, opacity: 0 }}
transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.8 }}
```

**Why**: Subtler scale (0.96 vs 0.9), snappier spring with better damping.

---

## 🎨 Optional Enhancement: Add Modal Design Tokens

**File**: `src/constants/design-tokens.ts`

**Add at the end of file**:
```typescript
export const modal = {
  backdrop: {
    overlay: 'bg-black/70 backdrop-blur-md',
    zIndex: 'z-50',
  },
  container: {
    shadow: 'shadow-2xl',
    border: 'border border-gray-200 dark:border-gray-700',
    radius: 'rounded-2xl',
    maxWidth: {
      responsive: 'max-w-[95vw] sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl',
    },
    maxHeight: 'max-h-[92vh]',
  },
  spacing: {
    padding: 'p-6 md:p-8',
    contentGap: 'space-y-6',
  },
} as const;

export type ModalToken = typeof modal;
```

**Then Update Modal Component**:
```tsx
import { modal } from '../../../../constants/design-tokens';

// Use tokens in className:
className={`relative w-full ${modal.container.maxWidth.responsive} ${modal.container.maxHeight} bg-white dark:bg-gray-800 ${modal.container.radius} ${modal.container.shadow} ${modal.container.border} overflow-hidden flex flex-col`}
```

**Why**: Centralizes modal styling for easier maintenance and consistency.

---

## ✅ Testing Checklist

After implementation, verify:

### Functional
- [ ] Modal opens centered on **viewport** (not section)
- [ ] Background scroll is **completely disabled**
- [ ] Clicking outside modal closes it
- [ ] Pressing Escape key closes modal
- [ ] No layout shift when modal opens (scrollbar compensation working)
- [ ] Mobile: No background scrolling via touch

### Visual
- [ ] Modal feels spacious on desktop (not cramped)
- [ ] Backdrop is darker and more prominent
- [ ] Border radius is smooth (`rounded-2xl`)
- [ ] Technology badges match between AmoTrack and CVO
- [ ] Animation is smooth and professional
- [ ] Dark mode works correctly

### Responsive
- [ ] Mobile (< 640px): Modal uses most of screen width
- [ ] Tablet (768px): Reasonable size
- [ ] Desktop (1024px+): Large but not overwhelming
- [ ] 4K screens: Doesn't get too large

---

## 📊 Before/After Comparison

### Modal Dimensions:
| Breakpoint | Before | After |
|------------|--------|-------|
| Mobile | 100% width | 95vw |
| Tablet (768px) | 896px | 768px (max-w-3xl) |
| Desktop (1024px) | 896px | 1024px (max-w-5xl) |
| Large (1280px+) | 896px | 1152px (max-w-6xl) |

### Visual Changes:
- **Backdrop**: `bg-black/60 blur-sm` → `bg-black/70 blur-md` (better focus)
- **Border**: None → `border border-gray-200` (subtle definition)
- **Radius**: `rounded-xl` → `rounded-2xl` (smoother)
- **Height**: `max-h-[90vh]` → `max-h-[92vh]` (more vertical space)

---

## 🚫 What NOT to Change

- ❌ Don't modify project card design
- ❌ Don't change section layouts
- ❌ Don't alter hero image size/ratio
- ❌ Don't add complex gestures (swipe to close, etc.)
- ❌ Don't create new component folders
- ❌ Don't modify other sections (education, experience, etc.)
- ❌ Don't change color scheme or brand colors
- ❌ Don't add unnecessary animations

---

## 📁 File Reference

```
src/
├── components/
│   ├── home/
│   │   └── sections/
│   │       ├── projects-sections.tsx        ← Add React Portal here
│   │       └── projects/
│   │           └── project-private-modal.tsx ← Main modal fixes
│   └── ui/
│       └── Card.tsx                          ← Reference for design system
├── utils/
│   └── project-summaries/
│       ├── amotrack-summary.tsx              ← Standardize badges
│       └── cvo-summary.tsx                   ← Reference for clean style
└── constants/
    └── design-tokens.ts                      ← Add modal tokens (optional)
```

---

## 🎯 Success Criteria

✅ **Modal centers on screen viewport**
✅ **No background scrolling (desktop & mobile)**
✅ **Modal feels spacious with proper breathing room**
✅ **Consistent badge styling across summaries**
✅ **Smooth, professional animations**
✅ **No layout shifts or jank**
✅ **Works perfectly in dark mode**
✅ **Responsive across all devices**
✅ **Maintains existing design language**

---

## 💡 Implementation Tips for AI Agent

1. **Start with Step 1**: Portal implementation is critical for all other fixes
2. **Test scroll lock**: Check both desktop and mobile after Step 2
3. **Review responsive sizing**: Adjust breakpoints in Step 3 if needed
4. **Don't rush**: Complete each step before moving to next
5. **Preserve translations**: Don't modify any `t('...')` translation keys
6. **Check imports**: Ensure `createPortal` is imported from `react-dom`
7. **Dark mode**: Test all changes in both light and dark modes
8. **Git commit**: Commit after each major step for easy rollback

---

**Document Version**: 2.0
**Last Updated**: 2025-11-14
**Status**: Ready for Implementation
**Estimated Time**: 30-45 minutes
