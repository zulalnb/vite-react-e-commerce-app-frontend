import "./styles.css";
import { Link, Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function Admin() {
  return (
    <div>
      <nav>
        <ul className="admin-menu">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="orders">Orders</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
        </ul>
      </nav>
      <Box mt="10">
        <Outlet />
      </Box>
    </div>
  );
}

export default Admin;
