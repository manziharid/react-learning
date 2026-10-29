import { StrictMode } from 'react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
const root = createRoot(document.getElementById('root')!)
const reactElement = createElement("h1", null, "welcome to react project haridi")
console.log(reactElement)
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
root.render(
  reactElement
)
