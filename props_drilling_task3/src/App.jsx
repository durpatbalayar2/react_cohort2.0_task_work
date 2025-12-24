import Card from "./components/Card";

const App = () => {
  let users = [
    {
      id: 1,
      name: "Aarav Sharma",
      description: "Frontend developer | React enthusiast",
      likesCount: 1240,
      postsCount: 56,
      viewsCount: 18900,
      isFollowing: true,
      profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
      coverImage:
        "https://images.unsplash.com/photo-1503264116251-35a269479413",
    },
    {
      id: 2,
      name: "Priya Verma",
      description: "UI/UX designer | Creative thinker",
      likesCount: 980,
      postsCount: 42,
      viewsCount: 14200,
      isFollowing: false,
      profileImage: "https://randomuser.me/api/portraits/women/21.jpg",
      coverImage:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      id: 3,
      name: "Rohit Mehta",
      description: "Full-stack developer | MERN",
      likesCount: 1560,
      postsCount: 78,
      viewsCount: 25600,
      isFollowing: true,
      profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
      coverImage:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 4,
      name: "Sneha Patel",
      description: "Tech blogger | JavaScript lover",
      likesCount: 870,
      postsCount: 39,
      viewsCount: 11800,
      isFollowing: false,
      profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
      coverImage:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    },
    {
      id: 5,
      name: "Kunal Singh",
      description: "Backend developer | Node & Express",
      likesCount: 1340,
      postsCount: 61,
      viewsCount: 20300,
      isFollowing: true,
      profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
      coverImage:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
    },
    {
      id: 6,
      name: "Ananya Roy",
      description: "Content creator | Tech & lifestyle",
      likesCount: 2100,
      postsCount: 92,
      viewsCount: 34500,
      isFollowing: false,
      profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
      coverImage:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    },
    {
      id: 7,
      name: "Vikas Yadav",
      description: "Software engineer | Problem solver",
      likesCount: 760,
      postsCount: 28,
      viewsCount: 9600,
      isFollowing: true,
      profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
      coverImage:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      id: 8,
      name: "Neha Kapoor",
      description: "Product designer | Minimal UI",
      likesCount: 1890,
      postsCount: 67,
      viewsCount: 27800,
      isFollowing: false,
      profileImage: "https://randomuser.me/api/portraits/women/82.jpg",
      coverImage:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    },
    {
      id: 9,
      name: "Aditya Joshi",
      description: "Android developer | Kotlin",
      likesCount: 640,
      postsCount: 23,
      viewsCount: 8200,
      isFollowing: true,
      profileImage: "https://randomuser.me/api/portraits/men/88.jpg",
      coverImage:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      id: 10,
      name: "Pooja Nair",
      description: "Tech educator | Simplifying code",
      likesCount: 2750,
      postsCount: 104,
      viewsCount: 41200,
      isFollowing: false,
      profileImage: "https://randomuser.me/api/portraits/women/95.jpg",
      coverImage:
        "https://images.unsplash.com/photo-1484417894907-623942c8ee29",
    },
  ];
  return (
    <div className=" flex flex-wrap shrink-0 items-center justify-center gap-5  bg-blue-300   px-10 py-10 ">
      {users.map(function (elem) {
        return <Card profileImg ={elem.profileImage} coverImg={elem.coverImage} name={elem.name} desc={elem.description} like={elem.likesCount} post ={elem.postsCount} view ={elem.viewsCount} isfollow = {elem.isFollowing} />;
      })}
    </div>
  );
};

export default App;
