/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import Home from "../app/page";
import { PriorityTypes } from "../types/priority.interface";
import { filterByText, orderBy } from "@/utils/utils";
import { Post } from "@/types/post.interface";
import React from "react";
import PostCard from "@/components/PostCard";

describe("Home", () => {
  it("should render a main element with the correct class name", async () => {
    const { container } = await act(() => render(<Home />));
    const mainElement = container.querySelector("main");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveClass("flex justify-center");
  });
});

const list = [
  {
    url: "",
    category: "",
    author: "a",
    comments: "4",
    likes: "3",
    created_at: "1712529923000",
    url_photo: "",
    title: "",
  },
  {
    url: "",
    category: "",
    author: "b",
    comments: "5",
    likes: "2",
    created_at: "1712529913000",
    url_photo: "",
    title: "",
  },
  {
    url: "",
    category: "",
    author: "c",
    comments: "6",
    likes: "1",
    created_at: "1712529723000",
    url_photo: "",
    title: "",
  },
];
describe("filterByText function'", () => {
  it("should return the original list when term is empty", () => {
    const result = filterByText(list, "");
    expect(result).toEqual(list);
  });

  it("should filter the list based on the search term", () => {
    const searchTerm = "a";
    const filteredList = filterByText(list, searchTerm);
    expect(filteredList).toEqual([list[0]]);
  });

  it("should return an empty array when no matching items are found", () => {
    const searchTerm = "Nonexistent";
    const filteredList = filterByText(list, searchTerm);
    expect(filteredList).toEqual([]);
  });
});

describe("orderBy function", () => {
  it("should return an empty array given an empty list of posts", () => {
    const posts: Post[] = [];
    const priority = PriorityTypes.LIKES_ASC;
    const orderedList = orderBy(posts, priority);
    expect(orderedList).toEqual([]);
  });
  it("should return an array sorted by likes in ascending order given a list of items", () => {
    const priority = PriorityTypes.LIKES_ASC;
    const orderedList = orderBy(list, priority);
    expect(orderedList).toEqual(list.reverse());
  });
  it("should return an array sorted by likes in descending order given a list of items", () => {
    const priority = PriorityTypes.LIKES_DESC;
    const orderedList = orderBy(list, priority);
    expect(orderedList).toEqual(list);
  });

  it("should return an array sorted by comments in ascending order given a list of items", () => {
    const priority = PriorityTypes.COMMENT_ASC;
    const orderedList = orderBy(list, priority);
    expect(orderedList).toEqual(list);
  });

  it("should return an array sorted by comments in descending order given a list of items", () => {
    const priority = PriorityTypes.COMMENT_DESC;
    const orderedList = orderBy(list, priority);
    expect(orderedList).toEqual(list.reverse());
  });

  it("should return an array sorted by comments in ascending order given a list of items", () => {
    const priority = PriorityTypes.DATE_ASC;
    const orderedList = orderBy(list, priority);
    expect(orderedList).toEqual(list.reverse());
  });
  it("should return an array sorted by comments in descending order given a list of items", () => {
    const priority = PriorityTypes.DATE_DESC;
    const orderedList = orderBy(list, priority);
    expect(orderedList).toEqual(list);
  });
});

describe("PageCard", () => {
  it("should render the post card with correct information when all data is provided", () => {
    const post = {
      url: "insideintercom.io",
      category: "Opinion",
      author: "Sacha Greif",
      comments: "1611529923001",
      likes: "4",
      created_at: "1611529923000",
      url_photo:
        "https://img.freepik.com/fotos-gratis/retrato-de-homem-feliz-e-sorridente_23-2149022620.jpg?w=1480&t=st=1713829202~exp=1713829802~hmac=223edd1cd18dda2ad692f415daf03a5ffa5afa18b46ccf446772392e6fb09893",
      title: "Some things can't be wireframed",
    };

    render(<PostCard post={post} />);

    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByText(post.author)).toBeInTheDocument();
    expect(screen.getByText(post.category)).toBeInTheDocument();
    expect(screen.getByText(post.likes)).toBeInTheDocument();
  });
});
