export interface SwitchLanguageProps {
  defaultLanguage?: string;
  leftOption?: string;
  rightOption?: string;
  onLanguageChange?: (language: string) => void;
}

export interface MenuItem {
  path: string;
  label: string;
}

export interface NavbarProps {
  title?: string;
  menuItems: MenuItem[];
  defaultLanguage?: string;
  onLanguageChange?: (language: string) => void;
  socials?: {
    platform: string;
    url: string;
  }[];
}
export interface HeaderMenuProps {
  items: MenuItem[];
  onLinkClick?: () => void;
  isMobile?: boolean;
}
