// Layout wrapper: centers content and enforces max-width + side padding (gutters).
export default function Container({ children, className = "" }) {
  return <div className={`container ${className}`}>{children}</div>;
}
