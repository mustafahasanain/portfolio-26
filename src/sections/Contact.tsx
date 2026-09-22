"use client";

import { useRef, useState, type ChangeEvent, type SubmitEvent } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";
import { useI18n } from "@/i18n/context";

type ToastStatus = "success" | "error";

type Toast = {
  status: ToastStatus;
  message: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const { dictionary } = useI18n();
  const copy = dictionary.contact;
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);
  const [emailError, setEmailError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const showToast = (status: ToastStatus) => {
    setToast({ status, message: copy[status] });
    setTimeout(() => setToast(null), 5000);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "email" && emailError) {
      setEmailError(EMAIL_REGEX.test(value) ? "" : emailError);
    }
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!EMAIL_REGEX.test(form.email)) {
      setEmailError(copy.invalidEmail);
      return;
    }
    setEmailError("");

    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
      showToast("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      showToast("error");
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={copy.title}
          sub={copy.sub}
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">{copy.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={copy.namePlaceholder}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">{copy.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={copy.emailPlaceholder}
                    aria-invalid={!!emailError}
                    required
                  />
                  {emailError && (
                    <p className="text-red-400 text-sm mt-2">{emailError}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message">{copy.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={copy.messagePlaceholder}
                    rows={5}
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? copy.sending : copy.send}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#00A19B] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>

      {toast && (
        <div
          role="status"
          className={`fixed bottom-6 right-6 z-[200] flex items-center gap-3 rounded-md border px-5 py-4 shadow-lg max-w-sm ${
            toast.status === "success"
              ? "bg-black-100 border-green-500/50"
              : "bg-black-100 border-red-500/50"
          }`}
        >
          <span
            className={`size-2.5 rounded-full flex-none ${
              toast.status === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          />
          <p className="text-white-50 text-sm">{toast.message}</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
