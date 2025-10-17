"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone } from "lucide-react";

const EMAIL_TO = "chloe@thestrategyedit.co.uk";
const EMAIL_SUBJECT = "The Strategy Edit Enquiry";

export default function Enquiries() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [ask, setAsk] = useState("");

  const handleSubmit = () => {
  const enc = encodeURIComponent;
  const body = `Name: ${name}\nContact: ${email}\nCompany/Stage: ${company}\nAsk: ${ask}`;
  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=${EMAIL_TO}` +
    `&su=${enc(EMAIL_SUBJECT)}` +
    `&body=${enc(body)}`;

  // Try Gmail in a new tab. If blocked, fall back to mailto:
  const win = window.open(gmailUrl, "_blank", "noopener,noreferrer");
  if (!win) {
    window.location.href = `mailto:${EMAIL_TO}?subject=${enc(EMAIL_SUBJECT)}&body=${enc(body)}`;
  }
};

  return (
    <section id="contact" className="space-y-6">
      <h2 className="text-2xl md:text-3xl tracking-tight">Work with Chloe</h2>
      <p className="text-sm text-zinc-700 max-w-prose">
        Founder mentorship with Chloe, Fractional CMO with Chloe, Stage conversations with Chloe.
        Share a line about your brand, the decision you are trying to make and the moment you are aiming to create.
      </p>
      <Card className="border-zinc-200 bg-white">
        <CardHeader>
          <CardTitle>Send an enquiry</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-3">
          <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Email or WhatsApp" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Company / Stage" value={company} onChange={(e) => setCompany(e.target.value)} />
          <Input
            placeholder="What do you want to activate? (e.g., launch, research, growth)"
            value={ask}
            onChange={(e) => setAsk(e.target.value)}
            className="md:col-span-2"
          />
          <Button onClick={handleSubmit} className="md:col-span-1 rounded-2xl">
            Submit <Megaphone className="h-4 w-4 ml-1" />
          </Button>
          <p className="text-xs text-zinc-500 md:col-span-3">
            This opens your email client with a prefilled message.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

