import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import "./css/index.css"

import GlobalContext from "./contexts/globalContext.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalContext>
      <App/>
    </GlobalContext>
  </>
)
