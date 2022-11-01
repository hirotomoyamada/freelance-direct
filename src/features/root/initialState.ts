import { Data } from 'types/user';

export interface State {
  index: 'matters' | 'companys' | 'enable' | 'hold' | 'disable';

  page: string;

  menu: { display: boolean; control: boolean };

  search: {
    value: string | null;
    target: string | null;
    type: string | null;
    control: boolean;
  };

  modal: {
    type: string | null;
    open: boolean;
    text?: string;
    delete?: () => void;
    close?: () => void;
  };

  announce: {
    success?: string;
    error?: string;
  };

  data: Data | null;

  verified: {
    index: boolean;
    email: boolean;
    profile: boolean;
    agree: boolean;
    status: string | null;
    access: boolean;
    demo: boolean;
    error: string | null;
  };

  load: {
    root: boolean;
    pend: boolean;
    list: boolean;
    fetch: boolean;
  };

  notFound: boolean;

  ver: string;
}

export const initialState: State = {
  index: 'matters',

  page: 'home',

  menu: { display: false, control: false },

  search: {
    value: null,
    target: null,
    type: null,
    control: false,
  },

  modal: {
    type: null,
    open: false,
  },

  announce: {
    success: undefined,
    error: undefined,
  },

  data: null,

  verified: {
    index: false,
    email: false,
    profile: false,
    agree: false,
    status: null,
    access: true,
    demo: false,
    error: null,
  },

  load: {
    root: true,
    pend: false,
    list: false,
    fetch: false,
  },

  notFound: false,

  ver: '1.3.1',
};
