export interface WeeklyModalProps {
  weeksArr: any[];
  openIdx: number | null;
  closeModal: () => void;
  goTo: (dir: -1 | 1) => void;
  t: (key: string) => string;
  animating: boolean;
  setAnimating: React.Dispatch<React.SetStateAction<boolean>>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchMove: (e: React.TouchEvent) => void;
  handleTouchEnd: (e: React.TouchEvent) => void;
  handleOverlayClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleContentScroll: (e: React.UIEvent<HTMLDivElement>) => void;
}