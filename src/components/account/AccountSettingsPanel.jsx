// UI component: Account Settings panel (profile + sign-in details).
import Stack from "../../layout/Stack";
import AccountRow from "./AccountRow";

function TextButton({ children }) {
    return (
        <button
            type="button"
            style={{
                background: "transparent",
                border: "1px solid var(--border)",
                color: "var(--text)",
                borderRadius: 999,
                padding: "8px 12px",
                fontWeight: 600,
                cursor: "pointer",
            }}
        >
            {children}
        </button>
    );
}

export default function AccountSettingsPanel() {
    return (
        <Stack>
            <div>
                <h2 style={{ margin: 0 }}>Account Settings</h2>
                <div style={{ color: "var(--muted)", marginTop: 6 }}>
                    Manage your profile and sign-in details.
                </div>
            </div>

            <div>
                <AccountRow
                    label="Account type"
                    value="Recent graduate"
                    actions={<TextButton>Change account type</TextButton>}
                />
                <AccountRow
                    label="Sector"
                    value="IT"
                    actions={<TextButton>Change sector</TextButton>}
                />
                <AccountRow
                    label="Email"
                    value="there.email@example.com"
                    actions={
                        <>
                            <TextButton>Change email</TextButton>
                            <TextButton>Change password</TextButton>
                        </>
                    }
                />
            </div>

            <div style={{ paddingTop: 8, display: "flex", justifyContent: "center" }}>
                <button
                    type="button"
                    className="btn"
                    style={{
                        background: "var(--bg)",
                        border: "1px solid var(--accent)",
                        color: "var(--accent)",
                        
                    }}
                >
                    Close my account
                </button>
            </div>
        </Stack>
    );
}
