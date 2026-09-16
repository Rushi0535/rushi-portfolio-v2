export type CertificateCategory = { title: string; count: number };

export const certificateCategories: CertificateCategory[] = [
  { title: "Microsoft Certificates", count: 4 },
  { title: "Google Certificates", count: 2 },
  { title: "Achievement Certificates", count: 2 },
  { title: "Certificate of Appreciation", count: 1 },
  { title: "IEEE Certificates", count: 4 },
];

// TODO: certificate name, date, image — no individual certificate names/dates exist in the
// source content yet (originals were Google Drive iframe embeds). Category structure below is
// ready to accept real entries once images are supplied.
