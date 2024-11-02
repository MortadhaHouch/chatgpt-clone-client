import ShineBorder from "../ui/shine-border";

export function ShineBorderComponent({children}:{children:React.ReactNode}) {
  return (
    <ShineBorder
      className="relative flex w-[clamp(300px,30%,450px)] h-[clamp(300px,30%,auto)] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      {children}
    </ShineBorder>
  );
}