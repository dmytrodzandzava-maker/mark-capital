"use client";

import { ArrowRight } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";

const REASONS = ["Investment", "Press & Media", "Careers", "General Enquiry"];

type FormState = {
  name: string;
  email: string;
  company: string;
  reason: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  reason: REASONS[0],
  message: "",
};

const fieldClasses =
  "w-full border-b border-hairline bg-transparent py-3 text-base text-ink placeholder:text-ink/35 focus:border-ink focus:outline-none transition-colors";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${form.reason} enquiry — ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}${form.company ? `\n${form.company}` : ""}`
    );
    window.location.href = `mailto:info@thisismark.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs uppercase tracking-wide text-ink/40">
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Jane Appleseed"
            className={`mt-2 ${fieldClasses}`}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs uppercase tracking-wide text-ink/40">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="jane@company.com"
            className={`mt-2 ${fieldClasses}`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="text-xs uppercase tracking-wide text-ink/40">
            Company <span className="normal-case text-ink/30">(optional)</span>
          </label>
          <input
            id="company"
            value={form.company}
            onChange={update("company")}
            placeholder="Company name"
            className={`mt-2 ${fieldClasses}`}
          />
        </div>
        <div>
          <label htmlFor="reason" className="text-xs uppercase tracking-wide text-ink/40">
            I&rsquo;m reaching out about
          </label>
          <select
            id="reason"
            value={form.reason}
            onChange={update("reason")}
            className={`mt-2 cursor-pointer ${fieldClasses}`}
          >
            {REASONS.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-wide text-ink/40">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us a bit about what you have in mind."
          className={`mt-2 resize-none ${fieldClasses}`}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center gap-2.5 rounded-xs border border-ink px-6 py-3.5 text-sm text-ink transition-colors duration-200 ease-out hover:bg-ink hover:text-white md:text-base"
      >
        {sent ? "Opening your email client…" : "Send Message"}
        <ArrowRight
          size={16}
          className="transition-transform duration-200 ease-out group-hover:translate-x-1"
        />
      </button>
    </form>
  );
}
