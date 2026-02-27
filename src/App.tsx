import Layout from "@/layout/Layout";
import Loader from "@/pages/loader/Loader";
import StatusError from "@/pages/statuserror/StatusError";
import type { ClassValue } from "clsx";
import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router";


const App = (): React.ReactNode => {
  // Lazy imports
  const Home= lazy(() => import("@/pages/home/Home"));
  const About= lazy(() => import("@/pages/about/About"));
  const Experience= lazy(() => import("@/pages/experience/Experience"));
  const Education= lazy(() => import("@/pages/education/Education"));
  const Projects= lazy(() => import("@/pages/projects/Projects"));
  const Contact= lazy(() => import("@/pages/contact/Contact"));

  const headerHeight: ClassValue = "h-16";

  return (
    <Suspense fallback={<Loader headerHeight={headerHeight} />}>
      <RouterProvider router={createBrowserRouter([
        {
          path: "/",
          element: <Layout headerHeight={headerHeight}><Outlet /></Layout>,
          errorElement: <StatusError statusCode={500} headerHeight={headerHeight} />,
          children: [
            { index: true, element: <>
              <Home headerHeight={headerHeight} />
              <About headerHeight={headerHeight} />
              <Experience headerHeight={headerHeight} />
              <Education headerHeight={headerHeight} />
              <Projects headerHeight={headerHeight} />
              <Contact headerHeight={headerHeight} />
            </> },
          ]
        },
        {
          path: "*",
          element: <StatusError statusCode={404} headerHeight={headerHeight} />,
          errorElement: <StatusError statusCode={500} headerHeight={headerHeight} />,
        }
      ])} />
    </Suspense>
  );
};
export default App;
