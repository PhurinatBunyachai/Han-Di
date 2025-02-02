export interface Group {
  id: number;
  name: string;
  total: number | 0;
  member: Members[];
}
export interface Members {
  id: number;
  name: string;
}
