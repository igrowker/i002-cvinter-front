import Footer from "../../dashboard/components/Footer";
import NavBar from "../../pages/NavBar";
import CandidateSearch from "./CandidateSearch";
import SideBar from "./SideBar";

const Recruiter = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col h-full pt-4">
        <div className="flex flex-grow overflow-hidden">
          <div className="w-1/4 lg:w-1/5 h-full bg-gray-200">
            <SideBar />
          </div>
          <div className="flex-grow overflow-y-auto">
            <CandidateSearch />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Recruiter;
