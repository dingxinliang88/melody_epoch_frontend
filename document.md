# Melody_Epoch_Frontend

### aseert

> 该部分主要是存放了项目的logo图像和背景

### components

> 该部分主要是全局的页面布局：
>
> - GlobalAside.vue
>
>   > 该部分主要是网页的侧边栏。其包含了以下几个模块：
>   >
>   > - 首页
>   >
>   > - 操作：
>   >
>   >   - 乐队操作：
>   >
>   >     > - 我的乐队信息
>   >     > - 乐队成员
>   >     > - 修改乐队成员分工
>   >     > - 歌曲：
>   >     >   - 创建歌曲信息
>   >     >   - 我的专辑信息
>   >     >   - 歌曲录入专辑
>   >     > - 专辑：
>   >     >   - 创建专辑
>   >     >   - 我的专辑信息
>   >     >   - 歌曲录入专辑
>   >     > - 演唱会：
>   >     >   - 创建演唱会
>   >     >   - 我的演唱会信息
>   >
>   >   - 粉丝操作：
>   >
>   >     > - 喜欢的乐队
>   >     > - 参加的演唱会
>   >
>   > - 乐队展示
>   >
>   > - 乐队成员展示
>   >
>   > - 专辑展示
>   >
>   > - 歌曲展示
>   >
>   > - 演唱会展示
>
> - GlobalHeader.vue
>
>   > - 项目名展示
>   > - 用户图像展示（包含下面功能）
>   >   - 个人信息转跳功能
>   >   - 登出功能
>
> - SongTable.vue
>
>   > - 歌曲展示界面：
>   >
>   >   > 展示内容包括歌曲序号、名称、所属乐队名称、作者、所属专辑名称
>   >
>   > - 操作：
>   >
>   >   > - 加入喜欢
>   >   > - 撤销喜欢



### model

> 该部分为模型层
>
> - album（专辑）
>
>   > 1. `Album` 接口表示一个音乐专辑，包含专辑ID、名称、公司、发行时间、乐队名称、歌曲ID字符串、简介、平均评分和是否已发布等信息。
>   > 2. `AddAlbumReq` 接口表示添加专辑的请求，包含专辑名称、公司、乐队名称和简介等信息。
>   > 3. `AlbumInfo` 接口表示专辑信息，包含专辑ID、名称、公司、乐队名称、平均评分、是否已发布、简介、发行时间和是否可以喜欢等信息。
>   > 4. `SongToAlbumReq` 接口表示将歌曲添加到专辑的请求，包含专辑ID、未选择的歌曲ID数组和已选择的歌曲ID数组。
>   > 5. `AlbumDetailsVO` 接口表示专辑详细信息视图对象，包含专辑ID、名称、公司、发行时间、乐队名称、简介、平均评分、是否可以评论以及评论列表等信息。
>   > 6. `ReleaseAlbumReq` 接口表示发布专辑的请求，包含专辑ID。
>   > 7. `EditAlbumReq` 接口表示编辑专辑的请求，包含专辑ID和简介。
>   > 8. `TopAlbumVO` 接口表示热门专辑视图对象，包含专辑ID、名称、乐队名称和平均评分等信息。
>
> - band（乐队）
>
>   > 1. `BandBriefInfo` 接口表示乐队的简要信息，包含乐队ID、名称、成立时间、领导人姓名、成员数量和是否喜欢等信息。
>   > 2. `BandInfo` 接口表示乐队的详细信息，包含乐队ID、名称、成立时间、领导人姓名、简介、成员数量、是否已发布、是否可以喜欢、是否喜欢、是否可以加入、是否已加入、成员列表、歌曲列表、专辑列表和演唱会列表等信息。
>   > 3. `BandAddReq` 接口表示添加乐队的请求，包含乐队名称、领导人ID和简介等信息。
>   > 4. `EditBandReq` 接口表示编辑乐队的请求，包含乐队ID和简介等信息。
>
> - comment
>
>   > 1. `CommentVO` 接口表示一个评论对象，包含以下属性：
>   >    - commentId: 评论ID（数字）
>   >    - albumId: 专辑ID（数字）
>   >    - content: 评论内容（字符串）
>   >    - parentId: 父评论ID（数字）
>   >    - userId: 用户ID（数字）
>   >    - userName: 用户名（字符串）
>   >    - createTime: 创建时间（字符串）
>   >    - childrenComments: 子评论列表（CommentVO[]）
>   > 2. `AddCommentReq` 接口表示添加评论的请求，包含以下属性：
>   >    - albumId: 专辑ID（数字）
>   >    - parentId: 父评论ID（数字）
>   >    - content: 评论内容（字符串）
>
> - common
>
>   > 定义了一个名为`TransferOption`的接口它包含三个属性：`key`、`label`和`disabled`。
>   >
>   > - `key`是一个数字类型的属性，用于表示选项的唯一标识符。
>   > - `label`是一个字符串类型的属性，用于表示选项的显示标签。
>   > - `disabled`是一个布尔类型的属性，用于表示该选项是否被禁用。如果为`true`，则该选项不可用；如果为`false`，则该选项可用。
>
> - concert
>
>   > 1. `Concert` 接口表示一个音乐会，包含以下属性：
>   >    - `concertId`：音乐会的唯一标识符（数字类型）
>   >    - `name`：音乐会的名称（字符串类型）
>   >    - `startTime`：音乐会的开始时间（字符串类型）
>   >    - `endTime`：音乐会的结束时间（字符串类型）
>   >    - `place`：音乐会的地点（字符串类型）
>   >    - `bandId`：乐队的唯一标识符（数字类型）
>   >    - `bandName`：乐队的名称（字符串类型）
>   >    - `songIdsStr`：歌曲ID列表的字符串形式（数字类型）
>   >    - `maxNum`：音乐会的最大人数（数字类型）
>   > 2. `ConcertAddReq` 接口表示添加音乐会的请求，包含以下属性：
>   >    - `name`：音乐会的名称（字符串类型）
>   >    - `startTime`：音乐会的开始时间（日期类型）
>   >    - `endTime`：音乐会的结束时间（日期类型）
>   >    - `place`：音乐会的地点（字符串类型）
>   >    - `songIdList`：歌曲ID列表（数字数组类型）
>   >    - `maxNum`：音乐会的最大人数（数字类型）
>   > 3. `ConcertBriefInfo` 接口表示音乐会的简要信息，包含以下属性：
>   >    - `concertId`：音乐会的唯一标识符（数字类型）
>   >    - `name`：音乐会的名称（字符串类型）
>   >    - `startTime`：音乐会的开始时间（字符串类型）
>   >    - `endTime`：音乐会的结束时间（字符串类型）
>   >    - `place`：音乐会的地点（字符串类型）
>   >    - `bandName`：乐队的名称（字符串类型）
>   >    - `maxNum`：音乐会的最大人数（数字类型）
>   >    - `isRelease`：是否已发布（数字类型）
>   >    - `canEdit`：是否可以编辑（布尔类型）
>   > 4. `ConcertInfo` 接口表示音乐会的详细信息，包含以下属性：
>   >    - `concertId`：音乐会的唯一标识符（数字类型）
>   >    - `name`：音乐会的名称（字符串类型）
>   >    - `startTime`：音乐会的开始时间（字符串类型）
>   >    - `endTime`：音乐会的结束时间（字符串类型）
>   >    - `place`：音乐会的地点（字符串类型）
>   >    - `bandName`：乐队的名称（字符串类型）
>   >    - `maxNum`：音乐会的最大人数（数字类型）
>   >    - `songInfoVOList`：歌曲信息列表（SongInfo[] 类型）
>   > 5. `JoinConcertReq` 接口表示加入音乐会的请求，包含以下属性：
>   >    - `concertId`：音乐会的唯一标识符（数字类型）
>   > 6. `EditConcertReq` 接口表示编辑音乐会的请求，包含以下属性：
>   >    - `concertId`：音乐会的唯一标识符（数字类型）
>   >    - `name`：音乐会的新名称（字符串类型）
>   >    - `startTime`：音乐会的新开始时间（日期类型）
>   >    - `endTime`：音乐会的新结束时间（日期类型）
>   >    - `place`：音乐会的新地点（字符串类型）
>   >    - `maxNum`：音乐会的新最大人数（数字类型）
>   >    - `songIdList`：新的歌曲ID列表（数字数组类型）
>   > 7. `ReleaseConcertReq` 接口表示发布音乐会的请求，包含以下属性：
>   >    - `concertId`：音乐会的唯一标识符（数字类型）
>   > 8. `ConcertJoinInfo` 接口表示音乐会的参与信息，包含以下属性：
>   >    - `concertId`：音乐会的唯一标识符（数字类型）
>   >    - `joinedNum`：已加入的人数（数字类型）
>   >    - `canJoin`：是否可以加入（布尔类型）
>   >    - `isJoined`：是否已加入该音乐会（布尔类型）
>
> - enums
>
>   > 定义了两个常量对象：`USER_ROLE_TYPE` 和 `EMAIL_LOGIN_TYPE`。
>   >
>   > `USER_ROLE_TYPE` 对象包含两个属性：`MEMBER` 和 `FAN`，分别对应值为 1 和 2。这个对象可能用于表示用户的角色类型，例如成员或粉丝。
>   >
>   > `EMAIL_LOGIN_TYPE` 对象包含两个属性：`CODE_LOGIN` 和 `PASSWORD_LOGIN`，分别对应值为 0 和 1。这个对象可能用于表示用户的登录方式，例如通过验证码登录或通过密码登录。
>   >
>   > 这些常量可以在其他模块中导入并使用，以便在代码中引用它们。
>
> - fan
>
>   >1. `LikeReq` 接口包含两个属性：`likeId`（类型为 number）和 `type`（类型为 number）。这个接口可能用于表示点赞请求，其中 `likeId` 是点赞的唯一标识符，`type` 表示点赞的类型。
>   >2. `LikeAlbumStatus` 接口包含三个属性：`canLike`（类型为 boolean）、`isLiked`（类型为 boolean）和 `isScored`（类型为 boolean）。这个接口可能用于表示专辑的点赞状态，其中 `canLike` 表示是否可以点赞，`isLiked` 表示是否已经点赞，`isScored` 表示是否已经评分。
>   >3. `ScoreAlbumReq` 接口包含两个属性：`albumId`（类型为 number）和 `score`（类型为 number）。这个接口可能用于表示对专辑进行评分的请求，其中 `albumId` 是专辑的唯一标识符，`score` 表示评分的值。
>   >4. `FanInfo` 接口包含六个属性：`fanId`（类型为 number）、`name`（类型为 string）、`gender`（类型为 number）、`age`（类型为 number）、`career`（类型为 string）和 `education`（类型为 string）。这个接口可能用于表示粉丝的信息，其中 `fanId` 是粉丝的唯一标识符，其他属性分别表示粉丝的名字、性别、年龄、职业和教育背景。
>   >5. `EditFanReq` 接口包含六个属性：`fanId`（类型为 number）、`name`（类型为 string）、`gender`（类型为 number）、`age`（类型为 number）、`career`（类型为 string）和 `education`（类型为 string）。这个接口可能用于表示编辑粉丝信息的请求，其中 `fanId` 是粉丝的唯一标识符，其他属性分别表示要修改的粉丝的名字、性别、年龄、职业和教育背景。
>
> - member
>
>   > 1. `Member` 接口表示一个成员的信息，包含以下属性：
>   >    - memberId: 成员的唯一标识符（number类型）
>   >    - name: 成员的名字（string类型）
>   >    - age: 成员的年龄（number类型）
>   >    - part: 成员所在的部门（string类型）
>   >    - joinTime: 成员加入的时间（string类型）
>   >    - leaveTime: 成员离开的时间（string类型）
>   >    - bandId: 成员所属乐队的ID（number类型）
>   >    - bandName: 成员所属乐队的名称（string类型）
>   > 2. `MemberInfo` 接口与 `Member` 接口相同，只是包含了更多的属性信息。
>   > 3. `EditPartReq` 接口表示编辑成员所在部门的要求，包含以下属性：
>   >    - memberId: 需要编辑的成员的唯一标识符（number类型）
>   >    - part: 新的部门名称（string类型）
>   > 4. `JoinBandReq` 接口表示加入乐队的要求，包含以下属性：
>   >    - bandId: 要加入的乐队的唯一标识符（number类型）
>
> - song
>
>   > 1. `Song` 接口表示一首歌曲的信息，包括歌曲ID、名称、所属乐队ID、作者、专辑ID、专辑名称和是否已发布等属性。
>   > 2. `SongAddReq` 接口表示添加歌曲的要求，包括歌曲名称和作者等属性。
>   > 3. `SongItem` 接口表示一个歌曲项，包括歌曲ID和名称等属性。
>   > 4. `SongInfo` 接口表示歌曲的详细信息，包括歌曲ID、名称、所属乐队名称、作者、专辑名称、是否可以喜欢和是否已被喜欢等属性。
>   > 5. `SongToAlbumVO` 接口表示歌曲与专辑之间的关系，包括没有专辑的歌曲列表和有专辑的歌曲列表。
>   > 6. `ReleaseSongReq` 接口表示发布歌曲的要求，包括要发布的歌曲ID。
>
> - user
>
>   > 1. `EmailRegisterParams`：电子邮件注册参数接口，包含以下属性：
>   >    - email：用户的电子邮件地址
>   >    - password：用户的密码
>   >    - checkedPassword：确认密码
>   >    - code：验证码
>   >    - type：用户类型（例如普通用户、粉丝等）
>   > 2. `AccRegisterParams`：账号注册参数接口，包含以下属性：
>   >    - account：用户的账号
>   >    - password：用户的密码
>   >    - checkedPassword：确认密码
>   >    - type：用户类型（例如普通用户、粉丝等）
>   > 3. `AccLoginParams`：账号登录参数接口，包含以下属性：
>   >    - account：用户的账号
>   >    - password：用户的密码
>   > 4. `EmailLoginParams`：电子邮件登录参数接口，包含以下属性：
>   >    - email：用户的电子邮件地址
>   >    - password：用户的密码
>   >    - code：验证码
>   >    - loginType：登录类型（例如普通登录、粉丝登录等）
>   > 5. `UserAuthType`：用户认证类型接口，包含以下属性：
>   >    - isFan：是否为粉丝
>   >    - isLeader：是否为领导
>   >    - isAdmin：是否为管理员
>   > 6. `UserInfo`：用户信息接口，包含以下属性：
>   >    - userId：用户ID
>   >    - nickname：用户昵称
>   >    - email：用户的电子邮件地址
>   >    - type：用户类型（例如普通用户、粉丝等）
>   >    - memberInfoVO：成员信息对象
>   >    - fanInfoVO：粉丝信息对象
>   > 7. `BindEmailReq`：绑定电子邮件请求接口，包含以下属性：
>   >    - email：要绑定的电子邮件地址
>   >    - code：验证码
>   > 8. `EditUserReq`：编辑用户请求接口，包含以下属性：
>   >    - userId：用户ID
>   >    - nickname：用户昵称
>   >    - type：用户类型（例如普通用户、粉丝等）
>   >    - editMemberReq：编辑成员请求对象
>   >    - editFanReq：编辑粉丝请求对象
>   > 9. `QueryReq`：查询请求接口，包含以下属性：
>   >    - searchText：搜索文本
>   >    - searchType：搜索类型
>   >    - current：当前页数

### plugins

> 该层使用axios库创建的HTTP客户端实例，用于与后端服务器进行通信。它包含了一些配置和拦截器，以便在发送请求时处理身份验证、错误处理等任务。

### router

> 该层定义了一些列路由的路径，用于完成不同功能页面之间的相互跳转使得页面简介，功能明确

### service

> 在该层主要包含了一系列的功能模块的实现，其中的各模块与model层相对应
>
> - album:
>
>   > 1. 定义了一个名为`addAlbum`的异步函数，用于向服务器发送POST请求以添加专辑信息。
>   > 2. 定义了一个名为`listAlbumBriefInfoByPage`的异步函数，用于向服务器发送GET请求以获取指定页数的专辑简要信息。
>   > 3. 定义了一个名为`currBandAllAlbums`的异步函数，用于向服务器发送GET请求以获取当前乐队的所有专辑信息。
>   > 4. 定义了一个名为`currBandAllAlbumsByPage`的异步函数，用于向服务器发送GET请求以获取当前乐队的指定页数的所有专辑信息。
>   > 5. 定义了一个名为`getBandAlbumsByPage`的异步函数，用于向服务器发送GET请求以获取指定乐队的指定页数的所有专辑信息。
>   > 6. 定义了一个名为`addSongsToAlbum`的异步函数，用于向服务器发送PUT请求以将歌曲添加到专辑中。
>   > 7. 定义了一个名为`getAlbumDetailsInfo`的异步函数，用于向服务器发送GET请求以获取指定专辑ID的专辑详细信息。
>   > 8. 定义了一个名为`releaseAlbumInfo`的异步函数，用于向服务器发送POST请求以发布专辑信息。
>   > 9. 定义了一个名为`editAlbumInfo`的异步函数，用于向服务器发送PUT请求以编辑专辑信息。
>   > 10. 定义了一个名为`getTopAlbums`的异步函数，用于向服务器发送GET请求以获取热门专辑信息。
>
> - band：
>
>   > 这个模块提供了一些异步函数，用于与后端服务器进行交互，以获取和操作乐队信息。以下是每个函数的功能：
>   >
>   > 1. `listBandBriefInfoByPage(curr: number)`：根据页码获取乐队简要信息（列表）。
>   > 2. `listBandInfoVO(bandId: number)`：根据乐队ID获取乐队信息。
>   > 3. `listCurrBandInfoVO()`：获取当前乐队信息。
>   > 4. `addBand(params: BandAddReq)`：添加一个新的乐队。
>   > 5. `releaseBandInfo()`：发布乐队信息。
>   > 6. `unReleaseBandInfo()`：取消发布乐队信息。
>   > 7. `currBandReleaseStatus()`：获取当前乐队的状态。
>   > 8. `editBandInfo(params: EditBandReq)`：编辑乐队信息。
>   >
>   > 这些函数都使用了`async/await`语法来处理异步操作，并返回服务器响应的数据。
>
> - comment:
>
>   > 函数名为 `addComment`，它接受一个参数 `params`，类型为 `AddCommentReq`，表示要添加的评论信息。
>   >
>   > 在函数内部，使用 `await http.post("/comment/add", { ...params })` 发送异步请求到服务器的 `/comment/add` 路径，并将 `params` 对象作为请求体发送。
>   >
>   > 如果服务器返回了响应数据（`res.data`），则将该数据作为函数的返回值。
>   >
>   > 请注意，这段代码中的导入语句 `import http from "../../plugins/http";` 和模型类 `import { AddCommentReq } from "../../model/comment";` 是示例性的，需要根据实际情况进行修改。
>
> - concert:
>
>   > 这是用于处理演唱会信息的模块，主要包含以下功能：
>   >
>   > 1. 添加演唱会信息（`addConcert`）：通过异步的 HTTP POST 请求向服务器发送演唱会信息。
>   > 2. 获取演唱会简介列表（`listConcertBriefInfoByPage`）：根据当前页码获取演唱会的简介（列表）。
>   > 3. 根据演唱会ID获取所有演唱会信息（`listCurrConcertInfoVO`）：通过异步的 HTTP GET 请求从服务器获取指定演唱会的所有信息。
>   > 4. 加入演唱会请求（`joinConcert`）：通过异步的 HTTP POST 请求向服务器发送加入演唱会的请求。
>   > 5. 取消加入演唱会请求（`leaveConcert`）：通过异步的 HTTP POST 请求向服务器发送取消加入演唱会的请求。
>   > 6. 获取当前演唱会的加入信息（`getCurrConcertJoinInfo`）：通过异步的 HTTP GET 请求从服务器获取当前演唱会的加入信息。
>   > 7. 获取当前演唱会的信息（`getCurrConcertDetails`）：通过异步的 HTTP GET 请求从服务器获取当前演唱会的详细信息。
>   > 8. 修改演唱会信息（`editConcertInfo`）：通过异步的 HTTP PUT 请求向服务器发送修改演唱会信息的请求。
>   > 9. 发布演唱会信息（`releaseConcert`）：通过异步的 HTTP POST 请求向服务器发送发布演唱会信息的请求。
>   > 10. 取消发布演唱会信息（`unReleaseConcert`）：通过异步的 HTTP POST 请求向服务器发送取消发布演唱会信息的请求。
>
> - fan:
>
>   > 这是用于处理用户对音乐、专辑和乐队的喜欢（点赞）操作的模块。共有以下功能：
>   >
>   > 1. 点赞（喜欢）：通过异步的HTTP POST请求，向服务器发送点赞请求，将指定的专辑或歌曲标记为喜欢。
>   > 2. 取消点赞：通过异步的HTTP POST请求，向服务器发送取消点赞请求，将指定的专辑或歌曲从喜欢列表中移除。
>   > 3. 获取喜欢的专辑状态：通过异步的HTTP GET请求，根据专辑ID查询该专辑在用户喜欢的专辑列表中的点赞状态。
>   > 4. 为专辑打分：通过异步的HTTP POST请求，向服务器发送为专辑打分的请求，记录用户对该专辑的评价分数。
>   > 5. 获取用户喜欢的乐队列表：通过异步的HTTP GET请求，获取用户喜欢的乐队列表。
>   > 6. 获取用户喜欢的专辑列表：通过异步的HTTP GET请求，获取用户喜欢的专辑列表。
>   > 7. 获取用户喜欢的歌曲列表：通过异步的HTTP GET请求，获取用户喜欢的歌曲列表。
>   > 8. 获取用户参加的演唱会列表：通过异步的HTTP GET请求，获取用户参加的演唱会列表。
>
> - member:
>
>   > 这是用于处理乐队成员信息的模块，主要功能包括：
>   >
>   > 1. 根据分页信息获取乐队成员信息列表（`listMemberInfoByPage`）
>   > 2. 获取当前乐队的成员的列表（`listMemberInCurrBand`）
>   > 3. 根据当前分页信息，获取当前乐队成员列表（`listMemberInCurrBandByPage`）
>   > 4. 根据分页信息及乐队ID获取乐队成员列表（`listMemberInBandByPage`）
>   > 5. 编辑成员信息（`editPart`）
>   > 6. 加入乐队请求（`joinBand`）
>   > 7. 离开乐队请求（`leaveBand`）
>
> - song:
>
>   > 这是用于处理音乐相关的API请求的模块。包含以下功能：
>   >
>   > 1. 添加歌曲（`addSong`）：通过异步http.post请求，将歌曲信息发送到服务器进行添加。
>   > 2. 获取歌曲列表（`listSongItems`）：通过异步http.get请求，从服务器获取所有歌曲的信息。
>   > 3. 根据当前分页信息获取歌曲列表（`listSongInfoByPage`）：通过异步http.get请求，根据指定的分页信息，从服务器获取歌曲列表。
>   > 4. 根据当前分页信息获取当前乐队的歌曲列表（`currBandSongsByPage`）：通过异步http.get请求，根据指定的分页信息和乐队ID，从服务器获取当前乐队的歌曲列表。
>   > 5. 根据分页信息及乐队ID，获取乐队歌曲列表（指定乐队）（`getBandSongsByPage`）：通过异步http.get请求，根据指定的分页信息、乐队ID和分页大小，从服务器获取指定乐队的歌曲列表。
>   > 6. 根据分页信息获取专辑的歌曲列表（`getAlbumSongsByPage`）：通过异步http.get请求，根据指定的分页信息和专辑ID，从服务器获取专辑的歌曲列表。
>   > 7. 根据专辑ID获取专辑的歌曲信息（`listSongToAlbum`）：通过异步http.get请求，根据指定的专辑ID，从服务器获取该专辑的所有歌曲信息。
>   > 8. 发布歌曲（`releaseSong`）：通过异步http.post请求，将歌曲发布信息发送到服务器进行发布。
>
> - user:
>
>   > 这是用于处理用户登录、注册、邮箱验证、角色获取、用户信息编辑、邮箱绑定和查询等功能的模块。包含的功能如下：
>   >
>   > 1. `getCaptcha`函数用于获取邮箱验证码。
>   > 2. `accLogin`函数用于账号登录。
>   > 3. `emailLogin`函数用于邮箱登录。
>   > 4. `accRegister`函数用于账号注册。
>   > 5. `emailRegister`函数用于邮箱注册。
>   > 6. `getAuthType`函数用于获取当前角色类型。
>   > 7. `userLogout`函数用于用户登出。
>   > 8. `getCurrUser`函数用于获取当前登录角色信息。
>   > 9. `editUserInfo`函数用于修改当前登录角色信息。
>   > 10. `bindEmail`函数用于绑定邮箱信息。
>   > 11. `queryInfo`函数用于查询用户信息。

### view

> 该层包含了与service层对应的界面的实现
>
> - album
>
>   > - AlbumAddView.vue
>   >
>   >   > 创建和编辑专辑信息,了Element UI库来构建表单界面，并调用了一个后端服务来处理专辑的添加和修改操作。代码的主要功能：
>   >   >
>   >   > 1. 导入所需的依赖项和模块，包括Vue、Element UI库、路由等。
>   >   > 2. 定义一个响应式引用`albumAddReq`，用于存储专辑信息的表单数据。
>   >   > 3. 使用`useRouter()`函数创建一个路由实例`router`，用于导航到其他页面。
>   >   > 4. 定义一个异步函数`async () => {...}`，用于提交表单数据并处理响应。如果添加成功，会显示一个成功提示，并导航回专辑列表页面。
>   >   > 5. 定义一个函数`onReset()`，用于重置表单数据。
>   >   > 6. 定义一个函数`goBack()`，用于返回上一页。
>   >   > 7. 在模板中，使用Element UI的`el-page-header`组件设置页面标题，并使用`el-form`组件构建表单界面。表单包含专辑名称、发行公司和专辑简介等字段。
>   >   > 8. 在表单底部，添加一个提交按钮，点击时触发`async () => {...}`函数。同时，还提供了一个重置按钮，点击时触发`onReset()`函数。
>   >   > 9. 最后，定义了样式规则，用于美化组件的外观。
>   >   >
>   >   > 需要注意的是，这段代码中的`../../utils/common`部分可能是引入了一些通用的工具函数或常量，但在给定的代码片段中并未给出具体实现。
>   >
>   > - AlbumDetailsInfoView.vue
>   >
>   >   > 这是一个名为`AlbumDetailsInfoView.vue`的Vue组件，它的主要功能是展示专辑信息、歌曲信息和评论信息。
>   >   >
>   >   > 1. 导入所需的依赖项，如`useRouter`、`useRoute`等。
>   >   > 2. 定义一些变量，如`router`、`route`、`goBack`、`addCommentReq`、`currAlbumId`、`newCommentContent`等。
>   >   > 3. 定义一些函数，如`loadAlbumData`、`onCurrChange`、`loadAlbumSongByPage`、`loadLikeStatus`、`showCommentInput`、`cancel`、`commitComment`、`addNewComment`、`doLike`、`doNotLike`、`doScore`和`doCancel`。这些函数分别用于加载专辑数据、切换页码、加载专辑歌曲、加载喜欢状态、显示评论输入框、取消评论、提交评论、添加新评论、喜欢/取消喜欢和打分。
>   >   > 4. 在`onMounted`钩子中，获取路由参数中的专辑ID，并调用相应的函数加载数据。
>   >   > 5. 定义一些响应式引用，如`albumInfo`、`commentUserId`、`likeStatus`、`total`、`albumSongInfo`和`score`。这些引用用于存储专辑信息、评论用户ID、喜欢状态、总评论数、专辑歌曲信息和评分。
>   >   > 6. 使用Element Plus的组件构建页面结构，包括`el-page-header`、`el-dialog`、`el-form`、`el-form-item`、`el-rate`等。这些组件用于展示页面头部、对话框、表单、表单项和评分组件。
>   >   > 7. 在模板中，使用条件渲染和事件绑定来控制页面元素的显示和交互。例如，根据喜欢状态显示不同的按钮，点击按钮时触发相应的函数。
>   >   > 8. 在`el-form>`标签中，通过`v-model`指令将表单数据绑定到`albumInfo
>   >
>   > - AlbumInfoView.vue
>   >
>   >   > 用于展示专辑信息、歌曲信息和评论信息。主要功能如下：
>   >   >
>   >   > 1. 挂载时处理一些数据，加载专辑信息。
>   >   > 2. 提供返回上一页的功能。
>   >   > 3. 分页显示专辑信息，支持切换页码。
>   >   > 4. 显示搜索框，可以输入关键词进行搜索。
>   >   > 5. 对每首歌曲添加喜欢和撤销喜欢的按钮，点击后会触发相应的操作。
>   >   > 6. 对每首歌曲添加查看详情的按钮，点击后会跳转到专辑详情页面。
>   >   > 7. 使用Element Plus组件库构建页面结构，包括表格、分页、对话框等组件。
>   >   > 8. 定义了一些响应式引用，用于存储专辑信息、喜欢状态、总页数等信息。
>   >   > 9. 定义了一些函数，用于处理喜欢和撤销喜欢的操作、获取专辑详情、搜索等功能。
>   >
>   > - AlbumSongView.vue 
>   >
>   >   > 用于实现歌曲录入到专辑的功能。具体功能如下：
>   >   >
>   >   > 1. 导入所需的依赖和模块，如路由、表格列、表单等。
>   >   > 2. 定义了一些响应式变量，如`albumSelect`（选中的专辑）、`albumOptions`（所有专辑选项）、`noneSelectedSongs`（未选择的歌曲）、`selectIds`（已选择的歌曲ID）等。
>   >   > 3. 在`onMounted`生命周期钩子中，通过调用`currBandAllAlbums`函数获取当前乐队的所有专辑，并将其赋值给`albumOptions`。
>   >   > 4. 定义了`filterMethod`方法，用于过滤搜索结果。
>   >   > 5. 定义了两个异步函数`asyncAddSongsToAlbum`和`listSongToAlbum`，分别用于将歌曲添加到专辑和获取歌曲列表。
>   >   > 6. 定义了`goBack`函数，用于返回上一页。
>   >   > 7. 定义了`do`函数，用于获取歌曲列表并更新`noneSelectedSongs`和`selectIds`。
>   >   > 8. 定义了`onReset`函数，用于重置表单。
>   >   > 9. 在模板中，使用`el-page-header`、`el-form`、`el-form-item`、`el-select`、`el-transfer`、`el-popconfirm`和`el-button`等元素构建了用户界面。
>   >
>   > - CurrBandAlbumsView.vue
>   >
>   >   > 用于展示和操作专辑信息。具体功能如下：
>   >   >
>   >   > 1. 定义了一些响应式变量，如`albumTotal`（专辑总数）、`bandAlbumInfo`（乐队专辑信息列表）等。
>   >   > 2. 实现了`onMounted`生命周期钩子，在组件挂载时调用`loadAlbumByPage`方法加载专辑信息。
>   >   > 3. 定义了`goBack`方法，用于返回上一页。
>   >   > 4. 实现了分页功能，通过`onAlbumCurrChange`方法改变当前页码时重新加载专辑信息。
>   >   > 5. 定义了`doGetAlbumDetail`方法，用于跳转到专辑详情页面。
>   >   > 6. 实现了发布专辑的功能，通过`doReleaseAlbum`方法发布选中的专辑。
>   >   > 7. 定义了编辑专辑的功能，通过`onAlbumEdit`方法打开编辑弹窗，并设置初始值。
>   >   > 8. 实现了提交编辑表单的功能，通过`onAlbumEditSubmit`方法提交编辑后的专辑信息。
>   >   > 9. 实现了取消编辑功能，通过`onAlbumEditCancel`方法关闭编辑弹窗。
>   >   > 10. 在模板中渲染了一个表格，显示乐队的专辑信息，包括专辑序号、名称、发行公司、发行时间、乐队名称、专辑均分、专辑简介等。同时提供了发布、查看详情、修改等功能按钮。
>
> - band
>
>   > - BandAddView.vue
>   >
>   >   > 乐队信息添加页面。它包含了一个表单，用于填写乐队的名称和简介。当用户点击"创建成功"按钮时，会调用`async`函数将表单数据提交给后端服务进行保存，并跳转到乐队列表页面。如果需要重置表单，可以点击"重置"按钮。
>   >
>   > - BandDetailsView.vue
>   >
>   >   > 用于展示乐队的详细信息。它包括以下功能：
>   >   >
>   >   > 1. 显示乐队的基本信息，如序号、名称、创建时间、队长、人数和简介。这些信息通过`<el-form>`组件以表单形式展示，并使用`<el-input>`组件将数据绑定到对应的变量上。
>   >   >
>   >   > 2. 根据乐队的信息判断用户是否可以喜欢或加入乐队。如果可以喜欢或加入，会显示相应的按钮；否则，不会显示按钮。这些按钮通过`<el-button>`组件实现，并通过条件语句控制按钮的显示状态。
>   >   >
>   >   > 3. 显示乐队的成员信息。成员信息通过`<el-table>`组件以表格形式展示，包括成员序号、姓名、年龄、分工、加入时间和退出时间等列。表格的数据通过`bandMemberInfo`数组进行绑定。
>   >   >
>   >   > 4. 分页功能。对于成员信息、歌曲信息、专辑信息和演唱会信息，都使用了分页组件`<el-pagination>`来实现分页功能。当前页码可以通过点击分页组件上的页码按钮来切换，每页显示的数量可以通过调整`pageSize`变量的值来改变。
>   >   >
>   >   > 5. 事件处理函数。在模板中定义了一些事件处理函数，如`doNotLike`、`doLike`、`doJoinBand`、`doLeaveBand`、`onMemberCurrChange`、`onSongCurrChange`、`onAlbumCurrChange`和`onConcertCurrChange`。这些函数用于处理用户与页面交互的事件，如点击按钮、翻页等操作。
>   >
>   > - BandInfoView.vue
>   >
>   >   > 用于展示乐队信息。它包括以下功能：
>   >   >
>   >   > 1. 显示乐队信息的标题和内容。
>   >   > 2. 根据用户类型（粉丝或非粉丝）显示不同的操作按钮。
>   >   > 3. 创建一个乐队按钮，点击后跳转到创建乐队页面。
>   >   > 4. 显示一个搜索按钮，点击后弹出搜索对话框。
>   >   > 5. 显示一个表格，展示乐队的序号、名称、创建时间、队长、人数等信息，并支持对乐队进行喜欢和查看详情的操作。
>   >   > 6. 使用分页组件来控制表格的分页显示。
>   >   > 7. 弹出一个搜索对话框，用户可以输入关键词进行搜索。
>   >
>   > - BandPartEditView.vue
>   >
>   >   > 用于展示成员分工信息。它包括以下功能：
>   >   >
>   >   > 1. 显示一个标题为"成员分工信息"的页面头部。
>   >   > 2. 使用`el-table`组件创建一个表格，展示成员的序号、姓名和当前分工等信息。
>   >   > 3. 在表格中添加一列"选择分工"，使用`el-select`组件让用户可以选择新的分工。
>   >   > 4. 在表格中添加一列"Operations"，包含一个"修改"按钮，点击后可以调用`doEditPart`方法进行修改操作。
>   >
>   > - CurrBandInfo.vue
>   >
>   >   > 用于展示乐队的信息。其中包含了乐队名称、创建时间、队长、人数、简介等基本信息，以及成员信息、歌曲信息、专辑信息和演唱会信息等详细信息。此外，还有一个修改乐队信息的弹窗，可以编辑乐队的简介等信息。
>
> - concert
>
>   > - ConcertAddView.vue
>   >
>   >   > 用于创建一个填写演唱会信息的表单。表单包括以下字段：
>   >   >
>   >   > 1. 演唱会名称（el-form-item）
>   >   > 2. 时间（el-form-item，使用el-date-picker组件选择日期和时间范围）
>   >   > 3. 歌曲（el-form-item，使用el-transfer组件实现歌曲的选择和撤销操作）
>   >   > 4. 地点（el-form-item）
>   >   > 5. 上限人数（el-form-item，使用el-input-number组件设置最小值和最大值）
>   >   > 6. 重置按钮（el-form-item，点击后调用onReset方法）
>   >
>   > - ConcertDetailsView.vue
>   >
>   >   > 用于显示演唱会详细信息。它包括以下功能：
>   >   >
>   >   > 1. 页面头部（`<el-page-header>`）：包含返回按钮和标题。
>   >   > 2. 参加状态按钮（`<el-button>`）：根据`concertJoinInfo`对象的属性判断用户是否可以参加演唱会，并显示相应的按钮状态。
>   >   > 3. 演唱会信息表单（`<el-form>`）：展示演唱会的序号、名称、乐队名称、开始时间、结束时间、地点、上限人数和已加入人数等信息。这些信息都是禁用的，无法修改。
>   >   > 4. 歌曲信息表格（`<el-table>`）：展示演唱会的歌曲信息，包括歌曲序号、歌曲名、作者、所属专辑和乐队名称等。用户可以对喜欢的歌曲进行操作，如撤销喜欢或加入喜欢。
>   >   > 5. 歌曲信息表格的操作列（`<el-table-column>`）：包含一个默认插槽，用于渲染每行歌曲的操作按钮。如果歌曲可以喜欢，则显示撤销喜欢和加入喜欢的按钮；否则，只显示禁用的加入喜欢的按钮。
>   >   > 6. 歌曲信息表格的空数据提示（`<el-empty>`）：当没有歌曲信息时，显示一个空数据的占位符。
>   >
>   > - ConcertInfoView.vue
>   >
>   >   > 用于展示演唱会信息。以下是该代码的功能：
>   >   >
>   >   > 1. 页面头部（`<el-page-header>`）：包含一个返回按钮和一个标题，点击返回按钮可以返回上一页。
>   >   > 2. 搜索按钮（`<el-button>`）：在页面头部右侧显示一个搜索按钮，点击后会弹出搜索对话框。
>   >   > 3. 表格数据（`<el-table>`）：展示演唱会的相关信息，包括序号、名称、乐队名称、开始时间、结束时间、地点和上限人数等。每行数据都有一个操作列，点击详情按钮可以查看详细信息。
>   >   > 4. 分页组件（`<el-pagination>`）：用于分页显示表格数据，可以通过点击页码来切换不同的页面。
>   >   > 5. 搜索对话框（`<el-dialog>`）：当点击搜索按钮时弹出，用户可以输入关键词进行搜索。搜索完成后，表格会自动更新显示符合条件的数据。
>   >
>   > - CurrConcertView.vue
>   >
>   >   > 用于展示和管理演唱会信息。以下是该代码的功能：
>   >   >
>   >   > 1. 页面头部（`<el-page-header>`）：包含一个返回按钮和一个标题，点击返回按钮可以返回上一页。
>   >   > 2. 表格数据（`<el-table>`）：展示演唱会的相关信息，包括序号、名称、开始时间、结束时间、地点和上限人数等。每行数据都有一个操作列，点击详情按钮可以查看详细信息，点击修改按钮可以编辑演唱会信息，点击发布/撤销发布按钮可以控制演唱会的发布状态。
>   >   > 3. 分页组件（`<el-pagination>`）：用于分页显示表格数据，可以通过点击页码来切换不同的页面。
>   >   > 4. 修改对话框（`<el-drawer>`）：当需要修改演唱会信息时，会弹出这个对话框，用户可以在对话框中输入新的信息并提交修改请求。
>   >   > 5. 表单元素（`<el-form>`）：用于收集用户输入的演唱会信息，包括名称、时间、歌曲、地点和上限人数等。
>   >   > 6. 按钮元素（`<el-button>`）：包括取消按钮、保存按钮和发布/撤销发布按钮等，用于执行相应的操作。
>
> - fan
>
>   > - MyJoinedConcertView.vue
>   >
>   >   > 用于展示一个包含演唱会信息的表格。功能如下：
>   >   >
>   >   > 1. 使用`<el-page-header>`组件创建一个页面头部，包含一个返回按钮和一个标题"演唱会信息"。点击返回按钮会触发`goBack`方法。
>   >   > 2. 使用`<el-table>`组件创建一个表格，展示演唱会的相关信息，包括序号、名称、乐队名称、开始时间、结束时间、地点和上限人数等列。
>   >   > 3. 在表格中的每一行末尾添加了一个操作列，包含两个按钮：详情按钮和取消参加按钮。点击详情按钮会调用`doGetDetails()`方法获取详细信息；点击取消参加按钮会弹出一个确认框，询问用户是否确认取消参加该演唱会，如果确认则调用`doLeaveConcert()`方法取消参加。
>   >   > 4. 如果表格为空，则显示一个空白区域，通过`<template #empty>`标签实现。
>   >   > 5. 使用`<el-pagination>`组件创建一个分页器，用于控制表格的分页显示。当前页码可以通过`currPage`变量进行绑定，每页显示的记录数为15，当页码发生变化时会触发`onCurrChange()`方法。
>   >
>   > - MyLikedAlbumView.vue
>   >
>   >   > 用于展示一个包含喜欢的音乐专辑信息的表格。功能如下：
>   >   >
>   >   > 1. 使用`<el-page-header>`组件创建一个页面头部，包含一个返回按钮和一个标题"我喜欢的专辑信息"。点击返回按钮会触发`goBack`方法。
>   >   > 2. 使用`<el-table>`组件创建一个表格，展示音乐专辑的相关信息，包括专辑序号、专辑名称、发行公司、乐队名称和专辑均分等列。
>   >   > 3. 在表格中的每一行末尾添加了一个操作列，包含两个按钮：撤销喜欢和详情。如果用户喜欢该专辑（`scope.row.isLiked`为真），则显示撤销喜欢的按钮；否则不显示。点击撤销喜欢的按钮会调用`doNotLike(scope.row)`方法。点击详情按钮会调用`doGetAlbumDetail(scope.$index, scope.row)`方法。
>   >   > 4. 如果表格为空，则显示一个空白区域，通过`<template #empty>`标签实现。
>   >   > 5. 使用`<el-pagination>`组件创建一个分页器，用于控制表格的分页显示。当前页码可以通过`albumCurrPage`变量进行绑定，每页显示的记录数由`pageSize`变量决定。当页码发生变化时会触发`onAlbumCurrChange`方法。
>   >
>   > - MyLikedBandView.vue
>   >
>   >   > 用于展示一个包含喜欢的音乐乐队信息的表格。功能如下：
>   >   >
>   >   > 1. 使用`<el-page-header>`组件创建一个页面头部，包含一个返回按钮和一个标题"我喜欢的乐队信息"。点击返回按钮会触发`goBack`方法。
>   >   > 2. 使用`<el-table>`组件创建一个表格，展示乐队的相关信息，包括乐队序号、乐队名称、创建时间、队长和人数等列。
>   >   > 3. 在表格中的每一行末尾添加了一个操作列，包含两个按钮：撤销喜欢和详情。如果用户喜欢该乐队（`scope.row.isLiked`为真），则显示撤销喜欢的按钮；否则不显示。点击撤销喜欢的按钮会调用`doNotLike(scope.row)`方法。点击详情按钮会调用`doGetBandDetail(scope.$index, scope.row)`方法。
>   >   > 4. 如果表格为空，则显示一个空白区域，通过`<template #empty>`标签实现。
>   >   > 5. 使用`<el-pagination>`组件创建一个分页器，用于控制表格的分页显示。当前页码可以通过`currPage`变量进行绑定，每页显示的记录数由`pageSize`变量决定。当页码发生变化时会触发`onCurrChange`方法。
>   >
>   > - MyLikedSongView.vue
>   >
>   >   > 用于展示歌曲信息。具体功能如下：
>   >   >
>   >   > 1. 使用`<el-page-header>`组件创建一个页面头部，包含一个返回按钮和一个标题"歌曲信息"。点击返回按钮会触发`goBack`方法。
>   >   > 2. 使用`<el-table>`组件创建一个表格，展示歌曲的相关信息，包括歌曲序号、歌曲名称、乐队名称、作者和所属专辑名称等列。
>   >   > 3. 在表格中的每一行末尾添加了一个操作列，包含一个撤销喜欢的按钮。如果用户喜欢该歌曲（`scope.row.isLiked`为真），则显示撤销喜欢的按钮；否则不显示。点击撤销喜欢的按钮会调用`doNotLike(scope.row)`方法。
>   >   > 4. 如果表格为空，则显示一个空白区域，通过`<template #empty>`标签实现。
>   >   > 5. 使用`<el-pagination>`组件创建一个分页器，用于控制表格的分页显示。当前页码可以通过`currPage`变量进行绑定，每页显示的记录数由`pageSize`变量决定。当页码发生变化时会触发`onCurrChange`方法。
>
> - member
>
>   > - MemberEditView.vue
>   >
>   >   > 成员修改个人信息
>   >
>   > - MemberlnfoView.vue
>   >
>   >   > 用于展示乐队成员信息。包含以下功能：
>   >   >
>   >   > 1. 使用`el-page-header`组件创建一个页面头部，其中包含一个返回按钮和一个标题"乐队成员信息"。点击返回按钮会触发`goBack`方法，用于返回上一页。
>   >   >
>   >   > 2. 使用`el-table`组件创建一个表格，用于展示乐队成员的信息。表格的数据源由`tableData`变量提供，表格的样式设置为宽度为100%，顶部外边距为36px。
>   >   >
>   >   > 3. 表格中包含了多个列，分别对应乐队成员的不同属性，如成员序号、成员姓名、性别、年龄、分工、乐队名称、加入时间和离开时间等。
>   >   >
>   >   > 4. 在表格的末尾添加了一个空模板`<template #empty>`，当表格数据为空时，会显示一个空白区域。
>   >   >
>   >   > 5. 使用`el-pagination`组件创建了一个分页器，用于控制表格的分页显示。当前页码由`currPage`变量绑定，每页显示的记录数为15条，总记录数由`total`变量提供。当页码发生变化时，会触发`onCurrChange`方法，用于更新当前页码并重新获取数据。
>   >   >
>   >   > 综上所述，这段代码的主要作用是展示乐队成员的信息，并提供翻页功能以便于用户查看多页数据。
>
> - song
>
>   > - CurrBandSongView.vue
>   >
>   >   > 用于展示歌曲信息。包含以下功能：
>   >   >
>   >   > 1. 使用`el-page-header`组件创建一个页面头部，其中包含一个返回按钮和一个标题"歌曲信息"。点击返回按钮会触发`goBack`方法，用于返回上一页。
>   >   >
>   >   > 2. 使用`el-table`组件创建一个表格，用于展示歌曲的信息。表格的数据源由`tableData`变量提供，表格的样式设置为宽度为100%，顶部外边距为36px。
>   >   >
>   >   > 3. 表格中包含了多个列，分别对应歌曲的不同属性，如歌曲序号、歌曲名称、乐队名称、作者和所属专辑名称等。
>   >   >
>   >   > 4. 在表格的最后一列添加了一个固定列，显示操作按钮。根据歌曲的发布状态（`scope.row.isRelease`），显示不同的按钮。如果歌曲已发布（`scope.row.isRelease === 1`），则显示已发布按钮；否则显示发布按钮，并绑定了`doReleaseSong`方法，用于发布歌曲。
>   >   >
>   >   > 5. 在表格的末尾添加了一个空模板`<template #empty>`，当表格数据为空时，会显示一个空白区域。
>   >   >
>   >   > 6. 使用`el-pagination`组件创建了一个分页器，用于控制表格的分页显示。当前页码由`currPage`变量绑定，每页显示的记录数由`pageSize`变量提供。当页码发生变化时，会触发`onCurrChange`方法，用于更新当前页码并重新获取数据。
>   >
>   > - SongAddView.vue
>   >
>   >   > 用于创建一个表单页面，它包含以下功能：
>   >   >
>   >   > 1. 使用`<el-page-header>`组件创建一个页面头部，其中包含一个返回按钮和一个标题"填写歌曲信息"。点击返回按钮会触发`goBack`方法，用于返回上一页。
>   >   >
>   >   > 2. 使用`<el-form>`组件创建一个表单，将表单的数据模型绑定到`songAddParams`变量上。表单的标签宽度设置为120px，样式设置为居中对齐。
>   >   >
>   >   > 3. 在表单中添加两个输入框，分别用于输入歌曲名称和歌曲作者。这两个输入框的值通过`v-model`指令与`songAddParams`对象的`name`和`author`属性进行双向绑定。
>   >   >
>   >   > 4. 在表单中添加一个提交按钮，类型为"primary"（蓝色），当点击该按钮时，会触发`onReset`方法。同时，还有一个重置按钮，当点击该按钮时，会触发`onReset`方法。
>   >
>   > - SongInfoView.vue
>   >
>   >   > 这段代码是一个Vue.js组件的模板部分，用于创建一个包含歌曲信息、搜索按钮、表格数据和分页功能的页面。具体功能如下：
>   >   >
>   >   > 1. 使用`<el-page-header>`组件创建一个页面头部，其中包含一个返回按钮和一个标题"歌曲信息"。点击返回按钮会触发`goBack`方法，用于返回上一页。
>   >   >
>   >   > 2. 在页面内容区域，使用`<span>`标签显示歌曲信息。
>   >   >
>   >   > 3. 在页面右侧，使用`<template #extra>`标签创建一个额外的区域，包含以下元素：
>   >   >    - 一个搜索按钮，类型为"success"，点击时触发`onShowSearch`方法。
>   >   >    - 一个表格数据按钮，类型为"warning"，点击时触发`tableData`方法，并传递三个参数：`doLike`、`doNotLike`和`hasOpt`。
>   >   >    - 一个分页组件，当前页码由`currPage`变量绑定，总页数由`total`变量绑定，每页显示15条记录，点击页码时触发`onCurrChange`方法。
>   >   >
>   >   > 4. 在额外区域下方，创建一个对话框组件`<el-dialog>`，用于显示搜索功能。对话框的显示状态由`showSearch`变量控制，关闭按钮默认不显示，标题为"搜索"，宽度为60%。
>   >   >
>   >   > 5. 在对话框中，使用`<el-input>`组件创建一个输入框，用于输入搜索关键词。输入框的值由`searchText`变量绑定，并在输入框末尾添加一个搜索按钮，点击时触发`onSearchConfirm`方法。
>
> - user
>
>   > - UserInfoView.vue
>   >
>   >   > 这段代码是一个基于Vue.js的前端页面模板，用于展示个人信息。它使用了Element UI库中的组件来构建页面结构。包含三个抽屉组件（Drawer），分别用于绑定邮箱、修改乐队成员信息和修改个人信息。用户需要输入相关信息并选择邮箱后缀，点击按钮后会触发相应的编辑方法。同时，每个输入框后面都有一个修改按钮。需要注意的是，这段代码中还包含了一些变量和方法的定义，例如emailPre、emailSuf、bindEmailReq、btnText、disabled、genderOptions、onBindEmailSubmit、onBindEmailCancel、onMemberEditSubmit、onMemberEditCancel、onFanEditSubmit 和 onFanEditCancel。这些变量和方法的具体实现没有给出，需要在其他地方定义。
>   >
>   > - UserLoginView.vue
>   >
>   >   > 这是一个使用Vue.js和Element UI库编写的登录页面模板。它包含一个自定义容器，其中有一个登录表单，用户可以选择账号登录、邮箱登录或验证码登录。根据选择的登录方式，用户可以输入相应的信息进行登录。
>   >
>   > - UserRegisterView.vue
>   >
>   >   > 这是一个使用Vue.js和Element UI库编写的注册页面模板。它包含一个自定义容器，其中有一个注册表单，用户可以选择账号注册、邮箱注册或验证码注册。根据选择的注册方式，用户可以输入相应的信息进行注册。
>
> - IndexView.vue:
>
>   > 用于展示热门专辑。它包含一个轮播图组件（el-carousel），用于展示专辑信息。
>   >
>   > 1. 使用`<div>`标签包裹整个页面内容。
>   > 2. 在`<h2>`标签中添加类名"page-title"，并设置文本内容为"Top Albums"。
>   > 3. 使用`v-if`指令判断topAlbums数组的长度是否大于0，如果大于0，则显示轮播图组件（el-carousel）。
>   > 4. 设置轮播图组件的属性：interval为4000毫秒，type为"card"，高度为350px。
>   > 5. 使用`v-for`指令遍历topAlbums数组，为每个专辑创建一个轮播图项（el-carousel-item）。
>   > 6. 在轮播图项中，使用`<div>`标签包裹轮播图的内容。
>   > 7. 使用`<el-row>`和`<el-col>`组件创建布局，设置行间距为20像素，列宽分别为8和6。
>   > 8. 在第一个`<el-col>`中，使用`<el-tag>`组件显示专辑的排名。
>   > 9. 在第二个`<el-col>`中，使用`<el-button>`组件创建一个按钮，点击后跳转到专辑详情页面。按钮上显示"details"文字，图标为TopRight。
>   > 10. 使用`<el-divider>`组件添加分隔线。
>   > 11. 使用`<div>`标签包裹专辑的详细信息，包括专辑名称、乐队名称和平均评分。
>   > 12. 如果topAlbums数组的长度不大于0，则显示一个加载动画（el-skeleton）。

### app

> 功能是根据当前路由的路径，动态地切换页面的布局。如果当前路由的路径以`/login`或`/register`开头，则渲染`UserLayout`组件；否则，渲染`BasicLayout`组件。