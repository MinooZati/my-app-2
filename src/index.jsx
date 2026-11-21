import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


const el = document.getElementById('root')
const root = createRoot(el)


export function App() {
    // const name = "kosar zati ";
   

    return (<h1>{new Date().toLocaleTimeString()}</h1>);


}

root.render(<StrictMode>
        <App/>
    </StrictMode>)
    
