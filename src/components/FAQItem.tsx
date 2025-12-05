import type { FAQ } from "../data/content";

type Props = {
  item: FAQ;
};

export function FAQItem({ item }: Props) {
  return (
    <div className="faq-item">
      <h4>{item.question}</h4>
      <p className="muted" style={{ margin: 0 }}>
        {item.answer}
      </p>
    </div>
  );
}

