import { useMemo } from "react";
import { createPortal } from "react-dom";

import { TrashIcon } from "@/lib/components/icons";
import ContextMenuItem from "@/features/navigation/components/ContextMenuItem";

import { useContextMenuFloating } from "@/features/navigation/hooks";
import { contextMenuItems } from "@/features/navigation/constants";

import type { ContexMenuProps } from "@/features/navigation/components/types";

const ContextMenu: React.FC<ContexMenuProps> = ({
  anchorEl,
  onClickOutside,
}) => {
  const { strategy, x, y, refs } = useContextMenuFloating({
    anchorEl,
    onClickOutside,
  });

  const renderContextMenu = useMemo(
    () => (
      <div className="fixed inset-0 z-40 bg-transparent">
        <div
          ref={refs.setFloating}
          role="dialog"
          aria-modal="true"
          className="z-50 w-[240px] rounded-xl border border-gray-100"
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
          }}
        >
          <div className="p-3 rounded-t-xl bg-blue-100">
            <h4 className="text-base font-medium text-text-black">Settings</h4>
          </div>
          <div className="p-3 pb-0 rounded-b-xl bg-white">
            <ul className="flex flex-col gap-1.5">
              {contextMenuItems.map((item) => (
                <li key={item.label}>
                  <ContextMenuItem {...item} />
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-100 mt-1.5 py-1.5">
              <ContextMenuItem
                label="Delete"
                icon={TrashIcon}
                labelClassName="text-red-400"
                iconClassName="text-red-400"
              />
            </div>
          </div>
        </div>
      </div>
    ),
    [refs.setFloating, strategy, x, y]
  );

  return createPortal(renderContextMenu, document.body);
};

export default ContextMenu;
