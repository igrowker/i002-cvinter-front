import Footer from "../../dashboard/components/Footer";
import NavBar from "../../pages/NavBar";
import CandidateSearch from "./CandidateSearch";
import SideBar from "./SideBar";

const Recruiter = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col h-screen">
        <div className="flex flex-grow">
          <div className="hidden md:block md:w-1/4 lg:w-1/5">
            <SideBar />
          </div>
          <div className="flex-grow">
            <CandidateSearch />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Recruiter;
