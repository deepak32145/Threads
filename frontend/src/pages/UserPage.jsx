import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <div>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={200}
        postImg="/post1.png"
        postTitle="learn and build."
      />
      <UserPost
        likes={120}
        replies={20}
        postImg="/post2.png"
        postTitle="learn and build."
      />
      <UserPost
        likes={12000}
        replies={2000}
        postImg="/post3.png"
        postTitle="learn and build."
      />
      <UserPost
        likes={400}
        replies={500}
        postImg="/post1.png"
        postTitle="learn and build."
      />
    </div>
  );
};

export default UserPage;
