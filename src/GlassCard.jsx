import { forwardRef } from "react";
import styles from "./GlassCard.module.css";

/**
 * Cartão com efeito de vidro fosco.
 * Recebe children, className, as e as demais props do elemento escolhido.
 */
const GlassCard = forwardRef(function GlassCard(
  { as: Element = "div", className = "", children, ...props },
  ref
) {
  const classes = [styles.glassCard, className].filter(Boolean).join(" ");

  return (
    <Element ref={ref} className={classes} {...props}>
      {children}
    </Element>
  );
});

export default GlassCard;
