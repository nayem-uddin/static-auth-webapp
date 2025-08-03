import CommonLayout from "../ui/commonLayout";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default function Layout({ children }) {
  return (
    <CommonLayout>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        {children}
      </div>
    </CommonLayout>
  );
}
