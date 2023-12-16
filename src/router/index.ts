import HelloWorldVue from "../components/HelloWorld.vue";
import UserLoginViewVue from "../views/user/UserLoginView.vue";
import UserRrgisterViewVue from "../views/user/UserRegisterView.vue";
import MemberInfoViewVue from "../views/member/MemberInfoView.vue";
import AlbumInfoViewVue from "../views/album/AlbumInfoView.vue";
import SongInfoViewVue from "../views/song/SongInfoView.vue";
import ConcertInfoViewVue from "../views/concert/ConcertInfoView.vue";
import BandInfoViewVue from "../views/band/BandInfoView.vue";
import BandAddViewVue from "../views/band/BandAddView.vue";
import BandEditViewVue from "../views/band/BandEditView.vue";
import BandReleaseViewVue from "../views/band/BandReleaseView.vue";
import BandDetailsViewVue from "../views/band/BandDetailsView.vue";
import SongAddViewVue from "../views/song/SongAddView.vue";
import AlbumAddViewVue from "../views/album/AlbumAddView.vue";
import ConcertAddViewVue from "../views/concert/ConcertAddView.vue";
import BandPartEditViewVue from "../views/band/BandPartEditView.vue";
import SongEditViewVue from "../views/song/SongEditView.vue";
import AlbumSongViewVue from "../views/album/AlbumSongView.vue";
import AlbumDetailsInfoViewVue from "../views/album/AlbumDetailsInfoView.vue";
import MyLikedBandViewVue from "../views/fan/MyLikedBandView.vue";
import MyLikedSongViewVue from "../views/fan/MyLikedSongView.vue";

const routes = [
  { path: "/", name: "主页", component: HelloWorldVue },
  {
    path: "/login",
    name: "登录",
    component: UserLoginViewVue,
  },
  {
    path: "/register",
    name: "注册",
    component: UserRrgisterViewVue,
  },
  {
    path: "/member",
    name: "乐队成员",
    component: MemberInfoViewVue,
  },
  {
    path: "/band",
    name: "乐队",
    component: BandInfoViewVue,
  },
  {
    path: "/band/info",
    name: "乐队信息",
    component: BandDetailsViewVue,
  },
  {
    path: "/band/add",
    name: "添加乐队",
    component: BandAddViewVue,
  },

  {
    path: "/band/edit",
    name: "修改乐队",
    component: BandEditViewVue,
  },
  {
    path: "/band/part",
    name: "修改乐队成员分工",
    component: BandPartEditViewVue,
  },
  {
    path: "/band/release",
    name: "发布乐队信息",
    component: BandReleaseViewVue,
  },
  {
    path: "/album",
    name: "专辑",
    component: AlbumInfoViewVue,
  },
  {
    path: "/album/add",
    name: "添加专辑",
    component: AlbumAddViewVue,
  },
  {
    path: "/album/song",
    name: "歌曲录入专辑",
    component: AlbumSongViewVue,
  },
  {
    path: "/album/info",
    name: "专辑详细信息",
    component: AlbumDetailsInfoViewVue,
  },
  {
    path: "/song",
    name: "歌曲",
    component: SongInfoViewVue,
  },
  {
    path: "/song/add",
    name: "添加歌曲",
    component: SongAddViewVue,
  },
  {
    path: "/song/edit",
    name: "修改歌曲",
    component: SongEditViewVue,
  },
  {
    path: "/concert",
    name: "演唱会",
    component: ConcertInfoViewVue,
  },
  {
    path: "/concert/add",
    name: "添加演唱会",
    component: ConcertAddViewVue,
  },
  {
    path: "/like/band",
    name: "我喜欢的乐队",
    component: MyLikedBandViewVue,
  },
  {
    path: "/like/album",
    name: "我喜欢的专辑",
    component: MyLikedBandViewVue,
  },
  {
    path: "/like/song",
    name: "我喜欢的音乐",
    component: MyLikedSongViewVue,
  },
];

export default routes;
