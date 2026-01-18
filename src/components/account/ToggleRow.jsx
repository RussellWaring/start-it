// UI component: simple toggle row (UI-only).
import { useState } from "react";

export default function ToggleRow({ title, desc }) {
    const [on, setOn] = useState(false);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 16,
                padding: 14,
                border: "1px solid var(--border)",
                borderRadius: 12,
                background: "var(--bg)",
                alignItems: "center",
            }}
        >
            <div>
                <div style={{ fontWeight: 700 }}>{title}</div>
                <div style={{ color: "var(--muted)", fontSize: "0.95rem" }}>{desc}</div>
            </div>

            <button
                type="button"
                onClick={() => setOn(!on)}
                aria-pressed={on}
                style={{
                    width: 52,
                    height: 30,
                    borderRadius: 999,
                    border: "1px solid var(--border)",
                    background: on ? "var(--primary)" : "var(--bg)",
                    cursor: "pointer",
                    position: "relative",
                    flex: "0 0 auto",
                }}
            >
                <span
                    style={{
                        position: "absolute",
                        top: 3,
                        left: on ? 26 : 4,
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "#fff",
                        transition: "left 160ms ease",
                    }}
                />
            </button>
        </div>
    );
}
