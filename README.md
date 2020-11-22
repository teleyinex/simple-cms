# simple-cms

This is a nuxt project that uses nuxt-content and Forestry.io to create a very simple and yet powerfull CMS that you can deploy almost anywhere.

## Nuxt-content
The @nuxt/content module: allows you to write in a content/ directory your blog posts, articles, copies, etc. in one of this formats:

* Markdown,
* JSON,
* YAML,
* XML and
* CSV files.

Then you can fetch that content using a MongoDB like API, using your filesystem as the database for storing the data. The best part? that you can have your own headless CMS without a server.

## Forestry.io

While this could be really cool for developers, you might need a nice and simple way to share your cool project with content creators. Here is where Forestry.io gets in. Forestry allows you to edit/create new
articles directly in your project. Forestry will ask you permission to write in your github project, so they can add, remove or edit your own content. The best part? Well, that you can upload images, or any media file, and handle it directly from their interface. Moreover, you can create a team, and allow your creators (marketing team, UX team, ...) to edit the content without having to deal at all with your code. How cool is that?

What it's also cool, is that you don't rely on an external service, as this will be completed saved into your own repository so you can deploy it anywhere. If you add into the mix a solution like Vercel, the, you will have automatic deployments for your new content out the box, and you will only have to deal with code.


## Structure of this project

This is a very simple template. It uses the Vuetify framework, but you can use whatever you want. The idea of this project is to to give you an overall idea about what you can achieve really quickly with these tools.

The index page shows a list of articles, while on the left side you will have a table of contents that will be updated based on where you are. If you are in an index page, with several articles, the sidebar will list your available articles. When you access one article, you will be having there the article table of contents. For this, I'm using the store so I can update it from anywhere and reflect the changes anywhere ;-)

Now, go and hack it! Enjoy it!!!

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
