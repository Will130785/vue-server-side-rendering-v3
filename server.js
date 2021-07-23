const express = require('express')
const app = express()
// const createApp = require('./src/main.js')
const { createBundleRenderer } = require('vue-server-renderer')

const template = require('fs').readFileSync('./index.html', 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
// const clientManifest = require('./dist/vue-ssr-client-manifest.json')

// Create renderer
const renderer = createBundleRenderer(serverBundle, {
  template
})

app.get('*', async (req, res) => {
//   const context = {
//     title: 'Vue SSR',
//     meta: `
//       <meta description="Vue SSR testing">
//     `
//   }
  const context = {
    url: req.url
  }
  const html = await renderer.renderToString(context)
  res.end(html)
})

app.listen(8080)
