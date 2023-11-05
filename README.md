A personal website where you can find information about me and read my blog.

![Project preview](./app/og-image.png 'Project preview')

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

### Environment variables

#### Client side

| Name                   | Description |
| ---------------------- | ----------- |
| `NEXT_PUBLIC_SITE_URL` | Base URL    |
