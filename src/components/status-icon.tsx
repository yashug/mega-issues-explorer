import { Status } from "@/types";
import { Icons } from "@/components/icons";

type StatusIconProps = {
  status: Status;
};

const ICONS: Record<Status, React.ReactNode> = {
  Backlog: <Icons.Backlog />,
  Done: <Icons.Done />,
  "In Progress": <Icons.InProgress />,
  "In Review": <Icons.InReview />,
  Todo: <Icons.Todo />,
  Triage: <Icons.Triage />,
};

export default function StatusIcon({ status }: StatusIconProps) {
  return ICONS[status];
}
