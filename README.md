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

To build : 
```sh
yarn build 
```

To start the build : 
```sh
yarn start 
```

To run the developpement environnement : 
```sh
yarn dev 
```
