// UI component: Notifications preferences panel (UI-only).
import Stack from "../../layout/Stack";
import ToggleRow from "./ToggleRow";

export default function NotificationsPanel() {
    return (
        <Stack>
            <div>
                <h2 style={{ margin: 0 }}>Notifications</h2>
                <div style={{ color: "var(--muted)", marginTop: 6 }}>
                    Choose what emails you want to receive.
                </div>
            </div>

            <div style={{ display: "grid", gap: 12 }}>
                <ToggleRow
                    title="Job alerts"
                    desc="Email me when new entry-level jobs match my interests."
                />
                <ToggleRow
                    title="Pathway resources"
                    desc="Email me when resources are added for pathways I follow."
                />
                <ToggleRow
                    title="Newsletter"
                    desc="Occasional updates (no spam, no selling data)."
                />
            </div>
        </Stack>
    );
}
