# Weather Project — Deployment

This site is deployed to **GitHub Pages** at:
👉 https://sannua.github.io/weather-project/

---

## How it was deployed

The project uses the [`gh-pages`](https://github.com/tschaub/gh-pages) npm package to publish the production build directly to the `gh-pages` branch of this repository.

The relevant configuration lives in [`package.json`](https://github.com/SannUA/weather-project/blob/master/package.json) (on the `master` branch):

```json
"homepage": "https://SannUA.github.io/weather-project",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Running `npm run deploy` on the `master` branch will:
1. Build the production bundle (`npm run build`)
2. Publish the contents of the `build/` folder to the `gh-pages` branch

GitHub Pages is configured to serve files from this `gh-pages` branch.

---

## Automated deployment (GitHub Actions)

A GitHub Actions workflow has been added at
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
that automatically builds and deploys the site whenever code is pushed to the `master` branch.
