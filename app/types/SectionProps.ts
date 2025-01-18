import { ResumeData } from "../data/ResumeData";
export interface SectionProps {
  data: ResumeData;
  onScroll: (section: string) => void;
}
