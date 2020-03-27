# sapper blog example

Example blog using Sapper.

## Getting started

Clone the repo

```
hub clone joshnuss/sample-blog my-app
```

### Running the project

Install dependencies and run the project in development mode with:

```bash
cd my-app
yarn
yarn dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.


## Structure

Posts are stored in the `posts` folder and pages are in the `routes` folder


## Production mode and deployment

To generate a production version of your app, run `yarn export` and then deploy it. You can use any host, for example zeit: 

```bash
npm install -g now
yarn export
now
```

## License

MIT
