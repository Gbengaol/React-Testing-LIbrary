import React, {
  useContext,
  useState,
  useMemo,
  createContext,
  useEffect,
} from "react";
import { pricePerItem } from "../constants";

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
}

const OrderDetails = createContext(null);

export function useOrderDetails() {
  const context = useContext(OrderDetails);

  if (!context) {
    throw new Error("Order details not within Order provider");
  }

  return context;
}

export default function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });
  const zeroCurrency = formatCurrency(0);
  const [totals, setTotals] = useState({
    scoops: zeroCurrency,
    toppings: zeroCurrency,
    grandTotal: zeroCurrency,
  });

  function calculateSubTotal(optionType, optionCounts) {
    let optionCount = 0;
    for (const count of optionCounts[optionType].values()) {
      optionCount += count;
    }
    return Number(optionCount * pricePerItem[optionType]);
  }

  useEffect(() => {
    const scoopsSubTotal = calculateSubTotal("scoops", optionCounts);
    const toppingsSubTotal = calculateSubTotal("toppings", optionCounts);
    const grandTotal = scoopsSubTotal + toppingsSubTotal;

    setTotals({
      scoops: formatCurrency(scoopsSubTotal),
      toppings: formatCurrency(toppingsSubTotal),
      grandTotal: formatCurrency(grandTotal),
    });
  }, [optionCounts]);

  const value = useMemo(() => {
    const updateItemCount = (itemName, newItemCount, optionType) => {
      const newOptionCounts = { ...optionCounts };

      const optionCountsMap = optionCounts[optionType];
      optionCountsMap.set(itemName, parseInt(newItemCount));
      setOptionCounts(newOptionCounts);
    };
    return [{ ...optionCounts, totals }, updateItemCount];
  }, [optionCounts, totals]);
  return (
    <OrderDetails.Provider value={value} {...props}></OrderDetails.Provider>
  );
}
