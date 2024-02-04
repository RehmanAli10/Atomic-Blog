import { faker } from "@faker-js/faker";
import { createContext, useContext, useMemo, useState } from "react";
import { useSearch } from "./SearchContext";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

const PostsContext = createContext();

function PostsProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );

  const { searchQuery, setSearchQuery } = useSearch();

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  const value = useMemo(
    function () {
      return {
        posts: searchedPosts,
        onClearPosts: handleClearPosts,
        onAddPost: handleAddPost,
      };
    },
    [searchedPosts, searchQuery]
  );

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
}

function usePost() {
  const posts = useContext(PostsContext);
  if (posts === undefined)
    throw new Error("The usePost is not within the PostProvider");
  return posts;
}

export { usePost, PostsProvider };
