export default function WhaleMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 28C8 20 16 14 28 14C34 14 40 16 44 20C48 12 58 8 70 8C88 8 104 18 112 28C104 32 90 36 74 36C62 36 52 34 44 30C38 34 30 36 22 36C14 36 8 33 8 28Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M112 28L120 24V32L112 28Z"
        fill="currentColor"
      />
      <circle cx="96" cy="24" r="2" fill="#0a1628" />
      <path
        d="M18 32C14 36 10 40 6 44"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
