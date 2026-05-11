const COLOR_SWATCHES = [
  { label: "Gold",        hex: "#C9A96E", bg: "bg-gold",             text: "text-brown" },
  { label: "Gold Light",  hex: "#D9BE90", bg: "bg-gold-light",       text: "text-brown" },
  { label: "Gold Dark",   hex: "#B08A4A", bg: "bg-gold-dark",        text: "text-cream" },
  { label: "Cream",       hex: "#FAF6EF", bg: "bg-cream",            text: "text-brown", border: true },
  { label: "Cream Dark",  hex: "#F2EAD8", bg: "bg-cream-dark",       text: "text-brown", border: true },
  { label: "Brown",       hex: "#2C1810", bg: "bg-brown",            text: "text-cream" },
  { label: "Brown Light", hex: "#4A2C1E", bg: "bg-brown-light",      text: "text-cream" },
  { label: "Brown Dark",  hex: "#1A0E08", bg: "bg-brown-dark",       text: "text-cream" },
  { label: "Burgundy",    hex: "#6B2737", bg: "bg-burgundy",         text: "text-cream" },
  { label: "Burgungy Light", hex: "#8A3347", bg: "bg-burgundy-light", text: "text-cream" },
  { label: "Burgundy Dark",  hex: "#4E1B27", bg: "bg-burgundy-dark",  text: "text-cream" },
  { label: "Soft White",  hex: "#FDFAF5", bg: "bg-soft-white",       text: "text-brown", border: true },
];

const SEMANTIC_SWATCHES = [
  { label: "background",  bg: "bg-background",  text: "text-foreground", border: true },
  { label: "foreground",  bg: "bg-foreground",  text: "text-background" },
  { label: "primary",     bg: "bg-primary",     text: "text-primary-foreground" },
  { label: "secondary",   bg: "bg-secondary",   text: "text-secondary-foreground" },
  { label: "muted",       bg: "bg-muted",       text: "text-muted-foreground", border: true },
  { label: "accent",      bg: "bg-accent",      text: "text-accent-foreground" },
  { label: "card",        bg: "bg-card",        text: "text-card-foreground", border: true },
  { label: "border",      bg: "bg-border",      text: "text-foreground", border: true },
];

const SPACING_SCALE = [
  { token: "--space-1",  label: "space-1",  px: "4px",   rem: "0.25rem" },
  { token: "--space-2",  label: "space-2",  px: "8px",   rem: "0.5rem" },
  { token: "--space-3",  label: "space-3",  px: "12px",  rem: "0.75rem" },
  { token: "--space-4",  label: "space-4",  px: "16px",  rem: "1rem" },
  { token: "--space-6",  label: "space-6",  px: "24px",  rem: "1.5rem" },
  { token: "--space-8",  label: "space-8",  px: "32px",  rem: "2rem" },
  { token: "--space-12", label: "space-12", px: "48px",  rem: "3rem" },
  { token: "--space-16", label: "space-16", px: "64px",  rem: "4rem" },
  { token: "--space-20", label: "space-20", px: "80px",  rem: "5rem" },
  { token: "--space-32", label: "space-32", px: "128px", rem: "8rem" },
];

const SHADOWS = [
  { name: "shadow-sm",   cls: "shadow-sm",   label: "sm — subtle lift" },
  { name: "shadow-md",   cls: "shadow-md",   label: "md — card elevation" },
  { name: "shadow-lg",   cls: "shadow-lg",   label: "lg — modal / overlay" },
  { name: "shadow-xl",   cls: "shadow-xl",   label: "xl — floating panel" },
  { name: "shadow-gold", cls: "shadow-gold", label: "gold — CTA glow" },
];

const RADIUS_VARIANTS = [
  { name: "rounded-sm",   cls: "rounded-sm",   label: "sm (4px)" },
  { name: "rounded-md",   cls: "rounded-md",   label: "md (6px)" },
  { name: "rounded-lg",   cls: "rounded-lg",   label: "lg / default (8px)" },
  { name: "rounded-xl",   cls: "rounded-xl",   label: "xl (12px)" },
  { name: "rounded-full", cls: "rounded-full", label: "full (pill)" },
];

const TRANSITIONS = [
  { token: "--transition-fast", value: "150ms", use: "Micro-interactions, hover states" },
  { token: "--transition-base", value: "250ms", use: "Button presses, toggle reveals" },
  { token: "--transition-slow", value: "400ms", use: "Page-level transitions, drawers" },
  { token: "--ease-brand",      value: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", use: "Brand easing — slightly decelerated" },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <div className="mb-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-border" />
        <h2 className="font-display text-heading-md text-foreground">{title}</h2>
        <div className="h-px flex-1 bg-border" />
      </div>
      {children}
    </section>
  );
}

export default function BrandPreview() {
  return (
    <main className="min-h-screen bg-background px-6 py-16 font-body">
      <header className="mb-16 text-center">
        <p className="font-display text-eyebrow uppercase text-primary mb-3">
          Design System
        </p>
        <h1 className="font-display text-display-md text-foreground">
          Abbey Brand Preview
        </h1>
        <p className="mt-3 text-body-lg text-muted-foreground">
          Gastronomia &amp; Eventos · São José dos Pinhais
        </p>
      </header>

      {/* ── Colors ──────────────────────────────────────────────── */}
      <Section title="Brand Palette">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {COLOR_SWATCHES.map((s) => (
            <div key={s.label} className="overflow-hidden rounded-lg shadow-sm">
              <div
                className={`${s.bg} ${s.border ? "border border-border" : ""} flex h-16 items-end p-2`}
              >
                <span className={`${s.text} text-caption font-medium`}>{s.hex}</span>
              </div>
              <div className="bg-card px-2 py-1.5">
                <p className="text-caption text-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Semantic Tokens">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {SEMANTIC_SWATCHES.map((s) => (
            <div key={s.label} className="overflow-hidden rounded-lg shadow-sm">
              <div
                className={`${s.bg} ${s.border ? "border border-border" : ""} flex h-16 items-end p-2`}
              >
                <span className={`${s.text} text-caption font-medium`}>{s.label}</span>
              </div>
              <div className="bg-card border border-border px-2 py-1.5">
                <p className="text-caption text-foreground font-mono">--{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Typography ──────────────────────────────────────────── */}
      <Section title="Typography Specimen">
        <div className="space-y-8 rounded-xl border border-border bg-card p-8 shadow-md">
          <div>
            <p className="text-caption text-muted-foreground mb-1 font-mono">
              display-xl · Playfair Display · 4.5rem
            </p>
            <p className="font-display text-display-xl text-foreground leading-none">
              Bem-vindo à Abbey
            </p>
          </div>
          <div>
            <p className="text-caption text-muted-foreground mb-1 font-mono">
              display-md · Playfair Display · 3rem
            </p>
            <p className="font-display text-display-md text-foreground">
              Gastronomia de experiência
            </p>
          </div>
          <div>
            <p className="text-caption text-muted-foreground mb-1 font-mono">
              heading-lg · Playfair Display · 1.875rem
            </p>
            <h3 className="font-display text-heading-lg text-foreground">
              Almoço Executivo
            </h3>
          </div>
          <div>
            <p className="text-caption text-muted-foreground mb-1 font-mono">
              heading-md · Playfair Display · 1.5rem
            </p>
            <h4 className="font-display text-heading-md text-foreground">
              Espaço para Eventos
            </h4>
          </div>
          <div>
            <p className="text-caption text-muted-foreground mb-1 font-mono">
              body-lg · Inter · 1.125rem
            </p>
            <p className="font-body text-body-lg text-foreground">
              Uma experiência gastronômica única em São José dos Pinhais, em uma casa histórica
              convertida em restaurante e espaço de eventos.
            </p>
          </div>
          <div>
            <p className="text-caption text-muted-foreground mb-1 font-mono">
              body-base · Inter · 1rem
            </p>
            <p className="font-body text-body-base text-foreground">
              Nosso almoço executivo oferece pratos refinados com ingredientes selecionados,
              em um ambiente acolhedor e personalizado para cada ocasião.
            </p>
          </div>
          <div>
            <p className="text-caption text-muted-foreground mb-1 font-mono">
              caption · Inter · 0.75rem
            </p>
            <p className="font-body text-caption text-muted-foreground">
              Segunda a sexta · 11h30 às 14h30 · Reservas pelo WhatsApp
            </p>
          </div>
          <div>
            <p className="text-caption text-muted-foreground mb-1 font-mono">
              eyebrow · Inter · 0.875rem · tracking-brand
            </p>
            <p className="font-body text-eyebrow uppercase text-primary">
              Gastronomia &amp; Eventos
            </p>
          </div>
          <div>
            <p className="text-caption text-muted-foreground mb-1 font-mono">
              Italic display · Playfair Display Italic
            </p>
            <p className="font-display text-display-sm italic text-primary">
              &ldquo;Uma experiência que você não esquece.&rdquo;
            </p>
          </div>
        </div>
      </Section>

      {/* ── Spacing ─────────────────────────────────────────────── */}
      <Section title="Spacing Scale (4px base)">
        <div className="space-y-3 rounded-xl border border-border bg-card p-6 shadow-sm">
          {SPACING_SCALE.map((s) => (
            <div key={s.token} className="flex items-center gap-4">
              <span className="w-20 shrink-0 font-mono text-caption text-muted-foreground">
                {s.px}
              </span>
              <div
                className="h-5 rounded-sm bg-primary/60"
                style={{ width: s.px }}
              />
              <span className="font-mono text-caption text-foreground">{s.rem}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Shadows ─────────────────────────────────────────────── */}
      <Section title="Shadow Scale">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {SHADOWS.map((s) => (
            <div
              key={s.name}
              className={`${s.cls} rounded-lg bg-card border border-border p-6 text-center`}
            >
              <p className="font-mono text-body-sm text-foreground font-semibold">{s.name}</p>
              <p className="mt-1 text-caption text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Border Radius ───────────────────────────────────────── */}
      <Section title="Border Radius">
        <div className="flex flex-wrap items-end gap-6">
          {RADIUS_VARIANTS.map((r) => (
            <div key={r.name} className="text-center">
              <div
                className={`${r.cls} h-16 w-16 border-2 border-primary bg-primary/10`}
              />
              <p className="mt-2 font-mono text-caption text-foreground">{r.name}</p>
              <p className="text-caption text-muted-foreground">{r.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Transitions ─────────────────────────────────────────── */}
      <Section title="Transition Tokens">
        <div className="overflow-hidden rounded-xl border border-border shadow-sm">
          <table className="w-full text-body-sm">
            <thead className="bg-muted text-left">
              <tr>
                <th className="px-4 py-3 font-medium text-foreground">Token</th>
                <th className="px-4 py-3 font-medium text-foreground">Value</th>
                <th className="px-4 py-3 font-medium text-foreground">Use case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {TRANSITIONS.map((t) => (
                <tr key={t.token}>
                  <td className="px-4 py-3 font-mono text-caption text-primary">{t.token}</td>
                  <td className="px-4 py-3 font-mono text-caption text-foreground">{t.value}</td>
                  <td className="px-4 py-3 text-caption text-muted-foreground">{t.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── Buttons ─────────────────────────────────────────────── */}
      <Section title="Interactive Elements">
        <div className="flex flex-wrap items-center gap-4">
          <button className="rounded-lg bg-primary px-6 py-3 font-body text-body-sm font-semibold text-primary-foreground shadow-gold transition-all duration-base ease-brand hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]">
            Reservar Almoço
          </button>
          <button className="rounded-lg bg-secondary px-6 py-3 font-body text-body-sm font-semibold text-secondary-foreground shadow-md transition-all duration-base ease-brand hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]">
            Solicitar Orçamento
          </button>
          <button className="rounded-lg border border-primary bg-transparent px-6 py-3 font-body text-body-sm font-semibold text-primary transition-all duration-base ease-brand hover:bg-primary/10 active:scale-[0.98]">
            Saiba Mais
          </button>
          <button className="rounded-lg bg-muted px-6 py-3 font-body text-body-sm font-medium text-muted-foreground cursor-not-allowed" disabled>
            Indisponível
          </button>
        </div>
      </Section>

      <footer className="mt-8 border-t border-border pt-8 text-center">
        <p className="font-body text-caption text-muted-foreground">
          Abbey Brand System · Prompt 2 complete · All tokens rendered
        </p>
      </footer>
    </main>
  );
}
