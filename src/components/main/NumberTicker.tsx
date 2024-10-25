import NumberTicker from "../ui/number-ticker";


export function NumberTickerComponent({
  value
}:{
  value:number
}) {
  return (
    <p className="whitespace-pre-wrap text-2xl font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={value} />
    </p>
  );
}