import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


const el = document.getElementById('root')
const root = createRoot(el)

let num = Math.random() ;
export function App() {


    const name = "kosar zati ";
    

    return (
        
        <>
        
         <h1>my first project</h1>
         <h1>{new Date().toLocaleTimeString()}</h1>
         <h1>{name}</h1>
         <h1>{num}</h1>
      
        </> 
        );


}

root.render(<StrictMode>
        <App/>
    </StrictMode>)
    
