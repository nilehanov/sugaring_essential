import type { Service } from "../data/content";

type Props = {
  service: Service;
};

export function ServiceCard({ service }: Props) {
  return (
    <article className="card">
      <div className="meta">
        <span>{service.duration}</span>
        <span className="price">from ${service.priceFrom}</span>
      </div>
      <h3>{service.name}</h3>
      <p className="muted">{service.description}</p>
      <p className="pill" style={{ marginTop: 10, width: "fit-content" }}>
        <strong>Focus</strong> <span>{service.focus}</span>
      </p>
    </article>
  );
}



