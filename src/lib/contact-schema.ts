import { z } from "zod";

export const serviceOptions = [
  "Corporate secretarial & MCA compliance",
  "Board & governance",
  "Charges, allotments & capital raising",
  "Private & family-held companies",
  "Strike-off (STK-2)",
  "SEBI & listing compliance",
  "Insolvency & NCLT",
  "Mergers & restructuring",
  "Agreements & disputes",
  "Something else",
] as const;

/** Validates the form client-side before it is sent to Web3Forms. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "That name is too long."),
  email: z.email("Please enter a valid email address.").max(200),
  phone: z
    .string()
    .trim()
    .max(20, "That phone number is too long.")
    .regex(/^[0-9+\-()\s]*$/, "Use digits, spaces, +, - and () only.")
    .optional()
    .or(z.literal("")),
  company: z.string().trim().max(120, "That company name is too long.").optional().or(z.literal("")),
  service: z.enum(serviceOptions).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a little more — at least 20 characters.")
    .max(4000, "Please keep the message under 4000 characters."),
  /**
   * Honeypot: real people never see this field, so anything in it is a bot.
   * Deliberately permissive — the API route accepts the request and quietly
   * discards it, so a bot never learns which field gave it away.
   */
  website: z.string().max(200).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactFieldErrors = Partial<Record<keyof ContactInput, string>>;

export type ContactResponse = {
  ok: boolean;
  message: string;
  fieldErrors?: ContactFieldErrors;
};
