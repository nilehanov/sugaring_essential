import { FAQItem } from "./components/FAQItem";
import { Section } from "./components/Section";
import { ServiceCard } from "./components/ServiceCard";
import { TestimonialCard } from "./components/TestimonialCard";
import {
  aftercareTips,
  contact,
  faqs,
  heroHighlights,
  processSteps,
  services,
  testimonials,
  values
} from "./data/content";

const phoneLink = "tel:+14155550148";

export default function App() {
  return (
    <>
      <header>
        <nav className="nav">
          <div className="brand">
            <div className="brand-mark">SE</div>
            <div>
              Sugaring Essential
              <div style={{ color: "var(--muted)", fontSize: 13 }}>Skin-forward sugaring</div>
            </div>
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#faqs">FAQs</a>
            <a href="#contact">Contact</a>
            <a className="btn secondary" href={phoneLink}>
              Call studio
            </a>
            <a className="btn" href={contact.bookingLink} target="_blank" rel="noreferrer">
              Book now
            </a>
          </div>
        </nav>
      </header>

      <main className="page">
        <section className="hero">
          <div className="hero-card">
            <div className="eyebrow">Natural sugaring hair removal</div>
            <h1>Calm, smooth skin with the gentlest technique</h1>
            <p>
              Inspired by spa-first sugaring studios, we focus on skin health, precision
              technique, and ultra-hygienic care. Cool sugar paste, no resins, and guidance tailored
              to you.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a className="btn" href={contact.bookingLink} target="_blank" rel="noreferrer">
                Book an appointment
              </a>
              <a className="btn secondary" href="#services">
                View services
              </a>
            </div>
            <div className="hero-grid">
              {heroHighlights.map((item) => (
                <div key={item.title} className="pill">
                  {item.title} <span>{item.subtitle}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-card">
            <h3 style={{ marginTop: 0 }}>Studio snapshot</h3>
            <p className="muted" style={{ marginTop: 6 }}>
              What you can expect during every visit.
            </p>
            <ul className="list">
              <li>Guided consult and mapping for sensitivities</li>
              <li>Cool sugar application removed in growth direction</li>
              <li>Fresh gloves per area, no double dipping — ever</li>
              <li>Aftercare: botanicals, ingrown prevention, and SPF</li>
              <li>Take-home tips and rebook reminders at checkout</li>
            </ul>
            <div style={{ marginTop: 14, display: "grid", gap: 8 }}>
              <div className="pill">
                <strong>First timers</strong> <span>We guide you through every step</span>
              </div>
              <div className="pill">
                <strong>Men welcome</strong> <span>Chest, back, and full-body options</span>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="services"
          eyebrow="Menu"
          title="Signature sugaring services"
          description="Skin-first protocols for every body. Prices shown are starting rates and include prep + post care."
          actionSlot={
            <a className="btn" href={contact.bookingLink} target="_blank" rel="noreferrer">
              Reserve a spot
            </a>
          }
        >
          <div className="cards">
            {services.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </Section>

        <Section
          id="process"
          eyebrow="Why sugaring"
          title="Gentle, effective, and eco-conscious"
          description="Cool sugar paste, applied by hand and removed with the hair growth for less breakage, fewer ingrowns, and smoother skin."
        >
          <div className="cards">
            {values.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p className="muted" style={{ margin: 0 }}>
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="What happens in studio"
          title="Our three-part process"
          description="From arrival to finish, every step is designed to keep skin calm."
        >
          <div className="grid-2">
            {processSteps.map((step) => (
              <article key={step.title} className="card">
                <h3>{step.title}</h3>
                <p className="muted" style={{ margin: 0 }}>
                  {step.detail}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <div className="cta-block" id="booking">
          <div>
            <div className="eyebrow" style={{ background: "rgba(0,0,0,0.14)", color: "white" }}>
              Ready when you are
            </div>
            <h2 style={{ marginBottom: 6 }}>Book in under a minute</h2>
            <p>Choose your service, confirm your time, and arrive 5 minutes early to settle in.</p>
            <div className="chips" style={{ marginTop: 10 }}>
              <span className="chip">First-time consult included</span>
              <span className="chip">Hygienic, one-time use supplies</span>
              <span className="chip">Aftercare take-home tips</span>
            </div>
          </div>
          <div style={{ display: "grid", gap: 10 }}>
            <a className="btn" href={contact.bookingLink} target="_blank" rel="noreferrer">
              Book online
            </a>
            <a className="btn secondary" href={phoneLink}>
              Call the studio
            </a>
            <div style={{ color: "rgba(255,255,255,0.9)" }}>
              Need a custom visit? Email{" "}
              <a style={{ color: "white", textDecoration: "underline" }} href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </div>
          </div>
        </div>

        <Section eyebrow="Praise" title="Loved by our clients">
          <div className="cards">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </div>
        </Section>

        <Section eyebrow="Stay glowing" title="Aftercare essentials">
          <div className="cards">
            <article className="card">
              <h3 style={{ marginTop: 0 }}>Your 5-step checklist</h3>
              <ul className="list">
                {aftercareTips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </article>
            <article className="card">
              <h3 style={{ marginTop: 0 }}>Products we love</h3>
              <ul className="list">
                <li>Fragrance-free gel cleanser</li>
                <li>Water-based ingrown serum with BHA</li>
                <li>Silky mineral SPF for exposed areas</li>
              </ul>
              <p className="muted" style={{ marginTop: 10 }}>
                Ask us to build a custom routine for your skin and hair type.
              </p>
            </article>
          </div>
        </Section>

        <Section id="faqs" eyebrow="Questions" title="Sugaring FAQs">
          <div className="grid-2">
            {faqs.map((item) => (
              <FAQItem key={item.question} item={item} />
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Visit us"
          title="Contact & location"
          description="Reach out with questions or special requests. We’re here to help you feel confident in your skin."
        >
          <div className="contact-grid">
            <article className="card">
              <h3 style={{ marginTop: 0 }}>Studio details</h3>
              <p style={{ margin: "0 0 6px" }}>
                <strong>Phone:</strong> <a href={phoneLink}>{contact.phone}</a>
              </p>
              <p style={{ margin: "0 0 6px" }}>
                <strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
              <p style={{ margin: "0 0 6px" }}>
                <strong>Address:</strong> {contact.address}
              </p>
              <p style={{ margin: "0 0 12px" }}>
                <strong>Hours:</strong> {contact.hours}
              </p>
              <div className="chips">
                <span className="chip">Free parking nearby</span>
                <span className="chip">By appointment only</span>
                <span className="chip">Text-friendly</span>
              </div>
            </article>
            <article className="card">
              <h3 style={{ marginTop: 0 }}>Map</h3>
              <iframe
                title="Map to Sugaring Essential"
                className="map"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12604.41623106951!2d-122.2525676!3d37.4829366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa4ad8da5d3b9%3A0xe4bfe15c93dffa50!2sRedwood%20City%2C%20CA!5e0!3m2!1sen!2sus!4v1689999999999!5m2!1sen!2sus"
              />
              <p className="muted" style={{ marginTop: 8 }}>
                Click "View larger map" in the embed to open directions.
              </p>
            </article>
          </div>
        </Section>
      </main>

      <footer className="footer">
        Sugaring Essential · Crafted with a skin-first philosophy · Book online or call {contact.phone}
      </footer>
    </>
  );
}


