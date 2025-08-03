import CommonLayout from "../ui/commonLayout";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export const metadata = {
  title: "Password recovery",
};
export default function Layout({ children }) {
  return <CommonLayout>{children}</CommonLayout>;
}
