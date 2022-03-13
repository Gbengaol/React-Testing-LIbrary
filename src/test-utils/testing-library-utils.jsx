import React from "react";
import { render } from "@testing-library/react";
import OrderDetailsProvider from "../context/OrderDetails";

const Providers = ({ children }) => {
  return <OrderDetailsProvider theme="light">{children}</OrderDetailsProvider>;
};

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithContext as render };
