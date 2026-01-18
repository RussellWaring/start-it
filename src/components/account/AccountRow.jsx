// UI component: labeled settings row with value and action buttons.
export default function AccountRow({ label, value, actions }) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr auto",
                gap: "12px",
                alignItems: "center",
                padding: "12px 0",
                borderBottom: "1px solid var(--border)",
            }}
        >
            <div style={{ color: "var(--muted)", fontWeight: 600 }}>{label}</div>
            <div style={{ fontWeight: 600 }}>{value}</div>
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                {actions}
            </div>
        </div>
    );
}
