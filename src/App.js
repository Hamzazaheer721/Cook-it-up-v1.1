import React from "react"
import Mainlayout from "./layouts/main"
import "./styles/global.css"
import Provider from "./layouts/provider"

const App = () => (
  <Provider>
    <Mainlayout />
  </Provider>
)

export default App
