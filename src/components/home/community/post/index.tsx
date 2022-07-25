import {
  category,
  title,
  date,
  imageBox,
  horizontalLine,
  socialBox,
} from "./index.css.ts";

const Post = () => {
  return (
    <div>
      <div className={imageBox}>card</div>
      <div>
        <p className={category}>GAME JAMS</p>
        <p className={title}>TOWER Game Jam</p>
        <p className={date}>Jul 23, 2022 - 4 min read</p>
      </div>
      <div className={horizontalLine} />
      <div className={socialBox}>
        <div>T</div>
        <div>F</div>
        <div>T</div>
      </div>
    </div>
  );
};

export default Post;
