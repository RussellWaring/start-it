// Layout wrapper: vertical layout that spaces children evenly using gap.

export default function Stack({ children, className = "" }) {
  return <div className={`stack ${className}`}>{children}</div>;
}
