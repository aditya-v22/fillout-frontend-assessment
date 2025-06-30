"use client";
import { useCallback, useState } from "react";
import {
  type DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

import { constructNavigationItem } from "@/features/navigation/utils";
import { navigationItems as defaultNavigationItems } from "@/features/navigation/constants";

export const useNavigationRoot = () => {
  const [navigationItems, setNavigationItems] = useState(
    defaultNavigationItems
  );
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleNavigationItemClick = useCallback((index: number) => {
    setNavigationItems((prevItems) => {
      return prevItems.map((item, i) => {
        if (i === index) {
          return { ...item, active: true };
        }
        return { ...item, active: false };
      });
    });
  }, []);

  const addNewPage = useCallback((index: number) => {
    setNavigationItems((prevItems) => {
      if (index === -1) {
        return [...prevItems, constructNavigationItem(prevItems.length + 1)];
      }
      const updatedItems = [...prevItems];
      updatedItems.splice(
        index + 1,
        0,
        constructNavigationItem(prevItems.length + 1)
      );
      return updatedItems;
    });
  }, []);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setNavigationItems((items) => {
      const oldIndex = items.findIndex((i) => i.label === active.id);
      const newIndex = items.findIndex((i) => i.label === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  }, []);

  return {
    navigationItems,
    sensors,
    handleNavigationItemClick,
    addNewPage,
    handleDragEnd,
  };
};
