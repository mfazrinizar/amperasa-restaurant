// components/Register.tsx
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/validationSchemas";
import { z } from "zod";
import Link from "next/link";
import Button from "../ui/Button";

type RegisterFormData = z.infer<typeof registerSchema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  };

  return (
    <div className="container container--xs">
      <h2 className="mb-8 text-3xl font-bold text-center text-neutral-900 sm:text-4xl lg:text-5xl">
        Register
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
        <Button variant="primary" className="w-full p-2">
          Register
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