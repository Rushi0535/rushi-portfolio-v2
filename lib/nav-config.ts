import type { ComponentType, SVGProps } from "react";
import {
  UserIcon,
  DocumentIcon,
  MicIcon,
  AwardIcon,
  FolderIcon,
  MailIcon,
  SparkleIcon,
} from "@/lib/icons";

export type NavItem = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const navItems: NavItem[] = [
  { label: "About Me", href: "/about", icon: UserIcon },
  { label: "Blogs & Articles", href: "/blogs", icon: DocumentIcon },
  { label: "Talks & Events", href: "/talks", icon: MicIcon },
  { label: "Certificates", href: "/certificates", icon: AwardIcon },
  { label: "Projects", href: "/projects", icon: FolderIcon },
  { label: "Contact Me", href: "/contact", icon: MailIcon },
  { label: "Rushi's AI", href: "/ai", icon: SparkleIcon },
];
