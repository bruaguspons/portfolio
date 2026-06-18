export interface ExperienceItem {
  TITLE: string;
  CONTENT: (string | { highlight: string })[][];
  DATE: string;
  IMAGE_SRC: string;
}
