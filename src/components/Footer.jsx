// UI component: site footer shown across pages. Links, contact info, and site details.
import Container from "../layout/Container";

export default function Footer() {
  return (
    <footer style={{ padding: "24px 0" }}>
      <Container>
        <div style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
          © {new Date().getFullYear()} start-it
        </div>
      </Container>
    </footer>
  );
}
