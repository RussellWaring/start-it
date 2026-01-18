// UI component: site header/navigation shown across pages.
import { NavLink } from "react-router-dom";
import Container from "../layout/Container";
import logo from "../assets/logo1.png"; // adjust name/path if needed


const links = [
  { to: "/jobs", label: "Home" },
  { to: "/saved", label: "Saved Jobs" },
  { to: "/resources", label: "Resources" },
  { to: "/account", label: "Account" },
];

export default function Navbar() {
  return (
    <header className="header">
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 0",
            gap: "16px",
          }}
        >
          {/* <div style={{ fontWeight: 600 }}>Start-it</div> */}
          {/* Logo (clickable, returns to Home) */}
          <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Start-it"
              style={{
                height: "40px",
                width: "auto",
                display: "block",
              }}
            />
          </NavLink>

          <nav style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                style={({ isActive }) => ({
                  color: "#0b2322",
                  textDecoration: "none",
                  fontWeight: 600,
                  opacity: isActive ? 1 : 0.8,
                })}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
