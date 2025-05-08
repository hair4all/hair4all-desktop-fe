import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const SelectButton = () => {
    const [selectedValue, setSelectedValue] = useState<string>('');

    return (
        <Select value={selectedValue} onValueChange={setSelectedValue} >
        <SelectTrigger className=" text-black rounded-2xl shadow-gray-200 shadow-md px-3 text-xs justify-center gap-1">
            <SelectValue placeholder="Tahun" className="text-black">
                {selectedValue}
            </SelectValue>
        </SelectTrigger>
        <SelectContent className="text-black relative right-8 text-center">
            <SelectItem value="2025" className="hover:cursor-pointer hover:bg-gray-100 rounded-sm">
                2025
            </SelectItem>
            <SelectItem value="2024" className="hover:cursor-pointer hover:bg-gray-100 rounded-sm">
                2024
            </SelectItem>
            <SelectItem value="2023" className="hover:cursor-pointer hover:bg-gray-100 rounded-sm">
                2023
            </SelectItem>
        </SelectContent>
        </Select>
    );
};

export default SelectButton;
