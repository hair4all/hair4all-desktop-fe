import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

const ToggleButton = () => {
  const [timeRange, setTimeRange] = useState("90d"); // Set a default active toggle

  const handleValueChange = (value: string) => {
    // Set the timeRange directly to the new value
    if(value){
        setTimeRange(value);
    }
  };

  const toggleClass = (value: string) => {
    return `text-sm border-b-3 active:bg-transparent hover:cursor-pointer hover:border-b-3 border-gold ${timeRange === value ? "!bg-transparent data-[state=on]:!bg-transparent font-semibold" : "text-dark-grey border-b-1 border-dark-grey"}`;
  };

  return (
    <ToggleGroup 
      type="single" 
      className="gap-1 text-sm"
      value={timeRange}
      onValueChange={handleValueChange}
    >
      <ToggleGroupItem
        value="90d"
        className={toggleClass("90d")}
      >
        Mingguan
      </ToggleGroupItem>
      <ToggleGroupItem
        value="30d"
        className={toggleClass("30d")}
      >
        Bulanan
      </ToggleGroupItem>
      <ToggleGroupItem
        value="7d"
        className={toggleClass("7d")}
      >
        Tahunan
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default ToggleButton;
