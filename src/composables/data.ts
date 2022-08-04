let data = [
  {
    content: "lorem ipsum dolor sit amet",
    des: {},
  },
  {
    content: "Go and catch it",
    des: {},
  },
  {
    content: "So what do you want to do",
    des: {},
  },
  {
    content: "This is a great place to look",
    des: {},
  },
  {
    content: "have you ever seen this placeholder before",
    des: {},
  },
  {
    content: "Do you want to seen",
    des: {},
  },
  {
    content: "lorem ipsum dolor sit amet",
    des: {},
  },
  {
    content: "Go and catch it",
    des: {},
  },
  {
    content: "So what do you want to do",
    des: {},
  },
  {
    content: "This is a great place to look",
    des: {},
  },
  {
    content: "have you ever seen this placeholder before",
    des: {},
  },
  {
    content: "Do you want to seen",
    des: {},
  },
  {
    content: "lorem ipsum dolor sit amet",
    des: {},
  },
  {
    content: "Go and catch it",
    des: {},
  },
  {
    content: "So what do you want to do",
    des: {},
  },
  {
    content: "This is a great place to look",
    des: {},
  },
  {
    content: "have you ever seen this placeholder before",
    des: {},
  },
  {
    content: "Do you want to seen",
    des: {},
  },
  {
    content: "lorem ipsum dolor sit amet",
    des: {},
  },
  {
    content: "Go and catch it",
    des: {},
  },
  {
    content: "So what do you want to do",
    des: {},
  },
  {
    content: "This is a great place to look",
    des: {},
  },
  {
    content: "have you ever seen this placeholder before",
    des: {},
  },
  {
    content: "Do you want to seen",
    des: {},
  },
];

export interface Tag {
  tag: string;
  color: string;
}

export const randomData = function (tags: Tag[]) {
  let n = tags.length;
  data.forEach((item) => {
    item.des = Math.floor(Math.random() * n);
  });
  return data;
};
