'use client';
import React, { useState } from "react";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { Card } from "@heroui/card";
import { Icon } from "@iconify/react";

export default function RegisterPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters long, include a letter and a number"
      );
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Registration successful");
        router.push("/login");
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (error) {
      toast.error("An error occurred during registration");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <Toaster />
      <Card className="w-full max-w-md">
        <Form
          onSubmit={handleRegister}
          className="bg-white p-8 w-full max-w-md"
          validationBehavior="aria"
        >
          <h1 className="text-2xl mb-6 text-center">Register</h1>
          <Input
            isRequired
            label="Name"
            name="name"
            placeholder="Enter your name"
            labelPlacement="outside"
          />
          <Input
            isRequired
            label="Email"
            name="email"
            placeholder="Enter your email"
            type="email"
            labelPlacement="outside"
            errorMessage="Please enter a valid email"
          />
          <Input
            isRequired
            label="Password"
            name="password"
            placeholder="Enter your password"
            type={isVisible ? "text" : "password"}
            variant="bordered"
            labelPlacement="outside"
            errorMessage="Password must be at least 8 characters long, include a letter and a number"
            validate={(value) => {
              
              if (!value) return null;
              const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
              if (!regex.test(value)) {
                return "Password must be at least 8 characters long, include a letter and a number";
              }
              return null;
            }}
            endContent={
              <button
                aria-label="toggle password visibility"
                type="button"
                onClick={toggleVisibility}
                className="focus:outline-none"
              >
                {isVisible ? (
                  <Icon icon="formkit:eyeclosed" className="text-green-500" />
                ) : (
                  <Icon icon="mdi:eye" className="text-gray-500" />
                )}
              </button>
            }
          />
          <Button
            type="submit"
            variant="solid"
            color="success"
            className="mt-4 w-full text-white font-semibold"
            disabled={loading}
          >
            {loading ? (
              <>
                <Icon icon="mdi:loading" className="animate-spin mr-2" />
                Registering...
              </>
            ) : (
              "Register"
            )}
          </Button>
        </Form>
      </Card>
    </div>
  );
}
