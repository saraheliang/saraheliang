import { render, screen } from "@testing-library/react";

function PostCard(props) {
  return (
    <div data-testid={`post-${props.post.id}`} className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.post.title}</h5>
        <p className="card-text">{props.post.description}</p>
      </div>
    </div>
  );
}

describe("render posts", () => {
  const posts = [
    { id: 1, title: "Post 1", description: "Content 1" },
    { id: 2, title: "Post 2", description: "Content 2" },
  ];

  it("renders a list of PostCards", () => {
    render(posts.map((post) => <PostCard key={post.id} post={post} />));

    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Post 2")).toBeInTheDocument();
  });

  it("renders the correct number of PostCards", () => {
    render(posts.map((post) => <PostCard key={post.id} post={post} />));

    // Check number of PostCards rendered
    posts.forEach((post) => {
      expect(screen.getByTestId(`post-${post.id}`)).toBeInTheDocument();
    });
  });

  it("renders the correct info in the PostCards", () => {
    render(posts.map((post) => <PostCard key={post.id} post={post} />));

    // Check correct info of PostCards
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.getByText("Post 1")).toBeInTheDocument();
  });
});
