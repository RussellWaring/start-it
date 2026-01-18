// UI component: Placeholder panel for future account features.
import Stack from "../../layout/Stack";

export default function PlaceholderPanel() {
    return (
        <Stack>
            <div>
                <h2 style={{ margin: 0 }}>Placeholder</h2>
                <div style={{ color: "var(--muted)", marginTop: 6 }}>
                    Reserved for future account features.
                </div>
            </div>

            <div style={{ color: "var(--muted)" }}>Coming soon.</div>
        </Stack>
    );
}
