export interface MessageData {
  _id: string;
  author: string;
  title: string;
  content: string;
  read: boolean;
  answer:{
    _id: string;
    answerText:string;
    timestamp: bigint;
  }
  timestamp: bigint;
}
