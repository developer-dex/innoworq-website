import { useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import image from "../../assets/Logo2.png";

const PaginationComponent = ({ prevPage, nextPage }) => {
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    if (page) {
      navigate(page);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex gap-4 items-center max-w-[1200px] mx-auto py-4 mt-12 mb-12">
        <button
          className={`flex w-[120px] items-center px-4 py-2 justify-center bg-[#0063A7] text-white rounded ${
            !prevPage ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handleNavigation(prevPage)}
          disabled={!prevPage}
        >
          <IoIosArrowBack className="mr-2" />
          Previous
        </button>
        <button
          className={`flex w-[120px] items-center px-4 py-2 justify-center bg-[#0063A7] text-white rounded ${
            !nextPage ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handleNavigation(nextPage)}
          disabled={!nextPage}
        >
          Next
          <IoIosArrowForward className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
