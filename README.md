A personal website where you can find information about me and read my blog.

![Project preview](./src/og-image.png 'Project preview')

## 🧰 Tech Stack

- Core: [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Content: [Contentlayer](https://contentlayer.dev/), [Shiki](https://shiki.matsu.io/), [Rehype Pretty Code](https://rehype-pretty-code.netlify.app/)
- Linting: [ESlint](https://eslint.org/), [Prettier](https://prettier.io/),
- Deployment: [Vercel](https://vercel.com/)

## 💻 Development

### Scripts

#### Development

| Script          | Description                            |
| --------------- | -------------------------------------- |
| `npm run dev`   | Starts Next.js development server.     |
| `npm run build` | Creates a production build of Next.js. |
| `npm start`     | Serves production build locally.       |

#### Testing & Linting

| Script                 | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| `npm run typecheck`    | Runs TypeScript and checks typing of source code.     |
| `npm run lint`         | Runs ESLint and lints all code.                       |
| `npm run format`       | Runs Prettier and formats all code.                   |
| `npm run format:check` | Runs Prettier and checks all code for bad formatting. |

### Project structure

- `content` - Content of the project such as posts.
- `src` - Source code of the project.
  - `app` - App routing.
    - `<segment>`
      - `_components` - Segment specific components.
  - `components` - Shared app components.
  - `content` - Utilities for working with app content.
  - `lib` - Modules that are separated from the app and can be reused across projects. They can't depend on app specific code.
    - `ui` - Design system and UI kit.

### Environment variables

#### Client side

| Name                   | Description |
| ---------------------- | ----------- |
| `NEXT_PUBLIC_SITE_URL` | Base URL    |
