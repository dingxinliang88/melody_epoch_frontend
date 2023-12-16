import { Member } from "../member/index";
import { Song } from "../song/index";
import { Album } from "../album/index";
import { Concert } from "../concert/index";

export interface BandBriefInfo {
  bandId: number;
  name: string;
  foundTime: string;
  leaderName: string;
  memberNum: number;
  isLiked: boolean;
}

export interface BandInfo {
  bandId: number;
  name: string;
  foundTime: string;
  leaderName: string;
  memberNum: number;
  isRelease: number;
  isLiked: boolean;
  members: Array<Member>;
  songs: Array<Song>;
  albums: Array<Album>;
  concerts: Array<Concert>;
}

export interface BandAddReq {
  bandName: string;
  leaderId: number;
  profile: string;
}
