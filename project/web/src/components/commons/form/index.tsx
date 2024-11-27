"use client";

import { ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, FieldValues, FormProvider, useForm } from "react-hook-form";

interface IForm<T> {
  children: React.ReactNode;
  schema: ZodSchema<T>;
  defaultValue?: DefaultValues<T>;
  onClickSubmit: (data: T) => void;
}

export default function Form<T extends FieldValues>({ children, schema, defaultValue, onClickSubmit }: IForm<T>) {
  const method = useForm<T>({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: defaultValue,
  });

  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onClickSubmit)}>{children}</form>
    </FormProvider>
  );
}
