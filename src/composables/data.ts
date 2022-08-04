let data = [
  {
    content: "lorem ipsum dolor sit amet",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "Go and catch it",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "So what do you want to do",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "This is a great place to look",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "have you ever seen this placeholder before",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "Do you want to seen",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "lorem ipsum dolor sit amet",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "Go and catch it",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "So what do you want to do",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "This is a great place to look",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "have you ever seen this placeholder before",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "Do you want to seen",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "lorem ipsum dolor sit amet",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "Go and catch it",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "So what do you want to do",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "This is a great place to look",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "have you ever seen this placeholder before",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "Do you want to seen",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "lorem ipsum dolor sit amet",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "Go and catch it",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "So what do you want to do",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "This is a great place to look",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "have you ever seen this placeholder before",
    des: {
      color: "",
      tag: "",
    },
  },
  {
    content: "Do you want to seen",
    des: {
      color: "",
      tag: "",
    },
  },
];

export interface Tag {
  tag: string;
  color: string;
}

export const randomData = function (tags: Tag[]) {
  let n = tags.length;
  data.forEach((item) => {
    const random = Math.floor(Math.random() * n);
    item.des = tags[random];
  });
  return data;
};
