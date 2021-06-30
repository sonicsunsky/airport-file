import dayjs from "dayjs";

const files = [
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-74003dee-fc32-4213-84d5-a66438daaefb/1211887c-5741-421d-941e-09a02f4a4147.docx",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-74003dee-fc32-4213-84d5-a66438daaefb/61d53d29-6548-4f4d-849c-65cf9c8dae1d.pdf",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-74003dee-fc32-4213-84d5-a66438daaefb/5dbac6ac-38b4-4056-846d-7fe5a1e4fec0.pdf",
  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-74003dee-fc32-4213-84d5-a66438daaefb/3032f6b8-6f4f-4a8e-84d9-1161e6d1408d.xlsx",
];

export const createTableData = (size) => {
  return new Array(size).fill("").map((item, index) => {
    return {
      id: index + 1,
      role: Math.random() > 0.5 ? "admin" : "visitor",
      name: `机场文件${index + 1}`,
      status: Math.random() > 0.5 ? "read" : "unread",
      date: dayjs().format("YYYY-MM-DD HH:mm:ss"), //YYYY-MM-DD HH:mm:ss
      mime: `application/pdf`,
      download_url: files[index % 4],
      href: files[index % 4],
    };
  });
};

export const treeData = [
  {
    label: "文件一级 1",
    children: [
      {
        label: "文件二级 1-1",
        children: [
          {
            label: "文件三级 1-1-1",
          },
        ],
      },
    ],
  },
  {
    label: "文件一级 2",
    children: [
      {
        label: "文件二级 2-1",
        children: [
          {
            label: "文件三级 2-1-1",
          },
        ],
      },
      {
        label: "文件二级 2-2",
        children: [
          {
            label: "文件三级 2-2-1",
          },
        ],
      },
    ],
  },
  {
    label: "文件一级 3",
    children: [
      {
        label: "文件二级 3-1",
        children: [
          {
            label: "文件三级 3-1-1",
          },
        ],
      },
      {
        label: "文件二级 3-2",
        children: [
          {
            label: "文件三级 3-2-1",
          },
        ],
      },
    ],
  },
];
