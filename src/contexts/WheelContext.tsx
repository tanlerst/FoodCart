import {
  createContext,
  useState,
  type ReactNode,
} from "react";

import type { WheelItem } from "../types/wheelItem";
import { SAMPLE_WHEEL_ITEMS } from "../data/sampleWheelItems"

type WheelContextValue = {
  items: WheelItem[];
  selectedItem: WheelItem | null; // item selected by wheel
  includeDrinks: boolean; // whether drink items should be included in wheel selection

  removeItem: (itemId: number) => void; // remove wheel item
  clearItems: () => void;
  isItemInWheel: (itemId: number) => boolean;

  setSelectedItem: (item: WheelItem | null) => void;
  setIncludeDrinks: (includeDrinks: boolean) => void;
};

export const MIN_WHEEL_ITEMS = 2;
export const MAX_WHEEL_ITEMS = 8;

export const WheelContext = createContext<WheelContextValue | null>(null);

type WheelProviderProps = {
  children: ReactNode;
};


function getStoredWheelItems(): WheelItem[] {
  return SAMPLE_WHEEL_ITEMS;
  // get wheel items from database or frontend
  // TODO: change here
}

function getStoredIncludeDrinks() {
  // get user saved preferences for drinks
  // if no saved pref, return true 
  return true;
  // TODO: change here

}

export default function WheelProvider({
  children,
}: WheelProviderProps) {
  const [items, setItems] = useState<WheelItem[]>(getStoredWheelItems,);

  const [selectedItem, setSelectedItem] = useState<WheelItem | null>(null);

  const [includeDrinks, setIncludeDrinks] = useState(getStoredIncludeDrinks);

  function removeItem() {
    // TODO: remove wheel item
  }

  function clearItems() {
   // TODO
  }

  function isItemInWheel() {
   //TODO
   return true;
  }

  const value = {
    items,
    selectedItem,
    includeDrinks,
    removeItem,
    clearItems,
    isItemInWheel,
    setSelectedItem,
    setIncludeDrinks,
  };

  return (
    <WheelContext.Provider value={value}>
      {children}
    </WheelContext.Provider>
  );
}