import {
  Container,
  title,
  subTitle,
  subTitleBox,
  communityBox,
  postBox,
  moreButton,
} from "./index.css.ts";
import Post from "./post";

const Community = () => {
  return (
    <div className={Container}>
      <div className={communityBox}>
        <div>
          <p className={title}>커뮤니티</p>
          <div className={subTitleBox}>
            <p className={subTitle}>새 소식 알아보기</p>
            <div>
              <button className={moreButton}>더 읽기</button>
            </div>
          </div>
        </div>
        <div className={postBox}>
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default Community;
