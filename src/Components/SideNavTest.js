// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import * as ImIcons from "react-icons/im";
// import { SideNavData } from "./SideNavData";
// import "../CSS/SideNavTest.css";

// function SideNavTest() {
//   const [sidebar, setSidebar] = useState(false);

//   const showSideBar = () => setSidebar(!sidebar);

//   return (
//     <>
//       <div className="navbar">
//         <Link to="#" className="menu-bars">
//           <ImIcons.ImArrowRight onClick={showSideBar} />
//         </Link>
//       </div>
//       <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
//         <ul className="nav-menu-items" onClick={showSideBar}>
//           <li className="navbar-toggle">
//             <Link to="#" className="menu-bars">
//               <ImIcons.ImArrowLeft />
//             </Link>
//           </li>
//           {SideNavData.map((item, index) => {
//             return (
//               <li key={index} className={item.cName}>
//                 <Link to={item.path}>
//                   {item.icon}
//                   <span>{item.title}</span>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default SideNavTest;
