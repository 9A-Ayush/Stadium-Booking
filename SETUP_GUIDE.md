# Quick Setup Guide

## Installation & Running

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to `http://localhost:5173`

## What You'll See

### 1. Hero Section
- Navy blue gradient background
- Large headline: "Book Your Favorite Sports Stadium Easily"
- Descriptive subtitle
- Prominent amber "Book Now" button that scrolls to the form

### 2. Features Section
- Three feature cards on white background:
  - 📅 Easy Online Booking
  - ⚽ Multiple Sports Options
  - ⚡ Real-Time Availability
- Cards have hover effects (lift up with teal border)

### 3. Booking Form Section
- Clean white form card with shadow
- Three input fields:
  - Name (text input)
  - Sport Type (dropdown: Cricket, Football, Badminton)
  - Date (date picker)
- Validation on submit
- Success message displays after valid submission

### 4. Footer
- Navy blue background
- Copyright text

## Testing the Form

1. Click "Book Now" button - page scrolls to form
2. Try submitting empty form - see validation errors
3. Fill in all fields correctly
4. Submit - see green success message
5. Form resets automatically

## Responsive Testing

- **Desktop**: Full layout with 3-column feature grid
- **Tablet** (768px): Adjusted spacing and font sizes
- **Mobile** (480px): Single column layout, stacked features

## Color Scheme

- Primary Navy: #0F172A
- Secondary Teal: #14B8A6
- Accent Amber: #F59E0B
- Background: #F8FAFC
- White: #FFFFFF

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready for deployment.

## Deployment Options

- Vercel: `vercel deploy`
- Netlify: Drag & drop `dist` folder
- GitHub Pages: Use `gh-pages` package
- Any static hosting service

---

**Ready to go!** The project is production-ready and suitable for internship submission.
