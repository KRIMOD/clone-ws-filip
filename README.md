# Nextjs website clone 
A clone of [Filip Borkiewicz](https://0x46.net/) website using nextjs.
Added support for SSG with mdx.

A preview is hosted with vercel [here](https://clone-ws-filip.vercel.app/)


## Main tools used : 
* next-mdx-enhanced : For layout and front matter suppport 
* tailwindcss : For styling
* standard : Opiniated formatter 

## To add an article 
Blog like support was build for /thoughts and /projects. To add an article, you'll have to add [slug]/index.md where slug is the name of the directory inside pages/thoughts or pages/projects. 


# Next.js

To add Tailwind to a Next (^9.2.0) project, start by installing `tailwindcss`, `postcss-import` and `autoprefixer`:

```sh
npm install tailwindcss postcss-import autoprefixer --save
```

Next, set up your PostCSS plugins by creating a `postcss.config.js` file and adding the following configuration:

```js
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer"
  ]
};

```

Next, create a CSS file for your Tailwind styles. We've used `css/tailwind.css` for this example:

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

Finally, import your CSS in your `_app.js` component to make them available globally:

```jsx
import React from 'react'
import App from 'next/app'
import '../css/tailwind.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
```