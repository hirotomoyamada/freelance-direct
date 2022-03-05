export interface User {
  uid: string;
  icon: string;
  cover: string;
  provider: string[];
  status: string;
  agree: string;
  profile: {
    nickName: string | null;
    name: string;
    state: string;
    position: string;
    body: string | null;
    age: number;
    sex: string;
    email: string;
    location: string;
    period: {
      year: number | null;
      month: number | null;
    };
    costs: {
      display: "public" | "private";
      type: string;
      min: number | null;
      max: number | null;
    };
    handles: string[];
    tools: string[];
    skills: string[];
    urls: string[];
    clothes: string | null;
    working: number | null;
    resident: string | null;
  };
  likes: string[];
  entries: string[];
  histories: string[];
  follows: string[];
  requests: {
    enable: string[];
    hold: string[];
    disable: string[];
  };
  home: string[];
  resume: {
    key: string | null;
    url: string | null;
  };
  createAt: number;
  updateAt?: number;
}

export interface Data {
  agree: {
    body: string;
    status: string;
    title: string;
    updateAt: number;
  };

  information: {
    body: string;
    title: string;
    updateAt: number;
  };

  mail: {
    body: string;
    index: string;
    target: string;
    title: string;
    updateAt: number;
  };

  maintenance: {
    status: string;
    updateAt: number;
  };
}
