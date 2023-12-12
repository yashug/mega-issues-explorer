type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  NonePriority: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="#6B6F76"
      aria-label="No Priority"
      {...props}
    >
      <rect width={3} height={1.5} x={1} y={7.25} opacity={0.9} rx={0.5} />
      <rect width={3} height={1.5} x={6} y={7.25} opacity={0.9} rx={0.5} />
      <rect width={3} height={1.5} x={11} y={7.25} opacity={0.9} rx={0.5} />
    </svg>
  ),
  HighPriority: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="#6B6F76"
      aria-label="High Priority"
      {...props}
    >
      <rect width={3} height={6} x={1} y={8} rx={1} />
      <rect width={3} height={9} x={6} y={5} rx={1} />
      <rect width={3} height={12} x={11} y={2} rx={1} />
    </svg>
  ),
  MediumPriority: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="#6B6F76"
      aria-label="Medium Priority"
      {...props}
    >
      <rect width={3} height={6} x={1} y={8} rx={1} />
      <rect width={3} height={9} x={6} y={5} rx={1} />
      <rect width={3} height={12} x={11} y={2} fillOpacity={0.4} rx={1} />
    </svg>
  ),
  LowPriority: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="#6B6F76"
      aria-label="Low Priority"
      {...props}
    >
      <rect width={3} height={6} x={1} y={8} rx={1} />
      <rect width={3} height={9} x={6} y={5} fillOpacity={0.4} rx={1} />
      <rect width={3} height={12} x={11} y={2} fillOpacity={0.4} rx={1} />
    </svg>
  ),
  CriticalPriority: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="#fc7840"
      aria-label="Urgent Priority"
      {...props}
    >
      <path
        fill="#FC7840"
        d="M3 1.346a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2H3Zm3.914 3h1.738L8.5 9.948H7.07l-.156-5.602Zm1.809 7.164a.95.95 0 0 1-.938.938.934.934 0 1 1 0-1.867c.5 0 .934.417.938.929Z"
      />
    </svg>
  ),
  Todo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      fill="none"
      aria-label="Todo"
      className="color-override color-override"
      {...props}
    >
      <rect
        width={12}
        height={12}
        x={1}
        y={1}
        stroke="#B8B8B8"
        strokeWidth={2}
        rx={6}
      />
      <path fill="#B8B8B8" d="M7 7V3.5z" />
    </svg>
  ),
  InProgress: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      fill="none"
      aria-label="In Progress"
      className="color-override"
      {...props}
    >
      <rect
        width={12}
        height={12}
        x={1}
        y={1}
        stroke="#E8B600"
        strokeWidth={2}
        rx={6}
      />
      <path fill="#E8B600" d="M7 7V3.5a3.5 3.5 0 0 1 0 7z" />
    </svg>
  ),
  Backlog: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      fill="#95999f"
      aria-label="Backlog"
      className="color-override"
      {...props}
    >
      <path
        fill="#95999F"
        d="m13.94 7.914-1.982-.258a5.06 5.06 0 0 0 0-1.312l1.983-.258a7.054 7.054 0 0 1 0 1.828ZM13.47 4.32a6.995 6.995 0 0 0-.915-1.581l-1.586 1.218c.265.345.485.724.653 1.13l1.848-.767Zm-2.207-2.874-1.22 1.586a4.991 4.991 0 0 0-1.129-.653L9.68.53c.569.236 1.1.545 1.582.915ZM7.913.06l-.258 1.983a5.064 5.064 0 0 0-1.312 0L6.086.06a7.066 7.066 0 0 1 1.828 0ZM4.32.531l.767 1.848a4.993 4.993 0 0 0-1.13.653L2.74 1.446A6.993 6.993 0 0 1 4.32.531ZM1.446 2.74l1.586 1.218a4.993 4.993 0 0 0-.653 1.13L.53 4.32c.236-.569.545-1.1.915-1.581ZM.06 6.086a7.066 7.066 0 0 0 0 1.828l1.983-.258a5.064 5.064 0 0 1 0-1.312L.06 6.086ZM.531 9.68l1.848-.767c.168.406.388.785.653 1.13l-1.586 1.219A6.993 6.993 0 0 1 .531 9.68Zm2.208 2.874 1.218-1.586c.345.265.724.485 1.13.653L4.32 13.47a6.995 6.995 0 0 1-1.581-.915Zm3.347 1.387.258-1.983a5.06 5.06 0 0 0 1.312 0l.258 1.983a7.054 7.054 0 0 1-1.828 0Zm3.594-.472-.767-1.848a4.994 4.994 0 0 0 1.13-.653l1.219 1.586a6.995 6.995 0 0 1-1.582.915Zm2.874-2.207-1.586-1.22c.265-.344.485-.723.653-1.129l1.848.767c-.236.569-.545 1.1-.915 1.582Z"
      />
    </svg>
  ),
  Done: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      fill="#5e6ad2"
      aria-label="Done"
      className="color-override color-override"
      {...props}
    >
      <path
        fill="#5E6AD2"
        fillRule="evenodd"
        d="M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0Zm4.101 5.101a.85.85 0 1 0-1.202-1.202L5.5 8.298 4.101 6.899a.85.85 0 1 0-1.202 1.202l2 2a.85.85 0 0 0 1.202 0l5-5Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  Triage: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 3h12l4 6-10 13L2 9Z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </svg>
  ),
  InReview: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  NoAssignee: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="#6B6F76"
      className="sc-iRPzmX MDFYo"
      {...props}
    >
      <path
        fill="#90959D"
        d="M8 4a2 2 0 0 0-2 2v.5a2 2 0 0 0 4 0V6a2 2 0 0 0-2-2ZM5.155 12.857c-.672-.459-.609-1.403-.034-1.978A3 3 0 0 1 7.243 10h1.514a3 3 0 0 1 2.122.879c.575.575.638 1.52-.034 1.978-.367.25-.769.45-1.195.593l-.059.02a5.032 5.032 0 0 1-3.182 0l-.06-.02a4.822 4.822 0 0 1-1.194-.593Z"
      />
      <path
        fill="#90959D"
        fillRule="evenodd"
        d="M14.988 8.417a.473.473 0 0 1-.543.433l-.496-.065a.537.537 0 0 1-.453-.563 5.646 5.646 0 0 0 0-.444.537.537 0 0 1 .453-.563l.496-.065a.473.473 0 0 1 .543.433 7.1 7.1 0 0 1 0 .834Zm-.727-3.551a.473.473 0 0 1-.254.646l-.462.192a.538.538 0 0 1-.674-.261 5.497 5.497 0 0 0-.22-.38.538.538 0 0 1 .11-.715l.396-.305a.473.473 0 0 1 .687.102c.153.231.292.472.417.72Zm-2.406-2.71c.23.152.27.468.102.687l-.305.396a.538.538 0 0 1-.714.11 5.49 5.49 0 0 0-.38-.22.538.538 0 0 1-.261-.674l.191-.462a.473.473 0 0 1 .646-.254c.25.125.49.264.72.417ZM8.416 1.012a.473.473 0 0 1 .433.543l-.065.496a.537.537 0 0 1-.563.453 5.627 5.627 0 0 0-.444 0 .537.537 0 0 1-.563-.453l-.065-.496a.473.473 0 0 1 .433-.543 7.109 7.109 0 0 1 .834 0Zm-3.551.727a.473.473 0 0 1 .646.254l.192.462a.538.538 0 0 1-.261.674c-.13.069-.257.142-.38.22a.537.537 0 0 1-.715-.11l-.305-.396a.473.473 0 0 1 .102-.687c.231-.153.472-.292.72-.417Zm-2.71 2.406a.473.473 0 0 1 .687-.102l.396.305a.537.537 0 0 1 .11.714 5.49 5.49 0 0 0-.22.38.538.538 0 0 1-.674.262l-.462-.192a.473.473 0 0 1-.254-.646c.125-.25.264-.49.417-.72ZM1.555 7.15a.473.473 0 0 0-.543.433 7.109 7.109 0 0 0 0 .834.473.473 0 0 0 .543.433l.496-.065a.537.537 0 0 0 .453-.563 5.627 5.627 0 0 1 0-.444.537.537 0 0 0-.453-.563l-.496-.065Zm.184 3.984a.473.473 0 0 1 .254-.646l.462-.191a.538.538 0 0 1 .674.26c.069.13.142.257.22.38a.538.538 0 0 1-.11.715l-.396.305a.473.473 0 0 1-.687-.103 6.989 6.989 0 0 1-.417-.72Zm2.406 2.71a.473.473 0 0 1-.102-.687l.305-.396a.538.538 0 0 1 .714-.11 5.5 5.5 0 0 0 .38.22c.245.128.367.419.262.674l-.192.462a.473.473 0 0 1-.646.254 6.999 6.999 0 0 1-.72-.417Zm3.438 1.144a.473.473 0 0 1-.433-.543l.065-.496a.537.537 0 0 1 .563-.453 5.646 5.646 0 0 0 .444 0c.276-.011.527.18.563.453l.065.496a.473.473 0 0 1-.433.543 7.1 7.1 0 0 1-.834 0Zm3.551-.727a.473.473 0 0 1-.646-.254l-.191-.462a.538.538 0 0 1 .26-.674c.13-.069.257-.142.38-.22a.538.538 0 0 1 .715.11l.305.396a.473.473 0 0 1-.103.687c-.23.153-.47.292-.72.417Zm2.023-2.304a.473.473 0 0 0 .687-.103c.153-.23.292-.47.417-.72a.473.473 0 0 0-.254-.646l-.462-.191a.538.538 0 0 0-.674.26c-.069.13-.142.257-.22.38a.538.538 0 0 0 .11.715l.396.305Z"
        clipRule="evenodd"
      />
    </svg>
  ),
};
