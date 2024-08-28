/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import "./src/components/global.css"
import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
      <link
        key="favicon"
        rel="icon"
        href="./src/images/flower-icon.png"
        type="image/x-icon"
      />
    ])
  }