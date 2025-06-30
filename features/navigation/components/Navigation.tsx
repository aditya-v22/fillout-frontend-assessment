"use client";
import React from "react";
import { DndContext, rectIntersection } from "@dnd-kit/core";
import {
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";

import AddPageButton from "@/features/navigation/components/AddPageButton";
import NavigationItem from "@/features/navigation/components/NavigationItem";
import NavigationItemLinker from "@/features/navigation/components/NavigationItemLinker";

import { useNavigationRoot } from "@/features/navigation/hooks";

const Navigation: React.FC = () => {
  const {
    addNewPage,
    handleDragEnd,
    handleNavigationItemClick,
    navigationItems,
    sensors,
  } = useNavigationRoot();

  return (
    <nav>
      <ul className="flex px-4 py-2 max-w-screen overflow-auto">
        <DndContext
          sensors={sensors}
          collisionDetection={rectIntersection}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={navigationItems.map((item) => item.label)}
            strategy={horizontalListSortingStrategy}
          >
            {navigationItems.map((item, index) => (
              <li key={item.label} className={"flex shrink-0 transition-all"}>
                <NavigationItem
                  icon={item.icon}
                  label={item.label}
                  active={item.active}
                  onClick={() => handleNavigationItemClick(index)}
                />
                <NavigationItemLinker
                  isLastItem={index === navigationItems.length - 1}
                  onAddPage={() => addNewPage(index)}
                />
              </li>
            ))}
          </SortableContext>
        </DndContext>

        <li className="transition-all shrink-0">
          <AddPageButton onClick={() => addNewPage(-1)} />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
