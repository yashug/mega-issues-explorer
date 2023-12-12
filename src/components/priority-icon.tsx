import type { Priority } from "@/types";
import { Icons } from "@/components/icons";

type PriorityIconProps = {
  priority: Priority;
};

const ICONS: Record<Priority, JSX.Element> = {
  none: <Icons.NonePriority />,
  low: <Icons.LowPriority />,
  medium: <Icons.MediumPriority />,
  high: <Icons.HighPriority />,
  critical: <Icons.CriticalPriority />,
};

export default function PriorityIcon({ priority }: PriorityIconProps) {
  return ICONS[priority];
}
