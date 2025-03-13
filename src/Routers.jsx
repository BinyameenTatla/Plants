import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Navbar } from './Navbar.jsx'

import { Product } from './Product.jsx'
import { Services } from './Services.jsx'
import { About } from './About.jsx'
import { Contact } from './Contact.jsx'
import { Footer } from './Footer.jsx'
import { Import } from 'lucide-react'
import { Home } from './Home.jsx'


export const Routers = (() =>{
    const Router =createBrowserRouter([
      {
          path:"/",
          element:<Applayout />,
          children:[
              {
                  path:"/",
                  element:<Home/>
             
                  },
                  {
                     path:"/Product",
                     element:<Product/>
                
                     },
                     {
                         path:"/About",
                         element:<About/>
                    
                         },
             
                         {
                             path:"/Services",
                             element:<Services/>
                        
                             },
                             {
                                path:"/Contact",
                                element:<Contact />
                           
                                },
          ]
      },
    ])
  return <RouterProvider router={Router}/>
  })
  const Applayout=(()=>{
  return(
  <>
      <Navbar />
      <Outlet />
      <Footer />
      </>
  )
  })