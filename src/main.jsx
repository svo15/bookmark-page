import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Faq from './faq.jsx'
import GmailForm from './gmailForm.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('root2')).render(
  <React.StrictMode>
    <Faq/>
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('root3')).render(
  <React.StrictMode>
    <GmailForm/>
  </React.StrictMode>,
)

