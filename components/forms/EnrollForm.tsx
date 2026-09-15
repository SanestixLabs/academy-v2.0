"use client";

import React, { useState } from "react";

export function EnrollForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };

    try {
      await fetch("https://n8n.sanestix.cloud/webhook/academy-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setIsSuccess(true);
    } catch (error) {
      alert("Something went wrong. Please try again or use the WhatsApp button below.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-xl bg-brand-50 p-6 text-center border border-brand-cyan/20 my-4">
        <h4 className="text-lg font-bold text-brand-deep mb-2">Application Received! 🎉</h4>
        <p className="text-sm text-ink-soft">
          We've sent your details to our team. You'll receive a WhatsApp message shortly with the next steps to finalize your enrollment.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <label htmlFor="name" className="block text-sm font-semibold text-ink">Full Name</label>
        <input type="text" id="name" name="name" required className="w-full rounded-lg border border-surface-border px-4 py-2.5 text-sm focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan" placeholder="John Doe" />
      </div>
      
      <div className="space-y-1.5">
        <label htmlFor="email" className="block text-sm font-semibold text-ink">Email Address</label>
        <input type="email" id="email" name="email" required className="w-full rounded-lg border border-surface-border px-4 py-2.5 text-sm focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan" placeholder="john@example.com" />
      </div>
      
      <div className="space-y-1.5">
        <label htmlFor="phone" className="block text-sm font-semibold text-ink">WhatsApp Number</label>
        <input type="tel" id="phone" name="phone" required className="w-full rounded-lg border border-surface-border px-4 py-2.5 text-sm focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan" placeholder="+92 300 1234567" />
      </div>

      <div className="pt-2">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full rounded-lg bg-brand-deep px-6 py-3.5 text-sm font-bold text-white shadow-button transition-transform hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {isSubmitting ? "Submitting..." : "Submit Application →"}
        </button>
      </div>
    </form>
  );
}
