import { createContext, useContext, useState } from "react";
import type { WheelItem } from "../types/wheelItem";

type WheelContextValue = {
  items: WheelItem[];
  selectedItem: WheelItem | null;
  addItem: (item: WheelItem) => void;
  removeItem: (itemId: number) => void;
  clearItems: () => void;
  isItemInWheel: (itemId: number) => boolean;
  setSelectedItem: (item: WheelItem | null) => void;
};

export const MIN_WHEEL_ITEMS = 2;

export const WheelContext = createContext<WheelContextValue | null>(null);

export default function WheelProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WheelItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<WheelItem | null>(null);

  function addItem(item: WheelItem) {
    setItems((prev) => {
      if (prev.some((existing) => existing.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });
  }

  function removeItem(itemId: number) {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  }

  function clearItems() {
    setItems([]);
    setSelectedItem(null);
  }

  function isItemInWheel(itemId: number) {
    return items.some((item) => item.id === itemId);
  }

  const value = {
    items,
    selectedItem,
    addItem,
    removeItem,
    clearItems,
    isItemInWheel,
    setSelectedItem,
  };

  return <WheelContext.Provider value={value}>{children}</WheelContext.Provider>;
}

export function useWheel() {
  const context = useContext(WheelContext);

  if (!context) {
    throw new Error("Wheel must use context");
  }

  return context;
}
