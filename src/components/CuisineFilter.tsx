import { cuisineList } from "@/config/restaurant-options-config";
import { Label } from "./ui/label";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";

type Props = {
  onChange: (cuisine: string[]) => void;
  selectedCuisines: string[];
  isExpanded: boolean;
  onExpandedClick: () => void;
};
const CuisineFilter = ({
  onChange,
  selectedCuisines,
  isExpanded,
  onExpandedClick,
}: Props) => {
  console.log("CuisineFilter component rendered");

  const handleCuisinesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedCuisine = event.target.value;
    const isCheck = event.target.checked;

    console.log(`Cuisine: ${clickedCuisine}, Checked: ${isCheck}`);

    const newCuisinesList = isCheck
      ? [...selectedCuisines, clickedCuisine]
      : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine);

    console.log("New cuisines list:", newCuisinesList);

    onChange(newCuisinesList);
  };

  const handleCuisinesReset = () => onChange([]);
  console.log("handleCuisinesReset called");

  console.log("isExpanded state:", isExpanded);

  return (
    <>
      <div className="flex justify-between items-center px-2">
        <div className="text-md font-semibold mb-2">Filter by cuisine</div>
        <div
          onClick={handleCuisinesReset}
          className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-500"
        >
          Reset filters
        </div>
      </div>
      <div className="space-y-2 flex flex-col">
        {cuisineList
          .slice(0, isExpanded ? cuisineList.length : 7)
          .map((cuisine) => {
            const isSelected = selectedCuisines.includes(cuisine);
            return (
              <div className="flex">
                <input
                  id={`cuisine_${cuisine}`}
                  type="checkbox"
                  className="hidden"
                  value={cuisine}
                  checked={isSelected}
                  onChange={handleCuisinesChange}
                />
                <Label
                  htmlFor={`cuisine_${cuisine}`}
                  className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold ${
                    isSelected
                      ? "border border-green-600 text-green-600"
                      : "border border-slate-300"
                  }`}
                >
                  {isSelected && <Check size={20} strokeWidth={3} />}
                  {cuisine}
                </Label>
              </div>
            );
          })}
      </div>

      <Button onClick={onExpandedClick} variant="link" className="mt-4 flex-1">
        {isExpanded ? (
          <span className="flex flex-row items-center">
            View Less <ChevronUp />
          </span>
        ) : (
          <span className="flex flex-row items-center">
            View More <ChevronDown />
          </span>
        )}
      </Button>
    </>
  );
};

export default CuisineFilter;
