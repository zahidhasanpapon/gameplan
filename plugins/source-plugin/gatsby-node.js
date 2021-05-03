/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
// You can delete this file if you're not using it

/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * See: https://www.gatsbyjs.com/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */
const fetch = require("node-fetch")
// import fetch from "node-fetch"

exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin")

const NODE_TYPE = "FaqList"

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  //   const { createNode } = actions

  //   //
  //   const myData = {
  //     key: 123,
  //     foo: `the foo field of my node`,
  //     bar: `Baz`,
  //   }

  //   const nodeContent = JSON.stringify(myData)

  //   const nodeMeta = {
  //     id: createNodeId(`myData-${myData.key}`),
  //   }

  const response = await fetch(
    "http://localhost:5000/faqs"
    /**
       *
       * {
          headers: {
              Authorization: `Token token={process.env.TOKEN_ENV}`
          }
       }
       */
  )
  const results = await response.json()
  // console.log(results)

  results.forEach(result => {
    // console.log(result)
    actions.createNode({
      ...result,
      id: createNodeId(`{NODE_TYPE}-${result._id}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(result),
        contentDigest: createContentDigest(result),
      },
    })
  })
}
