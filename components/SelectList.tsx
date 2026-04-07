import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "./ui/select";

import { NO_FILTER } from "@/types/filters.types";

interface SelectListProps {
  value: string;
  defaultOption: string;
  selectOptions?: readonly string[];
  className?: string;
  onChange: (value: string) => void;
}

export default function SelectList({
  value,
  defaultOption,
  selectOptions,
  onChange,
  className,
}: SelectListProps) {
  return (
    <Select value={value ?? NO_FILTER} onValueChange={(val) => onChange(val)}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={defaultOption} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={NO_FILTER} key={defaultOption}>
            {defaultOption}
          </SelectItem>
          {selectOptions?.map((option) => {
            return (
              <SelectItem value={option} key={option}>
                {option}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
