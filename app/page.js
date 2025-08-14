import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Appbar from "./ui/appbar";
import { Fragment } from "react";
export default function Home() {
  return (
    <Fragment>
      <Appbar />
      <div className={`home`}>
        <div className="ms-2 ms-md-5 inner-div mb-md-5">
          <h1 className={`display-3`}>Your satisfaction is our priority</h1>
          <p className="mt-4">
            Our purpose is to provide our clients with the best possible
            products and services. Thus, we always try to keep up the good
            relationship with our clients. We believe that the success of an
            enterprise lies in the trust of its clients.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
