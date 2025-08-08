export default function CommonLayout({ children }) {
  return (
    <div className="common">
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        {children}
      </div>
    </div>
  );
}
