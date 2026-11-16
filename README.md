# Hypermise

Hypermise is a Minecraft Bedrock optimization project. This repository contains the source for the Hypermise official website.

## Website stack

- TanStack Start
- React 19
- TypeScript
- Vite
- Tailwind CSS

## Requirements

- Node.js (current LTS recommended)
- Bun (the project includes `bun.lock` and `bunfig.toml`)

## Development

Using Bun:

```sh
bun install
bun run dev
```

Using npm:

```sh
npm install
npm run dev
```

## Validation

```sh
bun run lint
bun run test
bun run build
```

Equivalent npm commands are `npm run lint`, `npm test`, and `npm run build`.

## Project structure

- `src/routes/` — website pages
- `src/components/site/` — Hypermise-specific site components
- `src/components/ui/` — reusable UI components
- `src/content/site.ts` — site content
- `src/lib/` — shared utilities and download/SEO helpers
- `public/` — static public assets

## Performance claims

Hypermise aims to improve Minecraft Bedrock performance, but FPS depends on device hardware, game version, world, settings, and thermal conditions. No fixed FPS increase is guaranteed unless supported by repeatable benchmarks. Client render distance, simulation distance, and visual fog are distinct capabilities and should not be represented as interchangeable.

## Downloads and compatibility

Only publish add-on files that have been tested against the stated Minecraft Bedrock version. Clearly label known limitations and do not claim full block or texture coverage without validation.

## License

No license has been specified yet. All rights remain with their respective authors unless a license is added.
