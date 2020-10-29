# Sapper blog example

Example markdown-style blog using Sapper.

## Links

- DEV article
  - [Part 1 - Setup](https://dev.to/joshnuss/create-a-blog-with-markdown-sapper-50ad)
  - [Part 2 - Tags](https://dev.to/joshnuss/create-a-blog-with-sapper-markdown-part-2-31m4)
- YouTube screencast:
  - [Part 1 - Setup](https://youtu.be/9dSrsDdHyHg)
  - [Part 2 - Tags](https://youtu.be/PGLsFfBf1UA)

## Getting started

Clone the repo

```
npx degit joshnuss/sample-blog my-blog
```

### Running the project

Install dependencies and run the project in development mode with:

```bash
cd my-blog
yarn
yarn dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.


## Structure

Posts are stored in the `posts` folder and pages are in the `src/routes` folder


## Production mode and deployment

To generate a production version of your app, run `yarn export` and then deploy it. You can use any host, for example zeit `npm install -g vercel`: 

```bash
yarn export
vercel
```

## License

MIT
