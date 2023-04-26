
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("C:\\Development\\Contentful\\ABCDemo\\Gatsby-netlify\\src\\pages\\404.js")),
  "component---src-pages-about-js": preferDefault(require("C:\\Development\\Contentful\\ABCDemo\\Gatsby-netlify\\src\\pages\\about.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Development\\Contentful\\ABCDemo\\Gatsby-netlify\\src\\pages\\index.js")),
  "component---src-pages-projects-index-js": preferDefault(require("C:\\Development\\Contentful\\ABCDemo\\Gatsby-netlify\\src\\pages\\projects\\index.js")),
  "component---src-templates-project-details-js": preferDefault(require("C:\\Development\\Contentful\\ABCDemo\\Gatsby-netlify\\src\\templates\\project-details.js"))
}

