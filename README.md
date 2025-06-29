# Profast

Profast is a modern, full-stack React application template designed for fast parcel delivery and logistics services. It leverages React Router for routing, TailwindCSS for styling, and includes a beautiful Catppuccin theme switcher for a customizable user experience.

## Features

- 🚀 **Server-side rendering** with React Router
- ⚡️ **Hot Module Replacement (HMR)** for rapid development
- 🎨 **Catppuccin theme switcher** (Latte, Frappe, Macchiato, Mocha)
- 📦 **Asset bundling and optimization**
- 🔄 **Data loading and mutations**
- 🔒 **TypeScript** by default
- 💅 **TailwindCSS** and shadcn/ui for modern UI components
- 🗺️ **Parcel delivery, reviews, and warehouse data**

## Getting Started

### Installation

Install dependencies:

```bash
pnpm install
# or
npm install
```

### Development

Start the development server:

```bash
pnpm run dev
# or
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

Create a production build:

```bash
pnpm run build
# or
npm run build
```

### Docker Deployment

Build and run using Docker:

```bash
docker build -t profast .
docker run -p 3000:3000 profast
```

## Project Structure

```
front-end/
  app/
    components/ui/      # Reusable UI components (Button, Dialog, Switch, ThemeSwitcher)
    lib/                # Utility functions
    routes/             # App routes (e.g., home)
    public/             # Static assets (images, animations, data)
    app.css             # TailwindCSS and theme variables
    root.tsx            # App layout and theme switcher integration
  package.json          # Project dependencies and scripts
  tsconfig.json         # TypeScript configuration
  vite.config.ts        # Vite configuration
```

## Styling & Theming

- Uses **TailwindCSS** for utility-first styling
- **Catppuccin** color palette with four variants
- Theme switcher in the UI (top-right corner)
- Customizable via CSS variables in `app/app.css`

## Scripts

- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
- `typecheck` - TypeScript type checking

## Credits

- [React Router](https://reactrouter.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Catppuccin](https://catppuccin.com/)

---

**Profast** – Fast, modern, and beautiful parcel delivery platform starter.
