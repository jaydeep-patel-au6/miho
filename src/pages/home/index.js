import React, { useState, useEffect } from "react";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
import { tableHead, pageNumber } from "../../const/index";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [tableData, setTableData] = useState([]);
  const [pageApiCall, setPageApiCall] = useState(1);
  const [loader, setLoader] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [checkSort, setCheckSort] = useState(false);
  const [query, setQuery] = useState("");
  const [err, setErr] = useState(false);
  const [icon, setIcon] = useState(false);

  useEffect(() => {
    if (query.length > 0) {
      setIcon(true);
    }
  }, [query]);

  // api call
  useEffect(() => {
    setLoader(true);
    setErr(false);

    const url =
      query.length > 0 && query
        ? `https://swapi.dev/api/people/?search=${query}`
        : `https://swapi.dev/api/people/?search=&page=${pageApiCall}`;

    // afeter search clear call first page
    if (query.length > 0 && query) {
      setPageApiCall(1);
    }
    axios
      .get(url)
      .then((res) => {
        setTableData(res?.data?.results);
        setLoader(false);
        setErr(false);
      })
      .catch((err) => {
        // Handle error
        console.log(err);
        setLoader(false);
        setErr(true);
        toast.error("Api is down. Please try again later...");
      });
  }, [pageApiCall, query]);

  // sorting table
  useEffect(() => {
    if (selectedOption === "name") {
      const sortByName = [...tableData].sort((a, b) => {
        if (checkSort ? a.name < b.name : a.name > b.name) {
          return -1;
        }
        if (checkSort ? a.name > b.name : a.name < b.name) {
          return 1;
        }
        return 0;
      });
      setTableData(sortByName);
    }

    if (selectedOption === "height") {
      const sortByheight = [...tableData].sort((a, b) =>
        checkSort
          ? parseFloat(a.height) - parseFloat(b.height)
          : parseFloat(b.height) - parseFloat(a.height)
      );
      setTableData(sortByheight);
    }

    if (selectedOption === "mass") {
      const sortBymass = [...tableData].sort((a, b) =>
        checkSort
          ? parseFloat(a.mass) - parseFloat(b.mass)
          : parseFloat(b.mass) - parseFloat(a.mass)
      );
      setTableData(sortBymass);
    }

    if (selectedOption === "hair_color") {
      const sortByhair_color = [...tableData].sort((a, b) => {
        if (
          checkSort ? a.hair_color < b.hair_color : a.hair_color > b.hair_color
        ) {
          return -1;
        }
        if (
          checkSort ? a.hair_color > b.hair_color : a.hair_color < b.hair_color
        ) {
          return 1;
        }
        return 0;
      });
      setTableData(sortByhair_color);
    }

    if (selectedOption === "skin_color") {
      const sortByskin_color = [...tableData].sort((a, b) => {
        if (
          checkSort ? a.skin_color < b.skin_color : a.skin_color > b.skin_color
        ) {
          return -1;
        }
        if (
          checkSort ? a.skin_color > b.skin_color : a.skin_color < b.skin_color
        ) {
          return 1;
        }
        return 0;
      });
      setTableData(sortByskin_color);
    }

    if (selectedOption === "eye_color") {
      const sortByeye_color = [...tableData].sort((a, b) => {
        if (checkSort ? a.eye_color < b.eye_color : a.eye_color > b.eye_color) {
          return -1;
        }
        if (checkSort ? a.eye_color > b.eye_color : a.eye_color < b.eye_color) {
          return 1;
        }
        return 0;
      });
      setTableData(sortByeye_color);
    }

    if (selectedOption === "birth_year") {
      const sortBybirth_year = [...tableData].sort((a, b) => {
        if (
          checkSort ? a.birth_year < b.birth_year : a.birth_year > b.birth_year
        ) {
          return -1;
        }
        if (
          checkSort ? a.birth_year > b.birth_year : a.birth_year < b.birth_year
        ) {
          return 1;
        }
        return 0;
      });
      setTableData(sortBybirth_year);
    }

    if (selectedOption === "gender") {
      const sortBygender = [...tableData].sort((a, b) => {
        if (checkSort ? a.gender < b.gender : a.gender > b.gender) {
          return -1;
        }
        if (checkSort ? a.gender > b.gender : a.gender < b.gender) {
          return 1;
        }
        return 0;
      });
      setTableData(sortBygender);
    }
  }, [selectedOption, checkSort]);

  return (
    <div className="tableFont">
      <ToastContainer />
      <h1 className="text-[blue] underline text-center font-bold text-4xl m-5">
        StarWars Saga
      </h1>
      {/* loader */}
      {loader ? (
        <div className="md:-mt-20 -ml-10 absolute z-10 inset-2/4">
          <FontAwesomeIcon
            icon={faSpinner}
            size="6x"
            color="blue"
            className="spinner"
          />
        </div>
      ) : null}

      {/* err icon */}
      {err ? (
        <div className="md:-mt-20 -ml-10 absolute z-10 inset-2/4">
          <FontAwesomeIcon icon={faExclamationCircle} size="4x" color="red" />
        </div>
      ) : null}

      {/* main body */}
      <div
        className={`${
          loader || err ? "opacity-30" : "opacity-100"
        } mx-2 mt-4 mb-32 sm:mb-28`}
      >
        {/* search box */}
        <div className="flex items-center justify-center mx-5 mb-4">
          <Search setQuery={setQuery} />
        </div>

        {/* table */}
        <Table
          tableHead={tableHead}
          tableData={tableData}
          setSelectedOption={setSelectedOption}
          checkSort={checkSort}
          setCheckSort={setCheckSort}
          loader={loader}
          icon={icon}
        />

        {/* pagination */}
        {query.length > 0 ? null : (
          <div className="fixed h-28 sm:h-20 p-4 w-screen bottom-0 bg-white flex items-center justify-center">
            <Pagination
              pageNumber={pageNumber}
              setPageApiCall={setPageApiCall}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
