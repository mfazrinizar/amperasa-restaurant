// components/Register.tsx
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/validationSchemas";
import { z } from "zod";
import Link from "next/link";
import Button from "../ui/Button";
import { registerUser } from "@/lib/network/authQueries";
import { useRouter } from "next/navigation";
import useToastSuccessOrFailed from "@/hooks/useToastSuccessOrFailed";

type RegisterFormData = z.infer<typeof registerSchema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccessful, setIsSuccessful] = useState<boolean | null>(null);
  const router = useRouter();

  const resetSuccessState = () => {
    setIsSuccessful(null);
  };

  useToastSuccessOrFailed(isSuccessful, isSuccessful ? "Registration successful. Please check your email to verify and login your account." : "Registration failed. Please try again.", resetSuccessState);

  const onSubmit = async (data: RegisterFormData) => {
    setLoading(true);
    setError(null);

    const user = {
      name: data.name,
      email: data.email,
      phone: data.phone,
    };

    const success = await registerUser(user, data.email, data.password);

    setLoading(false);
    setIsSuccessful(success);

    if (success) {
      router.push("/login");
    } else {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container container--xs">
      <h2 className="mb-8 text-3xl font-bold text-center text-neutral-900 sm:text-4xl lg:text-5xl">
        Register <span className="text-primary-500">Your Account</span>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-neutral-600">Name</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="w-full p-2 border border-neutral-300 rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
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
        <div>
          <label htmlFor="password" className="block text-neutral-600">Password</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="w-full p-2 border border-neutral-300 rounded"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-neutral-600">Phone</label>
          <input
            type="text"
            id="phone"
            {...register("phone")}
            className="w-full p-2 border border-neutral-300 rounded"
          />
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <Button variant="primary" className="w-full p-2" isLoading={loading}>
          {loading ? "Registering..." : "Register"}
        </Button>
      </form>
      <div className="mt-4 text-center">
        <span className="text-neutral-600">Already have an account? </span>
        <Link href="/login" className="text-primary-500 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}