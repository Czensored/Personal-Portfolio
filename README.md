# SSH Portfolio

This is my personal portfolio site built with React and Vite, but styled to feel like a terminal app instead of a typical portfolio website.

The content is driven by `config.yaml`, so projects, experience, contact info, resume links, and media can all be updated without digging through the UI code every time.

## What This Project Is

This repo is the web version of a terminal-style portfolio. The goal was to keep the CLI feel while making it easier to share as a normal website.

A few things it supports right now:

- terminal-inspired navigation and layout
- portfolio content loaded from `config.yaml`
- project screenshots, GIFs, and videos
- resume and other static files served from `public/`
- Docker support for running the built site with nginx

## Run With Docker Compose

If you already have Docker installed, this is the easiest way to run it:

```bash
docker compose up --build
```

Then open:

```text
http://localhost:8080
```

To stop it:

```bash
docker compose down
```

## Run With Docker

If you want to build and run it without Compose:

```bash
docker build -t ssh-portfolio .
docker run --rm -p 8080:80 ssh-portfolio
```

Then open:

```text
http://localhost:8080
```

## Run Locally

If you want the normal local dev workflow:

```bash
npm install
npm run dev
```

Vite will give you a local URL, usually:

```text
http://localhost:5173
```

For a production build:

```bash
npm run build
```

## Updating Content

Most of the portfolio content lives in:

```text
config.yaml
```

If you want to add static files like a resume, screenshots, GIFs, or videos, put them in:

```text
public/
```

Then reference them in `config.yaml` with root-relative paths, for example:

```yaml
resume: "/Prasen-Shakya-Resume.pdf"
```

```yaml
media:
  - type: "image"
    src: "/media/schedulify-demo.gif"
    alt: "Schedulify demo"
    caption: "Event creation flow"
```

## Project Structure

- `src/` contains the React app
- `config.yaml` contains the portfolio content
- `public/` contains images, GIFs, videos, and PDFs
- `Dockerfile` builds the site and serves it with nginx
- `docker-compose.yml` runs the container on port `8080`
