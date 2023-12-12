export type TeamId = "HFE" | "HBE" | "HP";
export type Status =
  | "Triage"
  | "Backlog"
  | "Todo"
  | "In Progress"
  | "In Review"
  | "Done";
export type Priority = "none" | "low" | "medium" | "high" | "critical";
export type Label =
  | "Bug"
  | "Feature"
  | "Performance"
  | "Security"
  | "Documentation"
  | "User Request"
  | "Immediate"
  | "Next Release"
  | "Major Release";

export type Ticket = {
  teamId: TeamId;
  id: string; // Format: `${teamID}-###` (e.g., "HFE-001")
  title: string;
  parentId: string | null;
  status: Status;
  priority: Priority;
  labels: Label[];
  assignee: string | null;
};

export type TicketList = {
  tickets: Ticket[];
};

export type OrderBy = "id" | "status" | "priority" | "assignee" | "labels";
