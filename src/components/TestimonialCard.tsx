type Props = {
  name: string;
  quote: string;
  service: string;
};

export function TestimonialCard({ name, quote, service }: Props) {
  return (
    <article className="card">
      <p style={{ fontWeight: 600, margin: "0 0 8px" }}>{name}</p>
      <p style={{ margin: 0, fontSize: 15, color: "var(--muted)" }}>"{quote}"</p>
      <p className="pill" style={{ marginTop: 12, width: "fit-content" }}>
        Service: <span>{service}</span>
      </p>
    </article>
  );
}

