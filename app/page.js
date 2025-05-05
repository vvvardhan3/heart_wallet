"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FEATURES, STEPS } from "@/lib/landing";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col pt-16">
      <section className="mt-20 pb-12 space-y-10  px-5">
        <div className="container mx-auto text-center px-4 md:px-6 space-y-6">
          {/* Badge */}
          <Badge variant={"outline"} className="bg-blue-100/50 text-blue-400">
            Split Expenses. Simplify life
          </Badge>
        </div>
        {/* Heading */}
        <h1 className="gradient-title text-center max-w-5xl mx-auto text-4xl md:text-7xl">
          The smartest way to split expenses with{" "}
          <TypeAnimation
            sequence={[
              "friends",
              1500,
              "family",
              1500,
              "colleagues",
              1500,
              "Roomates",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        {/* Paragraph */}
        <p className="text-center text-gray-500 text-sm md:text-md max-w-2xl mx-auto">
          Heart & Wallet is a free app that helps you split expenses with
          friends, family, and colleagues. Whether you&apos;re going on a trip,
          sharing a house, or just want to keep track of who owes what,
          we&apos;ve got you covered.
        </p>
        {/* Buttons & Links */}
        <div className="max-w-2xs mx-auto gap-4 flex flex-col md:flex-row">
          <Button className="bg-blue-500 hover:bg-blue-600">
            <Link href="/dashboard" className="flex items-center ">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button variant={"outline"}>
            <Link href="#how-it-works" className="flex items-center ">
              See How It Works
              {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
            </Link>
          </Button>
        </div>
        {/* Features Section */}
        <section id="features" className="bg-gray-50/50 rounded-lg p-6">
          <div className="container mx-auto text-center px-4 md:px-6 space-y-6">
            <Badge variant={"outline"} className={"bg-blue-100/50 text-blue-400"}>Features</Badge>
            <h2 className="gradient-title text-3xl md:text-5xl max-w-4xl mx-auto">
              Features that make splitting expenses easy
            </h2>
            <p className="text-center text-gray-500 text-sm md:text-x1/relaxed max-w-2xl mx-auto">
              Heart & Wallet is packed with features to make splitting expenses
              easy and fun. Here are some of the things you can do:
            </p>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map(({ title, Icon, bg, color, description }) => (
                <Card
                  key={title}
                  className="flex flex-col items-center space-y-4 p-6 text-center"
                >
                  <div className={`rounded-full p-3 ${bg}`}>
                    <Icon className={`h-6 w-6 ${color}`} />
                  </div>

                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-gray-500">{description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container mx-auto space-y-6 px-4 md:px-6 text-center">
            <Badge variant="outline" className="bg-blue-100/50 text-blue-400">
              How It Works
            </Badge>
            <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
              Splitting expenses has never been easier
            </h2>
            <p className="text-center text-gray-500 text-sm md:text-x1/relaxed max-w-2xl mx-auto">
              Follow these simple steps to start tracking and splitting expenses
              with friends.
            </p>

            <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
              {STEPS.map(({ label, title, description }) => (
                <div
                  key={label}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                    {label}
                  </div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-gray-500 text-center">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
