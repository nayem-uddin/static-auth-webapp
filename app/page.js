import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { kaushan } from "./ui/fonts";
export default function Home() {
  return (
    <div className={`home`}>
      <h1 className={`display-1 fw-semibold ${kaushan.className}`}>
        Welcome to Demo
      </h1>
    </div>
  );
}
