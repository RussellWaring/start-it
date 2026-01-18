<Section className="surface">
  <Container>
    <Stack>
      PageTitle + short summary
      Timeline
        Step (left line + dot)
        Step (cert/action)
        Step ...
    </Stack>
  </Container>
</Section>
import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";

import Section from "../layout/Section";
import Container from "../layout/Container";
import Stack from "../layout/Stack";

import { pathways } from "../data/resources";

function titleFromSlug(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function PathwayDetail() {
  const { slug } = useParams();

  const pathway = useMemo(
    () => pathways.find((p) => p.slug === slug),
    [slug]
  );

  // Fallback for unknown slugs
  const name = pathway?.name ?? titleFromSlug(slug ?? "pathway");
  const summary =
    pathway?.summary ??
    "This pathway page is a placeholder. It will eventually include steps, certifications, projects, and job-ready milestones.";

  const steps =
    pathway?.steps ??
    [
      {
        title: "Start here: overview + expectations",
        meta: "10–15 min read",
      },
      {
        title: "Core skills checklist",
        meta: "Skills + mini exercises",
      },
      {
        title: "Pick 1 certification or course",
        meta: "Beginner-friendly",
      },
      {
        title: "Build 1 portfolio project",
        meta: "Small + shippable",
      },
      {
        title: "Interview prep + resume targeting",
        meta: "Templates + examples",
      },
    ];

  return (
    <Section className="surface">
      <Container>
        <Stack>
          <div className="panel" style={{ padding: "18px" }}>
            <div style={{ marginBottom: "10px" }}>
              <Link to="/resources" style={{ color: "var(--muted)" }}>
                ← Back to Resources
              </Link>
            </div>

            <h1 style={{ margin: 0 }}>{name}</h1>
            <p style={{ margin: "10px 0 0 0", color: "var(--muted)" }}>
              {summary}
            </p>
          </div>

          {/* Timeline */}
          <div className="panel" style={{ padding: "18px" }}>
            <h2 style={{ margin: "0 0 14px 0" }}>Timeline</h2>

            <div style={{ display: "grid", gap: "14px" }}>
              {steps.map((s, idx) => (
                <div
                  key={`${s.title}-${idx}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "18px 1fr",
                    gap: "12px",
                    alignItems: "start",
                  }}
                >
                  {/* left rail */}
                  <div
                    style={{
                      position: "relative",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {/* line */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        width: "2px",
                        background: "var(--border)",
                      }}
                    />
                    {/* dot */}
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "999px",
                        background: "var(--accent)", // if you have it; else swap to var(--teal) etc
                        border: "2px solid var(--bg)",
                        marginTop: "2px",
                      }}
                    />
                  </div>

                  {/* content */}
                  <div
                    style={{
                      padding: "12px 14px",
                      borderRadius: "14px",
                      border: "1px solid var(--border)",
                      background: "var(--bg)",
                    }}
                  >
                    <div style={{ fontWeight: 700 }}>{s.title}</div>
                    <div style={{ color: "var(--muted)", marginTop: "4px" }}>
                      {s.meta}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
