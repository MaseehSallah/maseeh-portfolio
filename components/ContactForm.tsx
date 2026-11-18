
"use client";

import { useState, type FormEvent } from "react";

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

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Spam protection */}
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
          className="mb-2 block text-xs font-semibold text-[#435A70]"
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
          className="w-full rounded-xl border border-[#D9E1E6] bg-white px-4 py-3 text-sm text-[#17283F] outline-none transition placeholder:text-[#9AA8B5] focus:border-[#48769A] focus:ring-2 focus:ring-[#48769A]/10"
        />
      </div>

      {/* EMAIL */}
      <div>
        <label
          htmlFor="contact-email"
          className="mb-2 block text-xs font-semibold text-[#435A70]"
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
          className="w-full rounded-xl border border-[#D9E1E6] bg-white px-4 py-3 text-sm text-[#17283F] outline-none transition placeholder:text-[#9AA8B5] focus:border-[#48769A] focus:ring-2 focus:ring-[#48769A]/10"
        />
      </div>

      {/* MESSAGE */}
      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-xs font-semibold text-[#435A70]"
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
          className="w-full resize-y rounded-xl border border-[#D9E1E6] bg-white px-4 py-3 text-sm text-[#17283F] outline-none transition placeholder:text-[#9AA8B5] focus:border-[#48769A] focus:ring-2 focus:ring-[#48769A]/10"
        />
      </div>

      {/* SEND BUTTON */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#17283F] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#345F85] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
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
          className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
        >
          ✓ Your message was submitted successfully.
          Thank you for reaching out!
        </div>
      )}

      {/* ERROR MESSAGE */}
      {status === "error" && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {errorMessage}
        </div>
      )}

      <p className="text-center text-xs leading-5 text-[#7B8B9A]">
        Your message will be delivered directly to my inbox.
      </p>
    </form>
  );
}
