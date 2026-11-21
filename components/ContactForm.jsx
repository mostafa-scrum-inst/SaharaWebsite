"use client";

import { useState } from "react";
import { company, interests } from "../lib/content";
import { track } from "./Analytics";

// Static hosting has no server, so submissions go to a form service when
// NEXT_PUBLIC_FORM_ENDPOINT is set (e.g. Formspree, Basin, Getform; most offer
// auto-replies, spam filtering and CRM/inbox forwarding). Without it, the form
// opens the visitor's email app with the message pre-filled.
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

export default function ContactForm({ defaultInterest = "" }) {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const e = {};
    if (!data.name?.trim()) e.name = "Please enter your name.";
    if (!data.email?.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Please enter a valid email address.";
    if (!data.message?.trim()) e.message = "Please tell us what you need.";
    return e;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.website) return; // honeypot: bots fill hidden fields
    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length) {
      form.querySelector(`[name="${Object.keys(e)[0]}"]`)?.focus();
      return;
    }
    track("generate_lead", { interest: data.interest });

    if (!ENDPOINT) {
      const body = [
        `Name: ${data.name}`,
        `Company: ${data.company || "-"}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "-"}`,
        `Interest: ${data.interest || "-"}`,
        "",
        data.message,
      ].join("\n");
      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
        `Website enquiry: ${data.interest || "General"}`
      )}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="panel panel--accent" role="status">
        <h3>Thank you, we have your message.</h3>
        <p className="mb-0">An engineer from our team will reply within one working day.</p>
      </div>
    );
  }

  const field = (name, label, props = {}, full = false) => (
    <div className={`field${full ? " full" : ""}`}>
      <label htmlFor={`f-${name}`}>
        {label}
        {props.required ? " *" : ""}
      </label>
      <input
        id={`f-${name}`}
        name={name}
        aria-invalid={errors[name] ? true : undefined}
        aria-describedby={errors[name] ? `e-${name}` : undefined}
        {...props}
        required={undefined}
      />
      {errors[name] ? (
        <small id={`e-${name}`} style={{ color: "#b42318" }}>
          {errors[name]}
        </small>
      ) : null}
    </div>
  );

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {field("name", "Full name", { required: true, autoComplete: "name" })}
      {field("company", "Company", { autoComplete: "organization" })}
      {field("email", "Email", { type: "email", required: true, autoComplete: "email" })}
      {field("phone", "Phone", { type: "tel", autoComplete: "tel" })}
      <div className="field full">
        <label htmlFor="f-interest">I'm interested in</label>
        <select id="f-interest" name="interest" defaultValue={defaultInterest}>
          <option value="">Choose one</option>
          {interests.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>
      <div className="field full">
        <label htmlFor="f-message">Message *</label>
        <textarea
          id="f-message"
          name="message"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "e-message" : undefined}
          placeholder="Equipment, site, scope, dates..."
        />
        {errors.message ? (
          <small id="e-message" style={{ color: "#b42318" }}>
            {errors.message}
          </small>
        ) : null}
      </div>
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label>
          Website <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="full">
        <button className="btn btn--accent" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send enquiry"} <span className="arrow">→</span>
        </button>
        <p className="form-note mt-l" role="status">
          {status === "error"
            ? `Something went wrong. Please email ${company.email} directly.`
            : status === "mailto"
            ? "Your email app should open with the message ready to send."
            : "We reply within one working day. Your details are only used to answer your enquiry."}
        </p>
      </div>
    </form>
  );
}
