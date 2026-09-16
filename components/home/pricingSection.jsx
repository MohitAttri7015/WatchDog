"use client";

import {
    Sparkles,
    Zap,
    Building2,
} from "lucide-react";

import PricingCard from "./pricingCard";

const pricingData = [
    {
        name: "Free Plan",
        monthlyPrice: "0",
        description:
            "For sellers just getting started with competitor tracking.",
        icon: Sparkles,
        buttonText: "Start for Free",
        variant: "default",
        features: [
            "1 competitor tracking",
            "Daily checks",
            "Email alerts",
        ],
    },

    {
        name: "Pro Plan",
        monthlyPrice: "80",
        description:
            "For active sellers who want to react the momentprices move.",
        icon: Zap,
        buttonText: "Start Pro",
        popular: true,
        variant: "pro",
        features: [
            "Up to 15 competitors",
            "Hourly checks",
            "Email & SMS alerts",
            "Full price history",
            "Priority support",
        ],
    },

    {
        name: "Advance Plan",
        monthlyPrice: "49",
        description:
            "For sellers and agencies tracking at real scale",
        icon: Building2,
        buttonText: "Start Advance",
        variant: "advance",
        features: [
            "Ultimate competitors",
            "Auto track a whole competitor catalog",
            "Every 15-minutes checks",
            "Priority onboarding and support",
        ],
    },
];

export default function PricingSection() {

    return (
        <section className="w-full bg-[#0b0b0b] px-4 md:px-8 mt-20 py-20 text-white sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">

                {/* Header */}
                <div className="flex flex-col gap-6 items-center text-center font-main mb-20">

                    <h2 className="font-bold text-3xl">
                        Plans and Pricing
                    </h2>

                    <p className="max-w-lg text-[14px] text-white/40 ">
                        Choose a plan that fits your investment goals,
                        whether you're just starting or scaling your portfolio.
                    </p>


                </div>

                {/* Pricing Cards */}
                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 font-main">
                    {pricingData.map((plan) => (
                        <PricingCard
                            key={plan.name}
                            name={plan.name}
                            price={plan.monthlyPrice ? parseFloat(plan.monthlyPrice) : plan.monthlyPrice}
                            description={plan.description}
                            features={plan.features}
                            buttonText={plan.buttonText}
                            popular={plan.popular}
                            variant={plan.variant}
                            icon={plan.icon}
                        />
                    ))}
                </div>

                {/* Bottom text */}
                <p className="mt-6 text-center text-[10px] text-white/30">
                    Start your journey risk free · No credit card needed
                </p>
            </div>
        </section>
    );
}