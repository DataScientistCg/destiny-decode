import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone,
  Instagram,
  Mail,
  MapPin,
  Sparkles,
  Star,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Calculator,
  Heart,
  Baby,
  Briefcase,
  Car,
  User,
  Users,
  Signature,
  Smartphone,
  CalendarHeart,
  QrCode,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import brandLogo from "@/assets/brand-logo.jpg.asset.json";
import profilePhoto from "@/assets/profile-photo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        property: "og:image",
        content: "https://storage.googleapis.com/gpt-engineer-file-uploads/1BPmJxZb0KhYEP4gB61dsLFEoH23/social-images/social-1784610956756-web_logo.webp",
      },
    ],
  }),
  component: Index,
});

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScExaZfsVw_M__q5f5_ppeFcPMfj518_LgOEPdoa3l5_1Uwew/viewform";
const INSTAGRAM_URL =
  "https://www.instagram.com/destiny_decod?igsh=MWdtdTNnaTA5amdvbw%3D%3D&utm_source=qr";
const PHONE = "7065-455-955";
const PHONE_TEL = "+917065455955";
const WHATSAPP = `https://wa.me/917065455955`;
const EMAIL = "infodestinydecode@gmail.com";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Calculators", href: "#calculators" },
  { label: "Services", href: "#services" },
  { label: "Payment", href: "#payment" },
  { label: "Contact", href: "#contact" },
];

const CALCULATORS = [
  { icon: Sparkles, name: "Life Path Number", desc: "Discover your life purpose and true potential" },
  { icon: Star, name: "Destiny Number", desc: "Your soul's blueprint from date of birth" },
  { icon: Heart, name: "Soul Urge Number", desc: "Uncover your deepest heart desires" },
  { icon: User, name: "Expression Number", desc: "How you express yourself to the world" },
  { icon: Calculator, name: "Lo Shu Grid", desc: "Analyze your strengths & weaknesses" },
  { icon: Signature, name: "Name Numerology", desc: "Find the perfect name for success" },
  { icon: Smartphone, name: "Mobile Number Analysis", desc: "Know how your number impacts your life" },
  { icon: Briefcase, name: "Business Name Analysis", desc: "Check luck & success of your business" },
];

const SERVICES = [
  { icon: Sparkles, name: "Personal Numerology Report with Remedies", price: "₹499", desc: "Full personalised numerology reading with tailored remedies for lasting change." },
  { icon: Signature, name: "Name Correction", price: "₹1499", desc: "Refine your name spelling to align with prosperity and success vibrations." },
  { icon: Briefcase, name: "Business Name Calculation & Suitability", price: "₹2100", desc: "Brand and business name analysis for growth, luck and long-term success." },
  { icon: Car, name: "Car Number Suggestion", price: "₹1100", desc: "Choose a vehicle number that supports safety, harmony and prosperity." },
  { icon: Baby, name: "Baby Name Suggestion", price: "₹2100", desc: "Auspicious baby names aligned with birth chart and destiny numbers." },
  { icon: CalendarHeart, name: "Baby Suitable DOB Suggestion", price: "₹2100", desc: "Ideal date of birth guidance for planned deliveries to align cosmic energy." },
  { icon: Heart, name: "Relationship Compatibility Report", price: "₹1100", desc: "Deep compatibility scoring and guidance for couples and partners." },
  { icon: Users, name: "Marriage Matching Compatibility Report", price: "₹2100", desc: "Numerology-based marriage matching to check life-long compatibility." },
  { icon: Smartphone, name: "Mobile Number Correction", price: "₹499", desc: "Align your mobile number's vibration with your destiny and goals." },
  { icon: Briefcase, name: "Career Suitability Guidance", price: "₹2100", desc: "Personalised career direction based on your core numerology numbers." },
];

const TESTIMONIALS = [
  { name: "Neha Sharma", city: "Delhi", quote: "Sudhanshu Ji's guidance has completely changed my life. The numerology report was 100% accurate and easy to understand." },
  { name: "Rahul Verma", city: "Mumbai", quote: "The name correction he suggested brought positive changes in my career and relationships. Highly recommended!" },
  { name: "Anjali Mehta", city: "Bangalore", quote: "Very detailed and accurate report. I got clarity about my purpose and future path. Thank you Destiny Decode!" },
];

const UPI_APPS = ["PhonePe", "Google Pay", "Paytm", "BHIM"];

function ApplyButton({ label = "Apply Now", className = "btn-gold", icon = true }: { label?: string; className?: string; icon?: boolean }) {
  return (
    <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {label}
      {icon && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/75 backdrop-blur-xl border-b border-[color:var(--gold)]/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3 group shrink-0">
          <div className="h-11 w-11 rounded-lg overflow-hidden shadow-gold border border-[color:var(--gold)]/40 bg-background">
            <img src={brandLogo.url} alt="Destiny Decode logo" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-lg font-bold text-gradient-gold tracking-wider">DESTINY</span>
            <span className="font-display text-lg font-bold text-gradient-gold tracking-wider -mt-1">DECODE</span>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground hover:text-[color:var(--gold)] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[color:var(--gold)] hover:after:w-full after:transition-all"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${PHONE_TEL}`} className="text-sm text-muted-foreground hover:text-[color:var(--gold)] transition-colors flex items-center gap-2">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <ApplyButton />
        </div>
        <button
          className="lg:hidden h-10 w-10 grid place-items-center rounded-full border border-[color:var(--gold)]/40 text-[color:var(--gold)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-[color:var(--gold)]/20 bg-background/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-[color:var(--gold)] py-2" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href={`tel:${PHONE_TEL}`} className="text-sm text-[color:var(--gold)] flex items-center gap-2 py-2">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
            <ApplyButton />
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-24 h-72 w-72 rounded-full bg-[color:var(--gold)]/10 blur-3xl float-slow" />
        <div className="absolute bottom-0 -right-24 h-96 w-96 rounded-full bg-[color:var(--gold-dark)]/15 blur-3xl float-slow" style={{ animationDelay: "2s" }} />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto mb-8 h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden border border-[color:var(--gold)]/50 shadow-gold-lg float-slow bg-background hover:scale-105 transition-transform">
          <img src={brandLogo.url} alt="Destiny Decode brand logo" className="h-full w-full object-cover" />
        </div>
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[color:var(--gold)] fade-up">
          <Sparkles className="h-3.5 w-3.5" /> Know Your Numbers. Know Yourself.
        </div>
        <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight fade-up" style={{ animationDelay: "0.1s" }}>
          Decode Your Destiny with the <br className="hidden sm:block" />
          <span className="shimmer-gold">Power of Numerology</span>
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground fade-up" style={{ animationDelay: "0.2s" }}>
          Uncover your true potential, overcome challenges and create a life of purpose, success &
          happiness with the ancient science of numbers.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4 fade-up" style={{ animationDelay: "0.3s" }}>
          <ApplyButton />
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
          <a href={`tel:${PHONE_TEL}`} className="text-sm text-muted-foreground hover:text-[color:var(--gold)] transition-colors flex items-center gap-2">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { icon: Users, k: "Trusted by 500+", v: "Happy Clients" },
            { icon: ShieldCheck, k: "100% Accurate", v: "Numerology Reports" },
            { icon: CheckCircle2, k: "Privacy", v: "Guaranteed" },
          ].map(({ icon: Icon, k, v }) => (
            <div key={k} className="glass glass-hover rounded-2xl p-5 flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-gradient-gold grid place-items-center shadow-gold shrink-0">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="text-left min-w-0">
                <div className="font-display text-base font-semibold text-gradient-gold">{k}</div>
                <div className="text-xs text-muted-foreground">{v}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, highlight }: { eyebrow: string; title: string; highlight?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14">
      <div className="inline-block text-xs uppercase tracking-[0.25em] text-[color:var(--gold)] mb-3">{eyebrow}</div>
      <h2 className="font-display text-3xl sm:text-5xl font-bold">
        {title} {highlight && <span className="text-gradient-gold">{highlight}</span>}
      </h2>
      <div className="mt-5 mx-auto gold-divider w-24" />
    </div>
  );
}

function Calculators() {
  return (
    <section id="calculators" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Powerful Numerology Tools" title="Explore Our" highlight="Calculators" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CALCULATORS.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="glass glass-hover rounded-2xl p-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center shadow-gold mb-4">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1.5">{name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl glass overflow-hidden relative shadow-gold-lg">
            <img
              src={profilePhoto.url}
              alt="Sudhanshuu Bharti — Numerology Consultant"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-center">
              <div className="font-display text-2xl font-bold text-gradient-gold">Sudhanshuu Bharti</div>
              <div className="text-sm text-muted-foreground mt-1">Numerology Consultant</div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 shadow-gold hidden sm:block">
            <div className="text-xs text-muted-foreground uppercase tracking-widest">Experience</div>
            <div className="font-display text-2xl font-bold text-gradient-gold">5+ Years</div>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)] mb-3">About Sudhanshuu Bharti</div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight">
            Guiding Lives with the <span className="text-gradient-gold">Ancient Science of Numbers</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Sudhanshuu Bharti is a passionate Numerology Consultant, researcher and Professor with a
            deep commitment to helping people unlock their true potential through the wisdom of
            numbers. He blends Chaldean Numerology, Lo Shu Grid analysis, name correction and
            destiny alignment with a practical, research-oriented approach.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
            {["Personalized Guidance", "Accurate Predictions", "Practical Remedies", "Confidential & Trusted"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-foreground/90">
                <CheckCircle2 className="h-4 w-4 text-[color:var(--gold)]" /> {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              ["500+", "Happy Clients"],
              ["5+", "Years Experience"],
              ["1000+", "Reports"],
              ["98%", "Satisfaction"],
            ].map(([k, v]) => (
              <div key={v} className="glass rounded-xl p-4 text-center">
                <div className="font-display text-2xl font-bold text-gradient-gold">{k}</div>
                <div className="text-xs text-muted-foreground mt-1">{v}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <ApplyButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Premium Offerings" title="Our" highlight="Services" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, name, price, desc }) => (
            <div key={name} className="glass glass-hover rounded-2xl p-6 flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center shadow-gold shrink-0">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Price</div>
                  <div className="font-display text-2xl font-bold text-gradient-gold leading-none">{price}</div>
                </div>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
              <div className="mt-5">
                <ApplyButton className="btn-gold w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Payment() {
  return (
    <section id="payment" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="UPI Payments" title="Secure" highlight="Payment" />
        <div className="glass rounded-3xl p-6 sm:p-10 shadow-gold-lg">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-gold blur-2xl opacity-30 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-[color:var(--gold)]/40 bg-black">
                <img
                  src="/qr.jpg"
                  alt="Scan to pay via UPI — Sudhanshu Bharti"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[color:var(--gold)] mb-3">
                <QrCode className="h-4 w-4" /> Scan & Pay
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                Scan the QR code using any <span className="text-gradient-gold">UPI App</span>
              </h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                Instant, secure payment to <strong className="text-foreground">Sudhanshu Bharti</strong>.
                After paying, tap the button below to fill your details so we can start your reading.
              </p>
              <div className="mt-6">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">UPI Accepted</div>
                <div className="flex flex-wrap gap-2">
                  {UPI_APPS.map((a) => (
                    <span key={a} className="px-3 py-1.5 rounded-full glass text-xs text-foreground/90 border border-[color:var(--gold)]/30">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <ApplyButton label="Fill Details Form" />
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
                  <MessageCircle className="h-4 w-4" /> Share Payment Proof
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Clients Love Us" title="What Our" highlight="Clients Say" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="glass glass-hover rounded-2xl p-6">
              <div className="flex gap-0.5 text-[color:var(--gold)] mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-gold grid place-items-center font-display font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Ready to Begin?" title="Get Your" highlight="Personal Consultation" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: MapPin, label: "Office", value: "NEW DELHI" },
            { icon: Phone, label: "Phone", value: PHONE, href: `tel:${PHONE_TEL}` },
            { icon: Instagram, label: "Instagram", value: "@destiny_decod", href: INSTAGRAM_URL, external: true },
          ].map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href ?? "#"}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="glass glass-hover rounded-2xl p-6 block"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center shadow-gold mb-4">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
              <div className="font-display text-lg font-semibold text-foreground mt-1 break-words">{value}</div>
            </a>
          ))}
        </div>
        <div className="mt-10 glass rounded-3xl p-8 sm:p-10 text-center shadow-gold">
          <h3 className="font-display text-2xl sm:text-3xl font-bold">
            Take the first step towards a <span className="text-gradient-gold">brighter tomorrow</span>
          </h3>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Talk to Sudhanshuu Bharti directly on WhatsApp or apply now to receive personalised
            numerology guidance.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <ApplyButton />
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t border-[color:var(--gold)]/15 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-lg overflow-hidden shadow-gold border border-[color:var(--gold)]/40 bg-background">
                <img src={brandLogo.url} alt="Destiny Decode logo" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-gradient-gold tracking-wider">DESTINY DECODE</div>
                <div className="text-xs text-muted-foreground">Decode Your Destiny with Numerology</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Empowering lives through the divine science of Numerology. Guidance rooted in
              tradition, delivered with modern precision.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-10 w-10 grid place-items-center rounded-full border border-[color:var(--gold)]/40 text-[color:var(--gold)] hover:bg-[color:var(--gold)]/10 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-10 w-10 grid place-items-center rounded-full border border-[color:var(--gold)]/40 text-[color:var(--gold)] hover:bg-[color:var(--gold)]/10 transition-colors">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href={`tel:${PHONE_TEL}`} aria-label="Call" className="h-10 w-10 grid place-items-center rounded-full border border-[color:var(--gold)]/40 text-[color:var(--gold)] hover:bg-[color:var(--gold)]/10 transition-colors">
                <Phone className="h-4 w-4" />
              </a>
              <a href={`mailto:${EMAIL}`} aria-label="Email" className="h-10 w-10 grid place-items-center rounded-full border border-[color:var(--gold)]/40 text-[color:var(--gold)] hover:bg-[color:var(--gold)]/10 transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <div className="font-display text-sm font-semibold text-gradient-gold uppercase tracking-widest mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-muted-foreground hover:text-[color:var(--gold)] transition-colors flex items-center gap-1 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-display text-sm font-semibold text-gradient-gold uppercase tracking-widest mb-4">Contact</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" /> NEW DELHI</li>
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" /> <a href={`tel:${PHONE_TEL}`} className="hover:text-[color:var(--gold)] transition-colors">{PHONE}</a></li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" /> <a href={`mailto:${EMAIL}`} className="hover:text-[color:var(--gold)] transition-colors break-all">{EMAIL}</a></li>
              <li className="flex items-start gap-2"><Instagram className="h-4 w-4 text-[color:var(--gold)] mt-0.5 shrink-0" /> <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--gold)] transition-colors">@destiny_decod</a></li>
            </ul>
          </div>
        </div>
        <div className="gold-divider mt-12 mb-6" />
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Destiny Decode. All Rights Reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[color:var(--gold)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[color:var(--gold)] transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-[color:var(--gold)] transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-40 flex flex-col gap-3">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="h-13 w-13 sm:h-14 sm:w-14 grid place-items-center rounded-full bg-gradient-gold shadow-gold-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6 text-primary-foreground" />
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="Call"
        className="h-13 w-13 sm:h-14 sm:w-14 grid place-items-center rounded-full glass border border-[color:var(--gold)]/50 text-[color:var(--gold)] hover:scale-110 transition-transform"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Calculators />
        <About />
        <Services />
        <Payment />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
