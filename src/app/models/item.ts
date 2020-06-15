
export interface Item  {
  title: string;
  date: any;
  state?: 'todo' | 'in-progress' | 'done';
  priority: 'high' | 'medium' | 'low' | 'done';
}
