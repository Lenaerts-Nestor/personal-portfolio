export interface NavItem {
  path: string;
  label: string;
}

export interface NavbarProps {
  menuItems: NavItem[];
  defaultLanguage?: string;
  onLanguageChange?: (language: string) => void;
  socials?: {
    platform: string;
    url: string;
  }[];
}

export interface HeaderMenuProps {
  items: NavItem[];
  onLinkClick?: () => void;
  isMobile?: boolean;
}

export interface SwitchLanguageProps {
  leftOption?: string;
  rightOption?: string;
  defaultLanguage?: string;
  onLanguageChange?: (language: string) => void;
}
