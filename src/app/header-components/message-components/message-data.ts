export interface MessageData {
  _id: string;
  author: string;
  title: string;
  content: string;
  read: boolean;
  timestamp: bigint;
}
