export function FormWrapper({ title, children }) {
  return (
    <>
      <h2 className="text-center m-0 mb-2 text-violet-800 font-semibold">{title}</h2>
      <div className="h-[1px] bg-gray-500 mb-4 " />
      <div className="flex flex-col gap-4 p-2">{children}</div>
    </>
  );
}
