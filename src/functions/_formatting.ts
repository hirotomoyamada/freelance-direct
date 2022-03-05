import { Data } from "components/modal/components/profile/Profile";
import * as functions from "functions";

import { Matter } from "types/post";

export const entry = ({ post }: { post: Matter }): string => {
  const value = {
    createAt: `作成：${functions.root.timestamp(post?.createAt)}\n`,
    title: `■ ${post.title ? post.title : "不明な案件"}\n`,
    positon: `${post?.position}\n`,
    period: `開始：${
      post.period && `${post?.period?.year}年 ${post?.period?.month}月`
    }`,
    location: `場所：${post?.location?.area} ${post?.location?.place}`,
    remote: `遠隔：${post?.remote}\n`,
    times: `時間：${
      post.times && `${post?.times?.start} 〜 ${post?.times?.end}`
    }`,
    adjustment: `精算：${post?.adjustment}\n`,
    costs: `単価：${
      post?.costs?.display !== "public"
        ? post?.costs?.type
        : post?.costs?.min
        ? `${post?.costs?.min}万 〜 ${post?.costs?.max}万`
        : `〜 ${post?.costs?.max}万`
    }\n`,
    distribution: `商流：${post?.distribution}`,
    interviews: `面談：${
      post?.interviews && `${post?.interviews?.type} ${post?.interviews?.count}`
    }`,
  };
  return `${value.createAt}\n${value.title}\n${value.positon}\n${value.period}\n${value.location}\n${value.remote}\n${value.times}\n${value.adjustment}\n${value.costs}\n${value.distribution}\n${value.interviews}`;
};

export const profile = (
  data: Data
): {
  icon: string;
  cover: string;

  nickName: string;
  body: string | null;
  age: number;
  sex: string;
  position: string;
  location: string;
  period: {
    year: number | null;
    month: number | null;
  };

  handles: string[];
  tools: string[];
  skills: string[];
  urls: string[];

  resident: string | null;
  working: number | null;
  clothes: string | null;
  costs: {
    min: number | null;
    max: number | null;
    display: "public" | "private";
    type: string;
  };
} => {
  return {
    icon: data.icon,
    cover: data.cover,

    nickName: data.nickName,
    body: data.body,
    age: Number(data.age),
    sex: data.sex,
    position: data.position,
    location: data.location,
    period: {
      year: Number(data.period.year),
      month: Number(data.period.month),
    },

    handles: data.handles
      .filter((array) => array.handle)
      .map((array) => array.handle),
    tools: data.tools.filter((array) => array.tool).map((array) => array.tool),
    skills: data.skills
      .filter((array) => array.skill)
      .map((array) => array.skill),
    urls: data.urls.filter((array) => array.url).map((array) => array.url),

    resident: data.resident,
    working: Number(data.working),
    clothes: data.clothes,
    costs: {
      min: Number(data.costs.min),
      max: Number(data.costs.max),
      display: data.costs.display,
      type: data.costs.type,
    },
  };
};
