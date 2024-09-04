import clsx from "clsx";

export default function Button({ children, textOnly, className, ...props }) {
  const cls = clsx(
    { ["text-button"]: textOnly, ["button"]: !textOnly },
    className
  );

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
