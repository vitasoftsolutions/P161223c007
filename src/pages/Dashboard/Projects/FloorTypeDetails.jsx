import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../../../Components/shared/Breadcrumb/Breadcrumb";
import DetailsModal from "../../../Components/shared/Modals/DetailsModal";
import NoData from "../../../Components/shared/NoData";
import { fetchFloors } from "../../../redux/Actions/FloorsAction";

function FloorTypeDetails() {
  const dispatch = useDispatch();
  const floorState = useSelector((state) =>
    state.floorsReducer?.data?.slice().reverse()
  );
  let { state } = useLocation();

  console.log(state);

  const [allData, setAllData] = useState(null);

  useEffect(() => {
    dispatch(fetchFloors(state?.id));
  }, [dispatch, state]);

  // Modal data
  const getModalData = (dt) => {
    console.log(dt, "dt");
    setAllData(dt);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-4">
        <Breadcrumb />
        <div className="flex space-x-4">
          <Link
            to={"/projects"}
            className="btn btn-sm font-semibold flex gap-2 items-center justify-center bg-erp_primary text-erp_light px-2"
          >
            <BsArrowLeftShort /> Back
          </Link>
        </div>
      </div>
      {!state ? (
        <NoData />
      ) : (
        <div className="bg-erp_dark shadow-sm shadow-blue-200 md:mx-8 mb-5 mt-5 rounded-lg md:p-4">
          <div
            className={`w-full mx-auto p-4 grid grid-rows-${floorState?.data?.length} bg-gray-200 gap-x-4 rounded-md bg-opacity-50 backdrop-blur-md`}
          >
            {state?.unit_property?.length <= 0 ? (
              <NoData />
            ) : (
              state?.unit_property?.map((dt) => (
                <div key={dt.id} className={`p-2 rounded-sm my-4 w-full`}>
                  <div className="flex justify-between">
                    <button
                      key={dt.id}
                      onClick={() => {
                        getModalData(dt);
                      }}
                      className="w-36"
                    >
                      <div className="bg-gray-400 p-2 rounded-md shadow-lg hover:shadow-sm duration-200">
                        <h3 className="text-erp_light text-center">
                          {dt.code}
                        </h3>
                      </div>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/*  */}
      <DetailsModal
        allData={allData}
        onClose={() => setAllData(null)}
        erp_modalCol={12}
        photoSection={false}
      />

      {/*  */}
    </>
  );
}

export default FloorTypeDetails;
