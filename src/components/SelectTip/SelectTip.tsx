import { TipButton } from "../TipButton/TipButton";

interface SelectTipProps {
  label: string;
  values: string[];
  setTipValue: (selectedTip: number) => void;
  handleCustomInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedTip: number;
  isCustomInputVisible: boolean;
  setCustomInputVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SelectTip({
  label,
  values,
  setTipValue,
  handleCustomInput,
  selectedTip,
  isCustomInputVisible,
  setCustomInputVisible,
}: SelectTipProps) {
  function handleCustomClick() {
    setCustomInputVisible(true);
  }

  function handleCustomBlur(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "") setCustomInputVisible(false);
  }

  return (
    <div className="bg-white w-full h-full mb-16 mt-14 sm-max:mb-8 sm:mt-8 sm-max:w-full">
      <label className="font-mono font-bold text-xl leading-6 text-custom-light-grey sm-max:text-sm">
        {label}
      </label>
      <div className="grid grid-cols-3 gap-6 w-full mt-[1.5rem] sm-max:grid-cols-2 sm-max:gap-4 sm-max:mt-4">
        {values.map((value) =>
          value === "Custom" ? (
            isCustomInputVisible ? (
              <input
                type="text"
                className="w-full rounded-md bg-custom-label-background text-custom-light-grey font-mono text-2xl leading-6 font-bold text-center border-2 border-custom-tiffany-blue outline-none sm-max:rounded-sm sm-max:text-xl"
                onChange={handleCustomInput}
                onBlur={handleCustomBlur}
              />
            ) : (
              <TipButton
                value={value}
                types="custom"
                key={value}
                onClick={handleCustomClick}
                selectedTip={selectedTip}
              />
            )
          ) : (
            <TipButton
              value={value}
              types="normal"
              onClick={() => {
                setTipValue(Number(value));
                setCustomInputVisible(false);
              }}
              selectedTip={selectedTip}
            />
          )
        )}
      </div>
    </div>
  );
}
