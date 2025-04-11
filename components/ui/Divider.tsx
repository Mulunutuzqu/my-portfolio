export default function Divider() {
  return (
    <div className="flex w-full items-center">
      <div className="relative ml-[-5px] mt-[-10px]">
        <div className="absolute h-[10px] w-[10px] rounded-[3px] border border-border bg-white" />
      </div>
      <hr className="w-full" />
      <div className="relative mr-[-5px] mt-[-10px]">
        <div className="absolute h-[10px] w-[10px] rounded-[3px] border border-border bg-white" />
      </div>
    </div>
  );
}
