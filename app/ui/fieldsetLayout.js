export default function FieldsetLayout({ children }) {
  return (
    <fieldset
      className="border border-secondary-subtle rounded shadow bg-white m-auto"
      style={{
        maxWidth: "375px",
        padding: "30px 30px",
      }}
    >
      {children}
    </fieldset>
  );
}
