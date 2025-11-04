// import {
//   GridColumnMenuContainer,
//   GridFilterMenuItem,
//   HideGridColMenuItem,
// } from "@mui/x-data-grid";

// const CustomColumnMenu = (props) => {
//   const { hideMenu, currentColumn, open } = props;
//   return (
//     <GridColumnMenuContainer
//       hideMenu={hideMenu}
//       currentColumn={currentColumn}
//       open={open}
//     >
//       <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
//       <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
//     </GridColumnMenuContainer>
//   );
// };

// export default CustomColumnMenu;

// import React from "react";
// import {
//   GridColumnMenuContainer,
//   GridFilterMenuItem,
// } from "@mui/x-data-grid";
// import { MenuItem } from "@mui/material";

// const CustomColumnMenu = (props) => {
//   const { hideMenu, currentColumn, apiRef } = props;

//   const handleHideColumn = () => {
//     apiRef.current.setColumnVisibility(currentColumn.field, false);
//     hideMenu?.();
//   };

//   return (
//     <GridColumnMenuContainer {...props}>
//       <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
//       <MenuItem onClick={handleHideColumn}>Hide Column</MenuItem>
//     </GridColumnMenuContainer>
//   );
// };

// export default CustomColumnMenu;
