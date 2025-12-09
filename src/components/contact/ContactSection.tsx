"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Loader2, Send } from "lucide-react";

// Configuration
const SERVICE_ID = "service_23ck9bg";
const TEMPLATE_ID = "template_vuhd7dg";
const PUBLIC_KEY = "Q-tEt5cZ-JrI5zr22";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      toast.success("Message sent successfully!");
      reset();
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      // Show useful error if possible
      const errorMessage = error?.text || "Failed to send message. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-navy/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Let's <span className="text-electric-blue">Connect</span></h2>
          <p className="text-slate-muted max-w-xl mx-auto">
            Have a project in mind or just want to chat about AI and backend tech? Drop me a message!
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-card-bg border border-black/5 dark:border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                <input 
                  {...register("name")}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-gray-100 focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/50 transition-all placeholder:text-slate-400"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                <input 
                  {...register("email")}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-gray-100 focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/50 transition-all placeholder:text-slate-400"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
              <textarea 
                {...register("message")}
                rows={5}
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-3 text-slate-900 dark:text-gray-100 focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/50 transition-all placeholder:text-slate-400 resize-none"
                placeholder="Tell me about your project..."
              />
              {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-electric-blue text-navy font-bold py-4 rounded-lg hover:bg-electric-blue/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? <Loader2 className="animate-spin w-5 h-5" /> : <Send className="w-5 h-5" />}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
