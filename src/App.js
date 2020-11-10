import React from 'react'
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import GlobalStyles from './common/styles/global-style'
import Main from './containers/Main'


function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline>
        <GlobalStyles>
          <div>
            <Main/> 
          </div>
        </GlobalStyles>
      </CssBaseline>
    </StylesProvider>
  );
}

export default App;
