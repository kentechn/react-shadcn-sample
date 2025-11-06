import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const useExampleForm = () => {
  const formSchema = z.object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters.")
      .max(10, "Username must be at most 10 characters.")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores.",
      ),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
    mode: "onSubmit",
  });

  return { form, formSchema };
};
