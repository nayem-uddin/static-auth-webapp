import PassChangeForm from "@/app/ui/change-password/innerForm";
export const metadata = {
  title: "Change password",
};
export default function Page() {
  return (
    <div>
      <h2>Change password</h2>
      <PassChangeForm />
    </div>
  );
}
