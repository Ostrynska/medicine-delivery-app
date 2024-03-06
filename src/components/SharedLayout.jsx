import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="medicine icon">
            💊
          </span>{" "}
          Medicine Delivery
        </Logo>
        <nav>
          <Link to="/shops" end>
            Shop
          </Link>
          <Link to="/cart">Shopping Cart</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
