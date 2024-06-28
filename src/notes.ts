export interface Note {
  id: number;
  title: string;
  text: string;
}
export const NOTES: Note[] = [
  {
    id: 1,
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: 'Shakespeare',
    text: 'To be, or not to be: that is the question.',
  },
  {
    id: 3,
    title: 'SoloLearning',
    text: 'An alternative of the traditional approach to learning languages in English',
  },
];
