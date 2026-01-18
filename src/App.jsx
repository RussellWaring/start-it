// App shell: composes global layout (Navbar + routed pages + Footer).
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import SavedJobs from "./pages/SavedJobs";
import Resources from "./pages/Resources";
import Account from "./pages/Account";
import PathwayDetail from "./pages/PathwayDetail";

function AppShell() {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";

  return (
    <>
      {!isLanding && <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/jobs" element={<Home />} />
          <Route path="/saved" element={<SavedJobs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/account" element={<Account />} />
          <Route path="/pathways/:slug" element={<PathwayDetail />} />
        </Routes>
      </main>

      {!isLanding && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
