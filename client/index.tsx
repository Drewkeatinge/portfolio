import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from '../client/routes/routes'

const root = createRoot(document.getElementById('app') as HTMLElement)

root.render(

<RouterProvider router={router} />

)