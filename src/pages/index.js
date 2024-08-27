import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"

const IndexPage = () => (
  <main>
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-blue-500">
      Bem-vindo ao meu portfólio!
    </h1>
  </div>
    <p>Este é o meu site pessoal onde você encontra todas as informações sobre mim.</p>
  </main>
)
export const Head = () => <Seo title="Home" />

export default IndexPage
