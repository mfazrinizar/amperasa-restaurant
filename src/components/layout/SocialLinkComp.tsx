
// components/ui/SocialLinkComp.tsx
import React from "react";
import { socialLinks } from "@/lib/link";
import SocialLink from "@/components/ui/SocialLink";

type Props = {
    type: "instagram" | "linkedin" | "github";
    url: string;
  };

export default function SocialLinkComp() {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ id, title, path }) => (
        <SocialLink key={id} type={title.toLowerCase() as Props["type"] } url={path} />
      ))}
    </div>
  );
}