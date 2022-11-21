// To parse this data:
//
//   import { Convert, Video } from "./file";
//
//   const video = Convert.toVideo(json);

export interface Video {
  id?: string;
  likes?: number;
  shares?: number;
  comments?: number;
  views?: number;
}

export const moockvideos: Video[] =[
    {
        id: "7137063154814602497",
        likes: 5,
        shares:10,
        comments:4,
        views:1000
    },
    {
        id: "7165198399304715521",
        likes: 6,
        shares:11,
        comments:4,
        views:1200
    },
    {
        id: "7165659283344887082",
        likes: 7,
        shares:12,
        comments:4,
        views:1400
    }
]
// Converts JSON strings to/from your types
export class Convert {
  public static toVideo(json: string): Video {
    return JSON.parse(json);
  }

  public static videoToJson(value: Video): string {
    return JSON.stringify(value);
  }
}
