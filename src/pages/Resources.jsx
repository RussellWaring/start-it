// Page component: Resources page content (What's new + Pathways).
import Section from "../layout/Section";
import Container from "../layout/Container";
import Stack from "../layout/Stack";
import { Link } from "react-router-dom";

import "../Resources.css";

import { whatsNew, pathways } from "../data/resources";

export default function Resources() {
  const sortedPathways = [...pathways].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <Section className="surface">
      <Container>
        <Stack>
          {/* Search row placeholder */}
          <div className="panel">
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <input
                type="text"
                placeholder="Search pathways, skills, certs..."
                style={{
                  flex: "1 1 360px",
                  padding: "12px 14px",
                  borderRadius: "999px",
                  border: "1px solid var(--border)",
                  outline: "none",
                  fontSize: "1rem",
                  background: "var(--bg)",
                }}
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>

          {/* What's new */}
          <div>
            <h2 style={{ margin: "0 0 12px 0" }}>What’s new</h2>
            <div className="grid grid-cols-3">
              {whatsNew.slice(0, 3).map((item) => (
                <div key={item.id} className="panel">
                  <div style={{ fontWeight: 600 }}>{item.title}</div>
                  <div style={{ color: "var(--muted)" }}>
                    {item.type} • {item.level}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "var(--border)" }} />

          {/* Pathways */}
          <div>
            <h2 style={{ margin: "0 0 12px 0" }}>Pathways</h2>

            {/* ✅ FIX: fixed-width grid tracks so cards don't stretch */}
            <div className="pathways-grid">
              {sortedPathways.map((p) => (
                <Link
                  key={p.slug}
                  to={`/pathways/${p.slug}`}
                  className="panel pathway-card"
                  style={{
                    minHeight: "210px",
                    padding: "18px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "center",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>
                    {p.name}
                  </div>

                  <img
                    src={p.icon}
                    alt=""
                    aria-hidden="true"
                    className="pathway-icon"
                    style={{
                      width: 92,
                      height: 92,
                      objectFit: "contain",
                      marginTop: "14px",
                      marginBottom: "6px",
                    }}
                  />

                  <div style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
                    View pathway
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
