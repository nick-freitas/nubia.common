export interface Chapter {
  id: string;
  gamebookId: string;
  isStartingChapter: boolean;
  isEndingChapter: boolean;
  title: string;
  content: string;
  version: number;
}
