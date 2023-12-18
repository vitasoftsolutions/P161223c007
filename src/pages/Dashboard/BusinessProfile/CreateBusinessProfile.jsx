import { useEffect } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../../../Components/shared/Breadcrumb/Breadcrumb";
import { ToastContainer, toast } from "react-toastify";
import { createBusinessProfile } from "../../../redux/Actions/BusinessProfileAction";
import BeneficiaryForm from "../../../Components/shared/Forms/BeneficiaryForm";

const formsData = [
  {
    fieldName: "Name",
    fieldType: "text",
    fieldPlaceholder: "Name",
    isRequired: true,
  },
  {
    fieldName: "Address",
    fieldType: "text",
    fieldPlaceholder: "Address",
    isRequired: true,
  },
  {
    fieldName: "License Number",
    fieldType: "text",
    fieldPlaceholder: "License Number",
    isRequired: true,
  },
  {
    fieldName: "Reg Number",
    fieldType: "text",
    fieldPlaceholder: "Reg Number",
    isRequired: true,
  },
    {
      fieldName: "Logo",
      fieldType: "file",
      fieldPlaceholder: "Logo",
      isRequired: true,
    },
  
];

function CreateBusinessProfile() {
  const dispatch = useDispatch();
  const loanState = useSelector((state) => state.businessProfileReducer);
  const navigate = useNavigate();

  const submitFunction = (data) => {
    dispatch(createBusinessProfile(data));
  };

  useEffect(() => {
    if (loanState.isCreated) {
      toast("Successfully done", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/business-profile");
      }, 3000);
    }

    if (loanState.isError) {
      toast.error(loanState.data[0], {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [loanState.isError, loanState.data, loanState.isCreated, navigate]);

  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-4">
        <Breadcrumb />
        <div className="flex space-x-4">
          <Link
            to={"/business-profile"}
            className="btn btn-sm font-semibold flex gap-2 items-center justify-center bg-erp_primary text-erp_light px-2"
          >
            <BsArrowLeftShort /> Back
          </Link>
        </div>
      </div>
      <div className="bg-white shadow-lg shadow-blue-200 md:mx-10 mb-5 rounded-lg md:p-4">
        <BeneficiaryForm
          formsData={formsData}
          submitFunction={submitFunction}
          isReset={true}
        />
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default CreateBusinessProfile;