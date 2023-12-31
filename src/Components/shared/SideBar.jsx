import { useEffect, useState } from "react";
import {
  FaHandHoldingUsd,
  FaMobileAlt,
  FaRegListAlt,
  FaUsersCog,
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GiProgression } from "react-icons/gi";
import { GrUserAdmin } from "react-icons/gr";
import {
  MdAdminPanelSettings,
  MdInstallMobile,
  MdOutlineAddBusiness,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { TbFileSettings } from "react-icons/tb";
import {
  BsCalendar2Check,
  BsFillPersonPlusFill,
} from "react-icons/bs";
import { GoPasskeyFill } from "react-icons/go";
import { SiFlatpak } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";

// const Menus = [
//   // Accounts
//   {
//     title: "Accounts",
//     icons: <FaHandHoldingUsd />,
//     subMenus: [
//       {
//         title: "Expenses",
//         icons: <TbFileSettings />,
//         to: "/expense",
//       },
//       {
//         title: "Incomes",
//         icons: <FaMoneyCheckDollar />,
//         to: "/income",
//       },
//     ],
//   },
//   // Contractors
//   {
//     title: "Contractors",
//     icons: <MdOutlineManageAccounts />,
//     subMenus: [
//       {
//         title: "Beneficiaries",
//         icons: <FaRegListAlt />,
//         to: "/contractor-beneficaries",
//       },
//       {
//         title: "Assign Contractor",
//         icons: <BsFillPersonPlusFill />,
//         to: "/contractor-assign",
//       },
//       {
//         title: "Contractor Payment",
//         icons: <BsFillPersonPlusFill />,
//         to: "/contractor-payment",
//       },
//       {
//         title: "Contractor Guarantors",
//         icons: <BsFillPersonPlusFill />,
//         to: "/contractor-guarantor",
//       },
//     ],
//   },
//   // Customer
//   {
//     title: "Customers",
//     icons: <FaUsersCog />,
//     subMenus: [
//       {
//         title: "Customer Ben",
//         icons: <FaUsersCog />,
//         to: "/customer-beneficiaries",
//       },
//     ],
//   },
//   // Phone number
//   {
//     title: "Phone",
//     icons: <FaMobileAlt />,
//     subMenus: [
//       {
//         title: "Phone",
//         icons: <MdInstallMobile />,
//         to: "/phone",
//       },
//     ],
//   },
//   // HRM
//   {
//     title: "Hrm",
//     icons: <FaHandHoldingUsd />,
//     subMenus: [
//       {
//         title: "Attendance",
//         icons: <BsCalendar2Check />,
//         to: "/attendance",
//       },
//       {
//         title: "Leaves",
//         icons: <FaMoneyCheckDollar />,
//         to: "/leaves",
//       },
//       {
//         title: "Salaries",
//         icons: <FaMoneyCheckDollar />,
//         to: "/salary",
//       },
//     ],
//   },
//   // Loan
//   {
//     title: "Loan",
//     icons: <FaHandHoldingUsd />,
//     subMenus: [
//       {
//         title: "Beneficiary",
//         icons: <FaRegListAlt />,
//         to: "/beneficiarylist",
//       },
//       {
//         title: "Loan Installment",
//         icons: <FaMoneyCheckDollar />,
//         to: "/loan-installment",
//       },
//       {
//         title: "Loan logs",
//         icons: <FaMoneyCheckDollar />,
//         to: "/loan-logs",
//       },
//       {
//         title: "Loan Transactions",
//         icons: <FaMoneyCheckDollar />,
//         to: "/loan-transactions",
//       },
//     ],
//   },
//   // Owner
//   {
//     title: "Owner",
//     icons: <MdAdminPanelSettings />,
//     subMenus: [
//       {
//         title: "Owner",
//         icons: <MdAdminPanelSettings />,
//         to: "/owner",
//       },
//     ],
//   },
//   // Business Profile
//   {
//     title: "Business Profile",
//     icons: <MdOutlineAddBusiness />,
//     subMenus: [
//       {
//         title: "Business Profile",
//         icons: <MdOutlineAddBusiness />,
//         to: "/business-profile",
//       },
//     ],
//   },
//   // Projects
//   {
//     title: "Projects",
//     icons: <SiFlatpak />,
//     subMenus: [
//       {
//         title: "Projects",
//         icons: <SiFlatpak />,
//         to: "/projects",
//       },
//       {
//         title: "Project Progress",
//         icons: <FaMoneyCheckDollar />,
//         to: "/project-progress",
//       },
//       {
//         title: "Work Progress",
//         icons: <GiProgression />,
//         to: "/work-progress",
//       },
//       {
//         title: "Floors",
//         icons: <GiProgression />,
//         to: "/floors",
//       },
//       {
//         title: "Property",
//         icons: <FaMoneyCheckDollar />,
//         to: "/property",
//       },
//       {
//         title: "Property purchase",
//         icons: <FaMoneyCheckDollar />,
//         to: "/property-purchase",
//       },
//       {
//         title: "Property Installment",
//         icons: <FaMoneyCheckDollar />,
//         to: "/property-installment",
//       },
//       {
//         title: "Expense by property",
//         icons: <FaMoneyCheckDollar />,
//         to: "/expense-by-property",
//       },
//     ],
//   },
//   // Suppliers
//   {
//     title: "Suppliers",
//     icons: <FaMoneyCheckDollar />,
//     subMenus: [
//       {
//         title: "Beneficiaries",
//         icons: <FaMoneyCheckDollar />,
//         to: "/suppliers-beneficaries",
//       },
//       {
//         title: "Materials",
//         icons: <FaMoneyCheckDollar />,
//         to: "/materials",
//       },
//       {
//         title: "Brands",
//         icons: <MdOutlineAddBusiness />,
//         to: "/brands",
//       },
//     ],
//   },
//   // Employee
//   {
//     title: "Employee",
//     icons: <FaUsersCog />,
//     subMenus: [
//       {
//         title: "Employee",
//         icons: <FaUsersCog />,
//         to: "/employee",
//       },
//     ],
//   },
//   // Roles
//   {
//     title: "Roles",
//     icons: <FaMoneyCheckDollar />,
//     subMenus: [
//       {
//         title: "Roles",
//         icons: <FaMoneyCheckDollar />,
//         to: "/roles",
//       },
//     ],
//   },
//   // Warehouse
//   {
//     title: "Warehouse",
//     icons: <TbFileSettings />,
//     subMenus: [
//       {
//         title: "Warehouse Items",
//         icons: <FaMoneyCheckDollar />,
//         to: "/warehouse-items",
//       },
//       {
//         title: "Material Payment installment",
//         icons: <TbFileSettings />,
//         to: "/material-payment-installment ",
//       },
//       {
//         title: "Material Purchase",
//         icons: <TbFileSettings />,
//         to: "/material-purchase",
//       },
//       {
//         title: "Material Dispatch",
//         icons: <TbFileSettings />,
//         to: "/material-dispatch",
//       },
//       {
//         title: "Material Receive Installment",
//         icons: <TbFileSettings />,
//         to: "/material-receive-installment",
//       },
//     ],
//   },
//   // Inventory
//   {
//     title: "Inventory",
//     icons: <TbFileSettings />,
//     subMenus: [
//       {
//         title: "Material Dispatch",
//         icons: <FaMoneyCheckDollar />,
//         to: "/material-dispatch-inventory",
//       },
//       {
//         title: "Product Inventory",
//         icons: <TbFileSettings />,
//         to: "/product-inventory",
//       },
//     ],
//   },
//   // Renter
//   {
//     title: "Renter",
//     icons: <FaMoneyCheckDollar />,
//     subMenus: [
//       {
//         title: "Renter Beneficiaries",
//         icons: <FaMoneyCheckDollar />,
//         to: "/renter-beneficiaries",
//       },
//       {
//         title: "Flat Rent",
//         icons: <GoPasskeyFill />,
//         to: "/flat-rent",
//       },
//       {
//         title: "Rent collections",
//         icons: <FaMoneyCheckDollar />,
//         to: "/rent-collections",
//       },
//       {
//         title: "Repair Records",
//         icons: <FaMoneyCheckDollar />,
//         to: "/repear-records",
//       },
//     ],
//   },
//   // Utilities
//   {
//     title: "Utilities",
//     icons: <FiSettings />,
//     subMenus: [
//       {
//         title: "App Label",
//         icons: <FiSettings />,
//         to: "/app-label",
//       },
//       {
//         title: "Types",
//         icons: <FaMoneyCheckDollar />,
//         to: "/types",
//       },
//     ],
//   },
// ];


const Menus = [
  // HRM
  {
   title: "Hrm",
   icons: <FaHandHoldingUsd />,
   subMenus: [
     {
       title: "Attendance",
       icons: <BsCalendar2Check />,
       to: "/attendance",
     },
     {
       title: "Leaves",
       icons: <FaMoneyCheckDollar />,
       to: "/leaves",
     },
     {
       title: "Salaries",
       icons: <FaMoneyCheckDollar />,
       to: "/salary",
     },
   ],
 },
// Employee
{
 title: "Employee",
 icons: <FaUsersCog />,
 subMenus: [
   {
     title: "Employee",
     icons: <FaUsersCog />,
     to: "/employee",
   },
 ],
},
// Roles
{
 title: "Roles",
 icons: <FaMoneyCheckDollar />,
 subMenus: [
   {
     title: "Roles",
     icons: <FaMoneyCheckDollar />,
     to: "/roles",
   },
 ],
},
// Phone number
{
 title: "Phone",
 icons: <FaMobileAlt />,
 subMenus: [
   {
     title: "Phone",
     icons: <MdInstallMobile />,
     to: "/phone",
   },
 ],
},
  // Owner
  {
    title: "Owner",
    icons: <MdAdminPanelSettings />,
    subMenus: [
      {
        title: "Owner",
        icons: <MdAdminPanelSettings />,
        to: "/owner",
      },
    ],
  },
  // Business Profile
  {
    title: "Business Profile",
    icons: <MdOutlineAddBusiness />,
    subMenus: [
      {
        title: "Business Profile",
        icons: <MdOutlineAddBusiness />,
        to: "/business-profile",
      },
    ],
  },
  // Projects
  {
    title: "Projects",
    icons: <SiFlatpak />,
    subMenus: [
      {
        title: "Projects",
        icons: <SiFlatpak />,
        to: "/projects",
      },
      {
        title: "Project Progress",
        icons: <FaMoneyCheckDollar />,
        to: "/project-progress",
      },
      {
        title: "Work Progress",
        icons: <GiProgression />,
        to: "/work-progress",
      },
      {
        title: "Floors",
        icons: <GiProgression />,
        to: "/floors",
      },
      {
        title: "Property",
        icons: <FaMoneyCheckDollar />,
        to: "/property",
      },
      {
        title: "Property purchase",
        icons: <FaMoneyCheckDollar />,
        to: "/property-purchase",
      },
      {
        title: "Property Installment",
        icons: <FaMoneyCheckDollar />,
        to: "/property-installment",
      },
      {
        title: "Expense by property",
        icons: <FaMoneyCheckDollar />,
        to: "/expense-by-property",
      },
    ],
  },
  // Contractors
  {
    title: "Contractors",
    icons: <MdOutlineManageAccounts />,
    subMenus: [
      {
        title: "Beneficiaries",
        icons: <FaRegListAlt />,
        to: "/contractor-beneficaries",
      },
      {
        title: "Assign Contractor",
        icons: <BsFillPersonPlusFill />,
        to: "/contractor-assign",
      },
      {
        title: "Contractor Payment",
        icons: <BsFillPersonPlusFill />,
        to: "/contractor-payment",
      },
      {
        title: "Contractor Guarantors",
        icons: <BsFillPersonPlusFill />,
        to: "/contractor-guarantor",
      },
    ],
  },
  // Inventory
  {
    title: "Inventory",
    icons: <TbFileSettings />,
    subMenus: [
      {
        title: "Material Dispatch",
        icons: <FaMoneyCheckDollar />,
        to: "/material-dispatch-inventory",
      },
      {
        title: "Product Inventory",
        icons: <TbFileSettings />,
        to: "/product-inventory",
      },
    ],
  },
// Utilities
{
  title: "Utilities",
  icons: <FiSettings />,
  subMenus: [
    {
      title: "App Label",
      icons: <FiSettings />,
      to: "/app-label",
    },
    {
      title: "Types",
      icons: <FaMoneyCheckDollar />,
      to: "/types",
    },
  ],
 },
];


const SideBar = ({ open, setOpen }) => {
  const [expandedMenus, setExpandedMenus] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const location = useLocation();

  const handleToggleSubMenu = (index) => {
    const expandedMenusCopy = [...expandedMenus];
    if (expandedMenusCopy.includes(index)) {
      // Remove index if already expanded
      expandedMenusCopy.splice(expandedMenusCopy.indexOf(index), 1);
    } else {
      // Add index if collapsed
      expandedMenusCopy.push(index);
    }
    setExpandedMenus(expandedMenusCopy);
  };

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth > 768); // Adjust breakpoint as needed
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once on component mount to set initial state
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Check if the current location matches any of the menu items
    const selectedItem = Menus.findIndex((menu) => {
      if (menu.to === location.pathname) return true;
      if (menu.subMenus) {
        return menu.subMenus.some(
          (submenu) => submenu.to === location.pathname
        );
      }
      return false;
    });

    setSelectedItem(selectedItem);
  }, [location.pathname]);

  return (
    <div className="mt-10 z-50 bg-erp_menu min-h-full">
      <div
        className={`${
          open ? "w-60" : "w-20 "
        } min-h-[100vh] pb-10 relative duration-300`}
      >
        <img
          src="/image/control.png"
          className={`absolute cursor-pointer -right-3 top-20 w-7 border-dark-purple
           border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <ul className="pt-10 overflow-hidden">
          {Menus?.map((Menu, index) => (
            <div key={index}>
              {Menu.subMenus && Menu.subMenus.length > 0 ? (
                <div>
                  <div
                    className={`text-lg w-full font-medium cursor-pointer flex justify-between ${
                      !open && "justify-center pl-8 py-2"
                    } py-1 px-4 ${
                      selectedItem === index &&
                      "bg-[#242834] text-[#fff] rounded-l-full ml-2"
                    }`}
                    onClick={() => handleToggleSubMenu(index)}
                  >
                    <div className="flex items-center gap-2">
                      <p
                        className={`${
                          selectedItem === index && "text-[#fff]"
                        } text-erp_menu_icons`}
                      >
                        {Menu.icons}
                      </p>
                      <span
                        className={`${!open && "hidden scale-0"} ${
                          selectedItem === index
                            ? "text-[#fff]"
                            : "text-black"
                        } origin-left duration-200 text-md text-erp_menu_text`}
                      >
                        {Menu.title}
                      </span>
                    </div>
                    <div>
                      <span
                        className={`${!open && "hidden scale-0"} ${
                          selectedItem === index
                            ? "text-erp_top_menu"
                            : "text-black"
                        } origin-left duration-200 text-erp_bg_main`}
                      >
                        {expandedMenus.includes(index) ? "-" : "+"}
                      </span>
                    </div>
                  </div>
                  <ul
                    className={`${
                      expandedMenus.includes(index)
                        ? "max-h-screen transition-max-h duration-[2s] ease-in-out"
                        : "max-h-0 transition-max-h duration-[1s] ease-in-out"
                    } overflow-hidden`}
                  >
                    {Menu.subMenus.map((submenu, subIndex) => (
                      <Link key={subIndex} to={submenu.to}>
                        <li
                          className={`flex pb-1 rounded-md cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 py-1 px-6 ${
                            subIndex === 0 && "bg-light-white"
                          }`}
                        >
                          <span className="pl-4 text-erp_submenu_icons">
                            {submenu.icons}
                          </span>
                          <span
                            className={`${
                              !open && "hidden scale-0"
                            } origin-left duration-200 text-md text-erp_submenu_text`}
                          >
                            {submenu.title}
                          </span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link key={index} to={Menu.to}>
                  <li
                    className={`selection:font-medium font-semibold text-lg overflow-hidden ${
                      selectedItem === index && "bg-red-500 text-white"
                    }`}
                  >
                    <div
                      className={`flex justify-between rounded-2xl py-1 px-4 ${
                        !open && "justify-center pl-8 py-2"
                      }`}
                    >
                      <div className="flex  items-center gap-2">
                        {Menu.icons}{" "}
                        <span
                          className={`${
                            !open && "hidden scale-0"
                          } origin-left duration-200`}
                        >
                          {Menu.title}
                        </span>
                      </div>
                    </div>
                  </li>
                </Link>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
