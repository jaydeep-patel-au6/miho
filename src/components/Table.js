import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faQuestion,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

const Table = ({
  tableHead,
  tableData,
  setSelectedOption,
  checkSort,
  setCheckSort,
  icon,
}) => {
  const selectTitle = (title) => {
    setSelectedOption(title);
    setCheckSort(!checkSort);
  };

  var human = [];
  var droid = [];
  var other = [];

  tableData?.map((count) => {
    if (count?.species == "https://swapi.dev/api/species/2/") {
      droid.push(count?.species);
    } else if (count?.species.toString()) {
      other.push(count?.species);
    } else {
      human.push("human");
    }
  });
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {tableHead?.map((tab, idx) => {
                return (
                  <th
                    key={idx}
                    scope="col"
                    className="px-6 py-3"
                    onClick={() => selectTitle(tab?.title)}
                  >
                    <span className="cursor-pointer">{tab?.title}</span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableData?.map((data, idx) => {
              return (
                <tr
                  key={idx}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    <div className="flex flex-row items-start justify-start">
                      <div>
                        {data?.species == "https://swapi.dev/api/species/2/" ? (
                          <div className="mr-2">
                            <FontAwesomeIcon
                              icon={faAndroid}
                              size="xl"
                              color="green"
                            />
                          </div>
                        ) : (
                          <>
                            {data?.species.toString() ? (
                              <div className="mr-2">
                                <FontAwesomeIcon
                                  icon={faQuestion}
                                  size="xl"
                                  color="red"
                                />
                              </div>
                            ) : (
                              <div className="mr-2">
                                <FontAwesomeIcon
                                  icon={faUserCircle}
                                  size="xl"
                                  color="blue"
                                />
                              </div>
                            )}
                          </>
                        )}
                      </div>
                      <div>{data?.name}</div>
                    </div>
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {data?.height}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {data?.mass}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {data?.hair_color}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {data?.skin_color}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {data?.eye_color}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {data?.birth_year}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {data?.gender}
                  </td>
                </tr>
              );
            })}
            {tableData.length > 0 && (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  <p>Human Count : {human.length}</p>
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  <p>Droid Count : {droid.length}</p>
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  <p>Other Species Count : {other.length}</p>
                </th>
              </tr>
            )}
          </tbody>
        </table>
        <div className="">
          {icon && (
            <>
              {tableData.length > 0 ? null : (
                <div className="m-40 flex flex-col items-center justify-center">
                  <FontAwesomeIcon icon={faWarning} size="4x" color="red" />
                  <p className="text-red-500 font-semibold text-base text-center mt-2">
                    No Data Found.....!!!!
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
