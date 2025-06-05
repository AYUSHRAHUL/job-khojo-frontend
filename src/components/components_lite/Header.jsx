import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };
return (
  <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto text-center space-y-6">
      {/* Highlight Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-red-600 font-semibold shadow-sm">
        <PiBuildingOfficeBold className="text-[#614232] text-lg" />
        <span>India’s #1 Career Launchpad</span>
      </div>

      {/* Headline */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
        Discover, Apply, <br />
        and Land Your <span className="text-[#6A38C2]">Dream Job</span>
      </h2>

      {/* Subheadline */}
      <p className="text-gray-600 text-base sm:text-lg">
        Empower your career journey with top-notch opportunities, curated listings, and lightning-fast hiring. <br />
        All tailored to your preferences—right here.
      </p>

      {/* Search Bar */}
      <div className="flex w-full max-w-xl mx-auto bg-white border border-gray-300 rounded-full shadow-md overflow-hidden">
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search roles, companies, skills..."
          className="w-full px-5 py-3 text-sm outline-none"
        />
        <Button
          onClick={searchjobHandler}
          className="bg-[#6A38C2] hover:bg-[#552da8] text-white px-6 rounded-l-none rounded-r-full transition-colors"
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </div>
  </div>
);

};

export default Header;
