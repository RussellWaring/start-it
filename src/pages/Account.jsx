// Page component: Account page composition (sidebar + active panel).
import { useState } from "react";

import Section from "../layout/Section";
import Container from "../layout/Container";

import AccountSidebar from "../components/account/AccountSidebar";
import AccountSettingsPanel from "../components/account/AccountSettingsPanel";
import NotificationsPanel from "../components/account/NotificationsPanel";
import PlaceholderPanel from "../components/account/PlaceholderPanel";

export default function Account() {
  const [active, setActive] = useState("settings");

  return (
    <Section className="surface">
      <Container>
        <div
          className="account-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "260px 1fr",
            gap: "var(--gap)",
            alignItems: "start",
          }}
        >
          <AccountSidebar active={active} onChange={setActive} />

          <div className="panel">
            {active === "settings" && <AccountSettingsPanel />}
            {active === "notifications" && <NotificationsPanel />}
            {active === "placeholder" && <PlaceholderPanel />}
          </div>
        </div>

        <style>
          {`
            @media (max-width: 900px) {
              .account-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>
      </Container>
    </Section>
  );
}
