# lukaskurz.com - My personal website

![Drag Racing](src/assets/projects/lukaskurz.png)

### Description

This is my personal website, a static landing page.
As you might notice, not only is this written in Angular, but it also uses Angular Universal. "Angular for a static landing page?" you might ask. And yes you are right, it's overkill. But I like Angular,  and I like overkill. Also, I wanted to try out Angular Universal.

### Build Time Pre-rendering vs. Server-side Rendering (SSR)
This repo demonstrates the use of 2 different forms of Server-side Rendering.

**Pre-render** 
* Happens at build time
* Renders your application and replaces the dist index.html with a version rendered at the route `/`.

**Server-side Rendering (SSR)**
* Happens at runtime
* Uses `ngExpressEngine` to render your application on the fly at the requested url.

---

### Installation
* `npm install` or `yarn`

### Development (Client-side only rendering)
* run `npm run start` which will start `ng serve`

### Production (also for testing SSR/Pre-rendering locally)
**`npm run build:ssr && npm run serve:ssr`** - Compiles your application and spins up a Node Express to serve your Universal application on `http://localhost:4000`.

**`npm run build:prerender && npm run serve:prerender`** - Compiles your application and prerenders your applications files, spinning up a demo http-server so you can view it on `http://localhost:8080`
**Note**: To deploy your static site to a static hosting platform you will have to deploy the `dist/browser` folder, rather than the usual `dist`
