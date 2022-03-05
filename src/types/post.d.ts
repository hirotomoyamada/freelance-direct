export interface Matter {
  objectID: string;
  title: string;
  position: string;
  body: string;
  location: {
    area: string;
    place: string;
  };
  period: {
    year: number;
    month: number;
  };
  costs: {
    display: "public" | "private";
    type: string;
    min?: number;
    max?: number;
    contract?: number;
  };
  adjustment: string;
  times: {
    start: string;
    end: string;
  };
  handles: string[];
  tools: string[];
  requires: string[];
  prefers: string[];
  interviews: {
    type: string;
    count: string;
  };
  remote: string;
  distribution: string;
  span: string;
  note: string;
  uid: string;
  createAt: number;
  updateAt?: number;
  status?: string;
  display?: "public" | "private";
  memo?: string;
  approval?: string;
  user?: {
    uid: string;
    type?: string;
    profile: {
      name: string;
      person: string;
      email: string;
      social: {
        line: string;
        twitter: string;
        instagram: string;
        linkedIn: string;
      };
    };
    payment: {
      status: string;
    };
  };
}

export interface Company {
  uid: string;
  icon: string;
  cover: string;
  type: string;
  payment: { status: string };
  profile: {
    name: string;
    person: string | null;
    body: string | null;
    postal: string | null;
    address: string | null;
    tel: string | null;
    email: string | null;
    more: string[] | null;
    region: string[] | null;
    url: string | null;
    social?: {
      twitter: string | null;
      instagram: string | null;
      line: string | null;
      linkedIn: string | null;
    };
  };
  createAt: number;

  status?: string | null;
}