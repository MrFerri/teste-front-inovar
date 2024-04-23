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
    created_at: "",
    url_photo: "",
    title: "",
  },
  {
    url: "",
    category: "",
    author: "b",
    comments: "5",
    likes: "2",
    created_at: "",
    url_photo: "",
    title: "",
  },
  {
    url: "",
    category: "",
    author: "c",
    comments: "6",
    likes: "1",
    created_at: "",
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
  it("should return an array sorted by comments in descending order given a list of items", () => {
    const priority = PriorityTypes.COMMENT_DESC;
    const orderedList = orderBy(list, priority);
    expect(orderedList).toEqual(list.reverse());
  });
  

  
});
