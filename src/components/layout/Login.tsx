// components/Login.tsx
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/validationSchemas";
import { z } from "zod";
import Link from "next/link";
import Button from "../ui/Button";

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <div className="container container--xs">
      <h2 className="mb-8 text-3xl font-bold text-center text-neutral-900 sm:text-4xl lg:text-5xl">
        Login <span className="text-primary-500">Your Account</span>
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
        <Button variant="primary" className="w-full p-2">
          Login
        </Button>
      </form>
      <div className="mt-4 text-center">
        <Link href="/forgot-password" className="text-primary-500 hover:underline">
          Forgot Password?
        </Link>
      </div>
      <div className="mt-4 text-center">
        <span className="text-neutral-600">Don&apos;t have an account? </span>
        <Link href="/register" className="text-primary-500 hover:underline">
          Register
        </Link>
      </div>
    </div>
  );
}