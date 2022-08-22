export interface MessageData {
  _id: string;
  authorId: string;
  authorName: string;
  title: string;
  content: string;
  read: boolean;
  direct: boolean;
  answer:{
    _id: string;
    answerText:string;
    timestamp: bigint;
  }
  timestamp: bigint;
}
