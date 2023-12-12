import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OrderBy } from "@/types";

type HeaderProps = {
  orderBy: string;
  onGroupByChange: (value: OrderBy) => void;
};

type GroupByOption = {
  value: OrderBy;
  label: string;
};

const GroupByOptions: GroupByOption[] = [
  { value: "status", label: "Status" },
  { value: "labels", label: "Labels" },
  { value: "priority", label: "Priority" },
  { value: "assignee", label: "Assignee" },
];

export default function Header({ orderBy, onGroupByChange }: HeaderProps) {
  return (
    <div className="h-14 border-b px-6 flex items-center justify-between ">
      <span className="text-zinc-800 text-sm font-medium">All issues</span>
      <div className="flex gap-2 items-center">
        <Select value={orderBy} onValueChange={onGroupByChange}>
          <SelectTrigger className="w-[180px] text-sm h-7">
            <SelectValue placeholder="Group By" />
          </SelectTrigger>
          <SelectContent className="text-xs">
            <SelectGroup>
              <SelectLabel>Group By</SelectLabel>
              {GroupByOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
