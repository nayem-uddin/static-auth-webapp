import { ContinueSession, EndSession } from "../ui/buttons";
import FieldsetLayout from "../ui/fieldsetLayout";

export default function Page() {
  return (
    <FieldsetLayout>
      <p className="h4 mb-4">Select your choice</p>
      <div className="d-flex flex-column">
        <ContinueSession />
        <EndSession />
      </div>
    </FieldsetLayout>
  );
}
