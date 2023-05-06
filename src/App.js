
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/help/Faq';
import Contact, { contactAction } from './pages/help/Contact';
import Careers, { careersLoader } from './pages/careers/Careers';
// layouts
import RootLayouts from './layouts/RootLayouts';
import HelpLayout from './layouts/HelpLayout';
import NotFound from './pages/NotFound';
import CareersLayout from './layouts/CareersLayout';
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails';
import CareerError from './pages/careers/CareerError';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayouts />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} action={contactAction} />
      </Route>

      <Route
        path='careers'
        element={<CareersLayout />}
        errorElement={<CareerError />}>

        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=':id'
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App