# ElectroHub Frontend Setup

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Available Scripts

- `npm run dev` - Start Vite dev server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Key Files

- `src/App.jsx` - Main app component
- `src/components/` - Reusable components
- `src/data/products.js` - Product data
- `src/store/cartStore.js` - Zustand store for cart
- `tailwind.config.js` - Tailwind CSS config
- `vite.config.js` - Vite configuration

## Dependencies

- React 18.2 - UI library
- Tailwind CSS 3.3 - Styling
- Zustand 4.4 - State management
- Axios - HTTP client
- React Router - Navigation
- Lucide Icons - Icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips

1. Update `vite.config.js` if backend URL changes
2. Replace placeholder images in `src/data/products.js`
3. Customize colors in `tailwind.config.js`
4. Add more components in `src/components/`
