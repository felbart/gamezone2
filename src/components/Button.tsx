import { Link } from "react-router";

type ButtonProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export default function PrimaryButton({ to, children, className = "" }: ButtonProps) {
  return (
    <Link
      to={to}
      className={`inline-block px-6 py-3 bg-gradient-to-r from-sky-400 to-indigo-500 text-black font-semibold rounded hover:opacity-90 transition ${className}`}
    >
      {children}
    </Link>
  );
}
