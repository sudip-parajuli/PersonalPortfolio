"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function sendEmail(prevState: any, formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const parsed = formSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors, message: "Invalid fields" };
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // TODO: Integrate Resend or EmailJS here
  // await resend.emails.send({ ... })

  console.log("Email sent:", parsed.data);

  return { success: true, message: "Message sent successfully!" };
}
