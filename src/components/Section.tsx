import { ReactNode } from "react";

type Props = {
  id?: string;
  title: string;
  eyebrow?: string;
  description?: string;
  actionSlot?: ReactNode;
  children: ReactNode;
};

export function Section({ id, title, eyebrow, description, actionSlot, children }: Props) {
  return (
    <section id={id} className="section">
      <div className="section-header">
        <div>
          {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
          <h2 className="section-title">{title}</h2>
          {description ? <p className="muted">{description}</p> : null}
        </div>
        {actionSlot}
      </div>
      {children}
    </section>
  );
}


