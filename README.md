# Node TypeORM Template
This template gets you started with Node.js TypeORM Postgres faster.

## Requirements
- [Node v18+](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Running the app
set up the development environment with the following steps

1. clone the repository
2. Run `npm i` command
3. create a `.env` file in the root directory and copy the contents of `.env.example` into it
4. Run `npm run docker:build` command, to build the docker container
5. Run `npm run docker:run` command, to run the docker container

## Commit message format
Commit messages must meet [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) format.
Run `npm run prepare` to install husky hooks.

## Migrations
Set `syncDatabase` to `false` in [data-source.ts](src/data-source.ts) to enable migrations. Then run the following commands
- Run `npm run migration:generate -- ./src/migrations/<migration-name>` to generate a migration file. For example `npm run migration:generate -- ./src/migrations/create-users-table`
- Run `npm run migration:run` to run migrations
- Run `npm run migration:revert` to revert migrations
