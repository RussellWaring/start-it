// Page component: defines the Home page content and layout composition (job board).
import { useEffect, useState } from "react";

import Section from "../layout/Section";
import Container from "../layout/Container";
import Stack from "../layout/Stack";
import { MOCK_JOBS } from "../data/jobs";

import "../Home.css";

export default function Home() {
  const [jobs] = useState(MOCK_JOBS);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [sortBy, setSortBy] = useState("relevance");


  // Auto-select the first job on load
  useEffect(() => {
    if (jobs.length && selectedJobId === null) {
      setSelectedJobId(jobs[0].id);
    }
  }, [jobs, selectedJobId]);

  const selectedJob = jobs.find((j) => j.id === selectedJobId);

  return (
    <Section className="surface">
      <Container>
        <Stack>
          {/* Search Row */}
          <div className="panel">
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <input
                type="text"
                placeholder="Search roles (ex: help desk, junior analyst, IT support)..."
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

          {/* Filters row (OUTSIDE the white panel) */}
          <div className="filter-row">
            <select className="filter-select" defaultValue="">
              <option value="" disabled>
                Date posted
              </option>
              <option>Any</option>
              <option>Past 24 hours</option>
              <option>Past 3 days</option>
              <option>Past week</option>
              <option>Past month</option>
            </select>

            <select className="filter-select" defaultValue="">
              <option value="" disabled>
                Experience level
              </option>
              <option>Entry level (0–1 years)</option>
              <option>New grad</option>
              <option>Intern / Co-op</option>
            </select>

            <select className="filter-select" defaultValue="">
              <option value="" disabled>
                Remote
              </option>
              <option>Any</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>On-site</option>
            </select>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "var(--border)", margin: "6px 0"}} />

          {/* NEW: Sort row (non-functional placeholder) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
              color: "var(--muted)",
              fontSize: "0.95rem",
              paddingLeft: "6px",
            }}
          >
            <span style={{ fontWeight: 600, color: "var(--text)" }}>Sort by:</span>

            <button
              type="button"
              className={`sort-pill ${sortBy === "relevance" ? "sort-pill--active" : ""}`}
              onClick={() => setSortBy("relevance")}
            >
              Relevance
            </button>

            <button
              type="button"
              className={`sort-pill ${sortBy === "date" ? "sort-pill--active" : ""}`}
              onClick={() => setSortBy("date")}
            >
              Date
            </button>

            <button
              type="button"
              className={`sort-pill ${sortBy === "deadline" ? "sort-pill--active" : ""}`}
              onClick={() => setSortBy("deadline")}
            >
              Deadline
            </button>
          </div>

          {/* Job board layout: left list + right details */}
          <div
            className="job-board-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "340px 1fr",
              gap: "var(--gap)",
              alignItems: "start",
            }}
          >
            {/* LEFT: job list */}
            <div className="panel">
              <div style={{ fontWeight: 600, marginBottom: "12px" }}>Jobs</div>

              <Stack>
                {jobs.map((job) => {
                  const isSelected = job.id === selectedJobId;

                  return (
                    <button
                      key={job.id}
                      onClick={() => setSelectedJobId(job.id)}
                      className={`job-item ${isSelected ? "job-item--selected" : ""
                        }`}
                      type="button"
                    >
                      <div className="job-title">{job.title}</div>

                      <div style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
                        {job.company}
                      </div>

                      <div style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                        {job.location}
                      </div>
                    </button>
                  );
                })}
              </Stack>
            </div>

            {/* RIGHT: job details */}
            <div className="panel job-details-sticky">
              {!selectedJob ? (
                <div>Select a job to view details.</div>
              ) : (
                <Stack>
                  <div>
                    <h2 style={{ margin: 0 }}>{selectedJob.title}</h2>
                    <div style={{ color: "var(--muted)" }}>
                      {selectedJob.company} • {selectedJob.location}
                    </div>
                    <div style={{ color: "var(--muted)", marginTop: "6px" }}>
                      {selectedJob.salary} • {selectedJob.type} •{" "}
                      {selectedJob.posted}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "6px" }}>
                      Description
                    </div>
                    <div>{selectedJob.description}</div>
                  </div>

                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "6px" }}>
                      Requirements
                    </div>
                    <ul style={{ margin: 0, paddingLeft: "18px" }}>
                      {selectedJob.requirements.map((req) => (
                        <li key={req} style={{ marginBottom: "6px" }}>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
                  >
                    <button className="btn btn-primary">Apply</button>

                    <button
                      className="btn"
                      style={{
                        background: "var(--bg)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      Save Job
                    </button>
                  </div>
                </Stack>
              )}
            </div>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
