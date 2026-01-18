// Layout wrapper: responsive grid system for columns/rows using CSS Grid.
export default function Grid({ cols = 2, children, className = "" }) {
  return <div className={`grid grid-cols-${cols} ${className}`}>{children}</div>;
}
