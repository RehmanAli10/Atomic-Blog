import { faker } from "@faker-js/faker";
import "./App.css";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function App() {
  return (
    <section>
      <button className="btn-fake-dark-mode">🌙</button>
      <Header />
      <Form />
    </section>
  );
}

function Header() {
  return (
    <header>
      <h1>
        <span>⚛</span> The Atomic Blog
      </h1>
      <div>
        <PostsFound />
        <SearchPosts />
        <button>Clear posts</button>
      </div>
    </header>
  );
}

function PostsFound() {
  return (
    <h3>
      <p>🚀 30 atomic posts found</p>
    </h3>
  );
}

function SearchPosts() {
  return <input />;
}

function Main() {
  return <FormAddPost />;
}

function FormAddPost() {
  return (
    <form>
      <input />
      <textarea />
      <button>Add Post</button>
    </form>
  );
}

export default App;
