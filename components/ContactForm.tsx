
"use client";

import { useState, type FormEvent } from "react";

// Keep your existing Web3Forms access key here.
const ACCESS_KEY = "99d46633-dad6-41cf-b90d-1755db80bb25";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    const payload = {
      access_key: ACCESS_KEY,
      subject: "New Message — Maseeh Sallah Portfolio",
      from_name: "Maseeh Sallah Portfolio",
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      botcheck: Boolean(formData.get("botcheck")),
    };

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your message."
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary outline-none transition-colors duration-200 placeholder:text-text-secondary/70 focus:border-accent focus:ring-2 focus:ring-accent/20";

  const labelClass =
    "mb-2 block text-xs font-semibold text-text-secondary";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* SPAM PROTECTION */}
      <div className="hidden" aria-hidden="true">
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* NAME */}
      <div>
        <label
          htmlFor="contact-name"
          className={labelClass}
        >
          Your Name
        </label>

        <input
          id="contact-name"
          type="text"
          name="name"
          required
          maxLength={100}
          autoComplete="name"
          placeholder="Enter your name"
          className={fieldClass}
        />
      </div>

      {/* EMAIL */}
      <div>
        <label
          htmlFor="contact-email"
          className={labelClass}
        >
          Email Address
        </label>

        <input
          id="contact-email"
          type="email"
          name="email"
          required
          maxLength={254}
          autoComplete="email"
          placeholder="you@example.com"
          className={fieldClass}
        />
      </div>

      {/* MESSAGE */}
      <div>
        <label
          htmlFor="contact-message"
          className={labelClass}
        >
          Your Message
        </label>

        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          placeholder="Tell me about your project or opportunity..."
          className={`${fieldClass} resize-y`}
        />
      </div>

      {/* SEND BUTTON */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#17283F] px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#345F85] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <span
              aria-hidden="true"
              className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
            />
            Sending Message...
          </>
        ) : (
          <>Send Message ↗</>
        )}
      </button>

      {/* SUCCESS MESSAGE */}
      {status === "success" && (
        <div
          role="status"
          className="rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
        >
          ✓ Your message was submitted successfully.
          Thank you for reaching out!
        </div>
      )}

      {/* ERROR MESSAGE */}
      {status === "error" && (
        <div
          role="alert"
          className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {errorMessage}
        </div>
      )}

      <p className="text-center text-xs leading-5 text-text-secondary">
        Your message will be delivered directly to my inbox.
      </p>

    </form>
  );
}
