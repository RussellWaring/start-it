// UI component: left sidebar navigation for account sections.
const MENU = [
    { key: "settings", label: "Account Settings" },
    { key: "notifications", label: "Notifications" },
    { key: "placeholder", label: "Placeholder" },
];

export default function AccountSidebar({ active, onChange }) {
    return (
        <aside className="panel">
            <div style={{ fontWeight: 700, marginBottom: 12 }}>Account</div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {MENU.map((item) => {
                    const isActive = item.key === active;

                    return (
                        <button
                            key={item.key}
                            type="button"
                            onClick={() => onChange(item.key)}
                            style={{
                                textAlign: "left",
                                width: "100%",
                                padding: "10px 12px",
                                borderRadius: 10,
                                border: isActive
                                    ? "2px solid var(--primary)"
                                    : "1px solid var(--border)",
                                background: "var(--bg)",
                                cursor: "pointer",
                                fontWeight: 600,
                            }}
                        >
                            {item.label}
                        </button>
                    );
                })}
            </div>
        </aside>
    );
}
