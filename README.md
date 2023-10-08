# ufssd-website

A `React`/`Next.js` project for [https://ufssd.org](https://ufssd.org) using
Static Site Generation (SSG).

## Overview

This project aims to help students learn software engineering and web
development through rebuilding the [UFSSD](https://ufssd.org) website. Team
members will work through four 2-week sprints where they will use Agile
processes, ticket issues, create and review PRs, and utilize other industry
practices for software development.

### Tech Stack

The core framework is `React`/`Next.js` and Static Site Generation (SSG).
Additional technologies used are `CSS Modules`/`Tailwind CSS` (styling),
`ESLint`/`Prettier` (linting), and `GitHub Pages` (deployment). As the project
progresses this may expand to fulfill other needs like testing and CI/CD.

## Quickstart

<details>
  <summary>Prerequisites:</summary>

 1. Install [Git](https://git-scm.com/download) and configure for [GitHub](https://docs.github.com/en/get-started/quickstart/set-up-git).
 2. Install a [recent (16.14+)](https://nextjs.org/docs/getting-started/installation) version of [Node.js](https://nodejs.org/en/download) (latest v20 recommended).
     - Alternatively, use [nvm](https://github.com/nvm-sh/nvm)/[nvm-windows](https://github.com/coreybutler/nvm-windows) if you need to support multiple Node versions.
 3. (Recommended) Install an IDE of your choice (e.g. [Webstorm](https://www.jetbrains.com/webstorm/)/[VSCode](https://code.visualstudio.com/)).
 4. (Recommended) Install React Developer Tools for the browser of your choice (e.g. [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)).
</details>

Project Installation:
 1. Use `git clone https://github.com/ufssd/ufssd-webiste` to clone the project.
 2. Run `npm install` to install dependencies.
 3. Run `npm run dev` to start the development server.
 4. Visit `localhost:3000` to view the website.

### Notable Commands

 - `npm run dev`: Starts the development server at `localhost:3000`
 - `npm run build`: Builds an exported static site to `/out`
 - `npm run lint`: Runs eslint/prettier checking over `/src`
    - `npm run lint:fix`: Fixes any auto-fixable lint errors
