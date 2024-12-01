import React from "react";
import CardTestimonial from "@/components/ui/CardTestimonial";
import ScrollAnimation from "../animation/ScrollAnimation";

const testimonials = [
    {
        id: 0,
        name: "Akram Z. R.",
        avatarUrl: "/testimonial/azr.webp",
        content:
            "The flavors of Palembang cuisine were truly authentic and rich. The staff was attentive, and the ambiance was perfect. I can't wait to return and enjoy more of these delightful dishes.",
    },
    {
        id: 1,
        name: "Nabil P.",
        avatarUrl: "/testimonial/np.webp",
        content:
            "The Palembang dishes were absolutely authentic, bursting with rich flavors. The attentive staff and cozy ambiance added to the remarkable dining experience. Eagerly looking forward to my next visit!",
    },
    {
        id: 2,
        name: "Fachry G.",
        avatarUrl: "/testimonial/fg.webp",
        content:
            "The meal was delightful, with each dish presenting genuine and well-crafted flavors that spoke to the heart of Palembang culinary tradition. The service was thoughtful and efficient, complementing the comfortable and inviting ambiance. I'm definitely planning to come back.",
    },
];

export default function Testimonial() {
    return (
        <section id="Testimonials" className="bg-light-ivory py-section">
            <ScrollAnimation className="container container--sm">
                <div className="container container--sm">
                    <h2 className="mb-8 text-3xl font-bold text-center text-neutral-900 sm:text-4xl lg:text-5xl">
                        Testimonial
                    </h2>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {testimonials.map(({ id, content, name, avatarUrl }) => (
                            <CardTestimonial
                                key={id}
                                content={content}
                                name={name}
                                avatarUrl={avatarUrl}
                            />
                        ))}
                    </div>
                </div>
            </ScrollAnimation>
        </section>
    );
}