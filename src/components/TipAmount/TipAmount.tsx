interface TipAmountProps {
  title: string;
  value: string;
}

export function TipAmount({ title, value }: TipAmountProps) {
  return (
    <div className="flex w-full justify-between mb-16 sm:mb-4 sm:w-full">
      <div className="flex flex-col">
        <p className="font-normal font-mono text-lg leading-6 text-white">
          {title}
        </p>
        <p className="font-mono font-normal text-lg leading-6 text-custom-desaturated-teal">
          / Person
        </p>
      </div>
      <div className="font-mono text-[3vw] leading-6 text-custom-tiffany-blue sm-max:text-[6vw] sm-max:leading-10">
        ${value}
      </div>
    </div>
  );
}
