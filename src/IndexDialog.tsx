"use client";

import { useState } from "react";
import "./IndexDialog.css";

interface IndexDialogProps {
  value: number;
  onIndexChange: (index: number) => void;
}

export default function IndexDialog({
  value,
  onIndexChange,
}: IndexDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        style={{
          padding: "8px 16px",
          backgroundColor: "#0066cc",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "500",
          transition: "opacity 200ms",
          opacity: "0",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
      >
        Index: {value}
      </button>

      {isOpen && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <h2 className="dialog-title">Select Index</h2>

            <div className="dialog-grid">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  onClick={() => {
                    onIndexChange(index);
                    setIsOpen(false);
                  }}
                  className={
                    index === value ? "dialog-button active" : "dialog-button"
                  }
                >
                  {index}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="dialog-close-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
