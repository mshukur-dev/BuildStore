import React from "react";

/**
 * @param {"fullscreen"|"inline"|"overlay"} variant
 * @param {string} size  – CSS value for width/height of the spinner
 */
export default function Loader({ variant = "inline", size = "56px" }) {
    const spinner = (
        <div
            style={{
                width: size,
                height: size,
                border: "4px solid #E2E8F0",
                borderTop: "4px solid #0A61DE",
                borderRadius: "50%",
                animation: "spin 0.75s linear infinite",
            }}
        />
    );

    if (variant === "fullscreen") {
        return (
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(255,255,255,0.85)",
                    zIndex: 9999,
                }}
            >
                {spinner}
                <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
            </div>
        );
    }

    if (variant === "overlay") {
        return (
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(255,255,255,0.75)",
                    borderRadius: "inherit",
                    zIndex: 10,
                }}
            >
                {spinner}
                <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
            </div>
        );
    }

    // inline (default)
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "48px 0",
                width: "100%",
            }}
        >
            {spinner}
            <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
        </div>
    );
}
