"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, MapPin, Clock, Send, PhoneCall } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

const contactInfo = [
  { icon: Mail, label: "Email", value: "kongkon4545@gmail.com" },
  { icon: PhoneCall, label: "Phone Number", value: "+8801778934545" },
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
  { icon: Clock, label: "Response time", value: "Within 24 hours" },
];

const ContactUsSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const serviceID = "service_av6kbe7";
    const templateID = "template_oxbvadb";
    const publicKey = "8YOyIWFngfzKrYeE8";

    if (!serviceID || !templateID || !publicKey) {
      toast.error(
        "Contact form is not configured yet. Please try again later.",
      );
      return;
    }

    try {
      setIsSubmitting(true);
      await emailjs.send(serviceID, templateID, data, publicKey);
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="site-section relative w-full bg-white dark:bg-slate-950 px-6 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40
            bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:18px_18px]
            dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px]
            rounded-full blur-3xl
            bg-gradient-to-tr from-orange-500/10 to-violet-500/10
            dark:from-orange-500/15 dark:to-violet-500/15"
        />
        <motion.svg
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute left-[-40px] top-40 h-[90%] w-64 hidden lg:block"
          viewBox="0 0 100 1000"
          fill="none"
          stroke="#FF7639"
          strokeWidth="1.5"
        >
          <path d="M50 0 C 100 150 0 300 50 450 C 100 600 0 750 50 900 C 100 1050 0 1200 50 1350" />
        </motion.svg>
        <div
          className="absolute right-10 top-40 w-48 h-80 opacity-15 hidden lg:block"
          style={{
            backgroundImage:
              "radial-gradient(#8A63E5 1.5px, transparent 1.5px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="site-container container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-6 md:py-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-10">
          {/* LEFT: Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[40%] flex flex-col items-center lg:items-start"
          >
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-orange-600 dark:border-orange-800/40 dark:bg-orange-900/20 dark:text-orange-400">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Get In Touch
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-snug tracking-tight text-slate-900 dark:text-white">
              Let&apos;s Build{" "}
              <span className="text-orange-500">Something Great</span> Together
            </h2>

            <p className="mt-3 mb-5 max-w-[300px] text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Have a project in mind? I&apos;d love to hear about it. Fill out
              the form and I&apos;ll get back to you within 24 hours.
            </p>

            {/* Contact Info Cards */}
            <div className="w-full max-w-[360px] flex flex-col gap-3">
              {contactInfo?.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white/90 px-4 py-2 dark:border-slate-800 dark:bg-slate-900/80"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-orange-100 bg-orange-50 text-orange-500 dark:border-slate-700 dark:bg-slate-800 dark:text-orange-400">
                    <Icon size={15} />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      {value}
                    </p>
                  </div>
                </motion.div>
              ))}

              <div className="mt-1 inline-flex items-center gap-2 self-start rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-medium text-green-700 dark:border-green-900/40 dark:bg-green-900/20 dark:text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Available for new projects
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[56%]"
          >
            <div className="rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-100/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
              {/* Card Header */}
              <div className="border-b border-slate-100 px-6 py-5 dark:border-slate-800">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  Send a message
                </h3>
                <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">
                  All fields are required. I&apos;ll reply as soon as possible.
                </p>
              </div>

              {/* Form Body */}
              <div className="p-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="space-y-1.5">
                            <FormLabel className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                              Your name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                autoComplete="name"
                                {...field}
                                className="h-11 rounded-xl border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 placeholder:text-slate-300 transition-colors focus-visible:border-orange-400 focus-visible:bg-orange-50/40 focus-visible:ring-0 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-600 dark:focus-visible:border-orange-500 dark:focus-visible:bg-orange-950/20"
                              />
                            </FormControl>
                            <FormMessage className="text-xs text-red-500" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-1.5">
                            <FormLabel className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                              Email address
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="you@gmail.com"
                                autoComplete="email"
                                {...field}
                                className="h-11 rounded-xl border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 placeholder:text-slate-300 transition-colors focus-visible:border-orange-400 focus-visible:bg-orange-50/40 focus-visible:ring-0 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-600 dark:focus-visible:border-orange-500 dark:focus-visible:bg-orange-950/20"
                              />
                            </FormControl>
                            <FormMessage className="text-xs text-red-500" />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Phone */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                            Phone number
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+880 1XXX-XXXXXX"
                              autoComplete="tel"
                              {...field}
                              className="h-11 rounded-xl border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 placeholder:text-slate-300 transition-colors focus-visible:border-orange-400 focus-visible:bg-orange-50/40 focus-visible:ring-0 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-600 dark:focus-visible:border-orange-500 dark:focus-visible:bg-orange-950/20"
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500" />
                        </FormItem>
                      )}
                    />

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                            Your message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project, goals, and timeline..."
                              {...field}
                              className="min-h-[120px] resize-none rounded-xl border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 placeholder:text-slate-300 transition-colors focus-visible:border-orange-400 focus-visible:bg-orange-50/40 focus-visible:ring-0 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-600 dark:focus-visible:border-orange-500 dark:focus-visible:bg-orange-950/20"
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500" />
                        </FormItem>
                      )}
                    />

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-orange-500 text-sm font-semibold text-white shadow-md shadow-orange-100 transition-all duration-200 hover:bg-orange-400 hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 dark:shadow-orange-900/30"
                    >
                      <Send size={14} />
                      {isSubmitting ? "Sending..." : "Contact Me"}
                    </Button>

                    <p className="flex items-center justify-center gap-2 pt-1 text-center text-xs text-slate-400 dark:text-slate-500">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
                      Usually replies within 24 hours
                    </p>
                  </form>
                </Form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ToastContainer position="bottom-right" />
    </section>
  );
};

export default ContactUsSection;


