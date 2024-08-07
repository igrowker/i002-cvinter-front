import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../auth/components/Register";
import Login from "../auth/components/Login";
import UserProfile from "../dashboard/components/UserProfile";
import CVTemplates from "../dashboard/components/CVTemplates";
import SelectTemplate from "../dashboard/components/views/SelectTemplate";
import Bio from "../dashboard/components/views/Bio";
import Experience from "../dashboard/components/views/Experience";
import Education from "../dashboard/components/views/Education";
import SoftSkills from "../dashboard/components/views/SoftSkills";
import TechSkills from "../dashboard/components/views/TechSkills";
import OtherData from "../dashboard/components/views/OtherData";
import Upload from "../dashboard/components/views/Upload";
import App from "../../App";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import PrivacyCookies from "../pages/PrivacyCookies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "CVTemplates",
        element: <CVTemplates />,
        children: [
          {
            index: true,
            element: <SelectTemplate />
          },
          {
            path: "bio",
            element: <Bio />
          },
          {
            path: "experience",
            element: <Experience />
          },
          {
            path: "education",
            element: <Education />
          },
          {
            path: "tech-skills",
            element: <TechSkills />
          },
          {
            path: "soft-skills",
            element: <SoftSkills />
          },
          {
            path: "other-data",
            element: <OtherData />
          },
          {
            path: "upload",
            element: <Upload />
          },
        ]
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/profile",
        element: <UserProfile />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/PrivacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/PrivacyCookies",
        element: <PrivacyCookies />,
      }
    ]
  }


]);

export default router;
