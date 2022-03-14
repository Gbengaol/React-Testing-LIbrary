import React from "react";
import { useOrderDetails } from "../../context/OrderDetails";
import Options from "./Options";

export default function OrderEntry() {
  const [orderDetails] = useOrderDetails();
  return (
    <div>
      <h3>Total Value: {orderDetails.totals.grandTotal}</h3>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
    </div>
  );
}
