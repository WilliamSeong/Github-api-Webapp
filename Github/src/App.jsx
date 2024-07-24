import { createBrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile.jsx";
import Header from "./components/Header.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetails from "./pages/ProjectDetail.jsx";
import Styled from "styled-components";

const StyledApp = Styled.div`
    text-align: center;
`;

const router = createBrowserRouter(
    [
        {
            path: "*",
            Component: Root
        },
    ]
);

function Root() {
  return(
      <StyledApp>
          <Header />
          <main>
              <Routes>
                  <Route path="/" element={<Profile username="WilliamSeong"/>}/>
                  <Route path="/projects" element={<Projects username="WilliamSeong" />}/>
                  <Route path="/projects/:name" element={<ProjectDetails username="WilliamSeong"/>}/>
              </Routes>
          </main>

          <footer>

          </footer>
      </StyledApp>
  )
}

export default function App() {
    return (
        <RouterProvider router={router}/>
    )
}