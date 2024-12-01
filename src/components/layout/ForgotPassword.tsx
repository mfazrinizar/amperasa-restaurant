// components/ForgotPassword.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "@/lib/validationSchemas";
import { z } from "zod";
import Link from "next/link";
import Button from "../ui/Button";
import { forgotPassword } from "@/lib/network/authQueries";
import useToastSuccessOrFailed from "@/hooks/useToastSuccessOrFailed";

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccessful, setIsSuccessful] = useState<boolean | null>(null);

  const resetSuccessState = () => {
    setIsSuccessful(null);
  };

  useToastSuccessOrFailed(isSuccessful, isSuccessful ? "Password reset email sent. Please check your email." : "Failed to send password reset email. Please try again.", resetSuccessState);

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setLoading(true);
    setError(null);

    const success = await forgotPassword(data.email);

    setLoading(false);
    setIsSuccessful(success);

    if (!success) {
      setError("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <div className="container container--xs">
      <h2 className="mb-8 text-3xl font-bold text-center text-neutral-900 sm:text-4xl lg:text-5xl">
        Forgot <span className="text-primary-500">Password?</span>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-neutral-600">Email</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full p-2 border border-neutral-300 rounded"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <Button variant="primary" className="w-full p-2" isLoading={loading}>
          {loading ? "Sending..." : "Reset Password"}
        </Button>
      </form>
      <div className="mt-4 text-center">
        <span className="text-neutral-600">Remember your password? </span>
        <Link href="/login" className="text-primary-500 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}