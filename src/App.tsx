import React from 'react'
import { Search } from './Components/Search/Search'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="column">
          <Search />
          </div>
        </div>

        <div className="row">
          <div className="column">.column</div>
          <div className="column">.column</div>
          <div className="column">.column</div>
          <div className="column">.column</div>
        </div>

        <div className="row">
          <div className="column">.column</div>
          <div className="column column-50 column-offset-25">
            .column column-50 column-offset-25
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
