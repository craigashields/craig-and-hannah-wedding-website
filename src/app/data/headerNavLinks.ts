interface NavLink {
  href: string;
  title: string;
}

const headerNavLinks: NavLink[] = [
  { href: "/#whenandwhere", title: "When & Where" },
  { href: "/#schedule", title: "Schedule" },
  { href: "/#registry", title: "Registry" },
  { href: "/#accommodation", title: "Accommodation" },
  { href: "/#faqs", title: "FAQs" },
];

export default headerNavLinks;
