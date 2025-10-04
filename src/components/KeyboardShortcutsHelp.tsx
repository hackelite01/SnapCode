import React, { useState } from "react";
import { MdKeyboard, MdClose } from "react-icons/md";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";

interface Shortcut {
  keys: string[];
  description: string;
  category: string;
}

const shortcuts: Shortcut[] = [
  {
    keys: ["Ctrl", "S"],
    description: "Export image",
    category: "Export",
  },
  {
    keys: ["Ctrl", "Shift", "C"],
    description: "Copy image to clipboard",
    category: "Export",
  },
  {
    keys: ["Ctrl", "R"],
    description: "Reset to defaults",
    category: "Editor",
  },
  {
    keys: ["?"],
    description: "Show keyboard shortcuts",
    category: "Help",
  },
];

export const KeyboardShortcutsHelp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useKeyboardShortcuts([
    {
      key: "?",
      callback: () => setIsOpen(true),
    },
  ]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-10 w-10 h-10 flex items-center justify-center bg-gray-900/60 hover:bg-gray-900/80 backdrop-blur-xl rounded-full border border-gray-700 shadow-xl text-white"
        title="Keyboard Shortcuts"
      >
        <MdKeyboard className="text-xl" />
      </button>
    );
  }

  const groupedShortcuts = shortcuts.reduce((acc, shortcut) => {
    if (!acc[shortcut.category]) {
      acc[shortcut.category] = [];
    }
    acc[shortcut.category].push(shortcut);
    return acc;
  }, {} as Record<string, Shortcut[]>);

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MdKeyboard className="text-2xl text-primary-500" />
            <h2 className="text-2xl font-bold text-white">
              Keyboard Shortcuts
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <MdClose className="text-2xl" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {Object.entries(groupedShortcuts).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                {category}
              </h3>
              <div className="space-y-2">
                {items.map((shortcut, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <span className="text-white">{shortcut.description}</span>
                    <div className="flex items-center gap-1">
                      {shortcut.keys.map((key, keyIndex) => (
                        <React.Fragment key={keyIndex}>
                          <kbd className="px-2 py-1 text-xs font-semibold text-white bg-gray-700 border border-gray-600 rounded shadow">
                            {key}
                          </kbd>
                          {keyIndex < shortcut.keys.length - 1 && (
                            <span className="text-gray-500 mx-1">+</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 bg-gray-900 border-t border-gray-700 p-4 text-center">
          <p className="text-sm text-gray-400">
            Press <kbd className="px-2 py-1 text-xs font-semibold text-white bg-gray-700 border border-gray-600 rounded">?</kbd> to toggle this dialog
          </p>
        </div>
      </div>
    </div>
  );
};
