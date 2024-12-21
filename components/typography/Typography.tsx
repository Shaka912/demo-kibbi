import styles from "./Typography.module.css";
import { ReactNode } from "react";

interface TypograpyProps {
  children?: ReactNode;
  underline?: boolean;
  className?: string;
  fontWeight?: "regular" | "medium" | "light" | "semibold" | "bold";
  color?: "highRed" | "blue" | "green" | "neutral01" | "onHigh";

  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";

  dangerouslySetInnerHTML?: React.HTMLAttributes<HTMLElement>["dangerouslySetInnerHTML"];
  hoverStyles?: string;
  onClick?: () => void;
  variant:
    | "super-title"
    | "title"
    | "subtitle"
    | "cardTitle"
    | "cardSubtitle"
    | "normal"
    | "small";
  stroke?: boolean;
  hover?: "stroke";
}

const Text = ({
  tag: Tag,
  children,
  underline,
  color,
  fontWeight = "regular",
  variant,
  className,
  hover,
  hoverStyles,
  dangerouslySetInnerHTML,
  onClick,
  stroke,
}: TypograpyProps) => {
  return (
    <Tag
      onClick={onClick}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      className={[
        variant === "super-title" && styles.super_title,
        variant === "title" && styles.title,
        variant === "subtitle" && styles.subtitle,
        variant === "cardTitle" && styles.card_title,
        variant === "cardSubtitle" && styles.card_subtitle_title,
        variant === "normal" && styles.normal,
        variant === "small" && styles.small,
        color === "highRed" && styles.highRed,
        color === "blue" && styles.blue,
        color === "neutral01" && styles.neutral01,
        color === "green" && styles.on_high,
        underline && "underline",
        fontWeight === "regular" && "font-normal",
        fontWeight === "medium" && "font-medium",
        fontWeight === "light" && "font-light",
        fontWeight === "semibold" && "font-semibold",
        fontWeight === "bold" && "font-bold",
        className,
        hover == "stroke" &&
          "hover:webkit-text-stroke-1 hover:webkit-text-stroke-blue hover:text-transparent",

        hoverStyles,
        "font-acuminProWide ",
        stroke &&
          "webkit-text-stroke-1 webkit-text-stroke-blue text-transparent",
        ,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
};

export default Text;