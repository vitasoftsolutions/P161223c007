import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableHeader from "../../../Components/shared/TableHeader/TableHeader";
import GlobalTable from "../../../Components/shared/Tables/GlobalTable";
import Swal from "sweetalert2";
import {
  deleteMaterials,
  fetchMaterialsList,
  searchMaterials,
} from "../../../redux/Actions/MaterialsAction";

const t_head = [
  { name: "Name" },
  { name: "Created Date" },
  { name: "Status" },
  { name: "Actions" },
];
const formsData = [
  {
    fieldName: "Name",
    fieldType: "text",
    fieldPlaceholder: "Name",
  },
];

const MaterialsList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.materialsReducer);
  console.log(state);
  // allDataList
  const allDataList = state.data;
  const newData = state?.data?.map((item) => ({
    id: item.id,
    name: item.name,
    date: item.created_at,
    status: item.status,
  }));
  const tableData = {
    ...state,
    data: newData,
  };
  //

  // console.log(tableData, "tableData");

  const current_page = state.currentPage;
  const total_page = state.totalPages;

  // Pages
  let page_number = [];
  for (let i = current_page - 1; i <= current_page + 1; i++) {
    if (i < 1) continue;
    if (i > total_page) break;
    page_number.push(i);
  }

  useEffect(() => {
    dispatch(fetchMaterialsList(current_page));
  }, [dispatch, current_page, state.isDelete, state.isUpdate]);

  const handlePageChange = (newPage) => {
    dispatch(fetchMaterialsList(newPage));
  };

  // console.log(state, "state_ page");

  const deleteFunction = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteMaterials(id));
        if (state.isDelete === true) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };

  // Filter Code
  const handleSearch = (formData) => {
    const allKeysEmpty = Object.values(formData).every(
      (value) => value === "" || value === null
    );
    const app_model = "suppliers/Metarials/";
    const serializer_class = "Metarials";
    const searchData = { formData, app_model, serializer_class };
    if (allKeysEmpty) {
      // If the search field is empty, fetch all formData
      dispatch(fetchMaterialsList(current_page));
    } else {
      dispatch(searchMaterials(searchData));
    }
  };
  //
  return (
    <div className="max-w-screen">
      <TableHeader
        title={"Materials"}
        redirectLink={"/materials/materials-crete"}
        model_name={"metarials"}
        app_label={"suppliers"}
        url_endpoint={"/export-csv/?model=metarials&app_label=suppliers"}
        //
        // For filters
        onSearch={handleSearch}
        formsData={formsData}
      />
      <GlobalTable
        t_head={t_head}
        t_data={tableData}
        allDataList={allDataList}
        handlePageChange={handlePageChange}
        current_page={current_page}
        page_number={page_number}
        deleteFunction={deleteFunction}
        editLink={"/materials/edit-materials"}
        erp_modalCol={12}
        photoSection={false}
        nidSection={false}
      />
    </div>
  );
};

export default MaterialsList;
