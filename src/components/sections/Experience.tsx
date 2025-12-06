"use client";

import * as Accordion from "@radix-ui/react-accordion";

const experiences = [
  {
    role: "Full Stack Developer – CRM/ERP System",
    company: "Confidential (Remote, Dubai)",
    period: "Dec 2024 – Present",
    details: "Built responsive UIs, secure authentication with JWT, real-time messaging with Socket.io, Prisma ORM with MySQL, background tasks with Node-Cron, and email notifications via Mailgun."
  },
  {
    role: "Sales Associate – Perfume Store",
    company: "Retail Store, Cairo",
    period: "3 Years",
    details: "Customer service, product presentation, upselling, and monthly sales growth."
  },
  {
    role: "Media Buyer (Freelance)",
    company: "Various Clients",
    period: "Freelance",
    details: "Managed FB & Instagram campaigns, audience research, optimized ad spend, tracked KPIs."
  },
  {
    role: "Event Manager – Tazkarti",
    company: "Tazkarti Events, Egypt",
    period: "Freelance",
    details: "Coordinated large-scale events, managed staff & logistics, executed public events."
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <Accordion.Root type="single" collapsible>
        {experiences.map((exp, idx) => (
          <Accordion.Item key={idx} value={`item-${idx}`} className="mb-4 border rounded-lg">
            <Accordion.Header className="p-4 cursor-pointer bg-gray-100 dark:bg-gray-800">
              <Accordion.Trigger className="flex justify-between w-full font-semibold">
                <span>{exp.role} @ {exp.company}</span>
                <span>{exp.period}</span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="p-4 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
              {exp.details}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
