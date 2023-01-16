import styles from './Profile.module.scss';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

import { Header } from './components/header/Header';
import { Cover } from './components/cover/Cover';
import { Icon } from './components/icon/Icon';
import { Form } from './components/form/Form';

import * as functions from 'functions';
import { User } from 'types/user';
import { editProfile } from 'features/user/actions';
import { Grid } from 'react-loader-spinner';
import * as rootSlice from 'features/root/rootSlice';

interface PropType {
  user: User;
  handleClose: () => void;
}

export type Data = {
  icon: string;
  cover: string;
  name: string;
  email: string;

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

  handles: { handle: string }[];
  tools: { tool: string }[];
  skills: { skill: string }[];
  urls: { url: string }[];

  resident: string | null;
  working: number | null;
  clothes: string | null;
  costs: {
    min: number | null;
    max: number | null;
    display: 'public' | 'private';
    type: string;
  };
};

const positions = [
  'フロントエンドエンジニア',
  'バックエンドエンジニア',
  'サーバーエンジニア',
  'ブロックチェーンエンジニア',
  'インフラエンジニア',
  'データベースエンジニア',
  'クラウドエンジニア',
  'ネットワークエンジニア',
  'セキュリティエンジニア',
  'リードエンジニア',
  'システムエンジニア',
  '社内SE',
  'アプリエンジニア',
  'iOSエンジニア',
  'Androidエンジニア',
  '機械学習エンジニア',
  'AIエンジニア(人工知能)',
  '汎用機エンジニア',
  'マークアップエンジニア',
  'テストエンジニア',
  'テスター・デバッガー・QA',
  '組み込み・制御',
  'データサイエンティスト',
  'PdM',
  'PM/PL',
  'PMO',
  'VPoE',
  'CRE',
  'SRE',
  'エンジニアリングマネージャー',
  'SAP',
  'プロデューサー',
  'コンサルタント',
  'マーケター',
  'Webディレクター',
  'Webプランナー',
  'Webデザイナー',
  'UI・UXデザイナー',
  'グラフィックデザイナー',
  '3Dデザイナー',
  '2Dデザイナー',
  'キャラクターデザイナー',
  'イラストレーター',
  'アートディレクター',
  'ゲームプランナー',
  'ゲームデザイナー',
  'サポート',
  'その他',
];

export const Profile: React.FC<PropType> = ({ user, handleClose }) => {
  const dispatch = useDispatch();
  const fetch = useSelector(rootSlice.load).fetch;
  const [cover, setCover] = useState(false);
  const [icon, setIcon] = useState(false);

  const methods = useForm<Data>({
    defaultValues: {
      icon: user?.icon,
      cover: user?.cover,
      name: user?.profile?.name,
      email: user?.profile?.email,
      nickName: user?.profile?.nickName ? user.profile.nickName : undefined,
      body: user?.profile?.body,
      age: user?.profile?.age,
      sex: user?.profile?.sex,
      position: positions.includes(user?.profile?.position)
        ? user?.profile?.position
        : undefined,
      location: user?.profile?.location,
      period: {
        year: user?.profile?.period?.year
          ? user?.profile?.period?.year
          : new Date().getFullYear(),
        month: user?.profile?.period?.month
          ? user?.profile?.period.month
          : new Date().getMonth() + 1,
      },

      handles: user?.profile?.handles?.[0]
        ? user?.profile?.handles.map((value) => ({
            handle: value,
          }))
        : [
            { handle: undefined },
            { handle: undefined },
            { handle: undefined },
            { handle: undefined },
          ],
      tools: user?.profile?.tools?.[0]
        ? user?.profile?.tools.map((value) => ({
            tool: value,
          }))
        : [
            { tool: undefined },
            { tool: undefined },
            { tool: undefined },
            { tool: undefined },
          ],
      skills: user?.profile?.skills?.[0]
        ? user?.profile?.skills.map((value) => ({
            skill: value,
          }))
        : [{ skill: undefined }, { skill: undefined }, { skill: undefined }],
      urls: user?.profile?.urls?.[0]
        ? user?.profile?.urls.map((value) => ({
            url: value,
          }))
        : [{ url: undefined }],

      resident: user?.profile?.resident ? user?.profile?.resident : '常駐可',
      working: user?.profile?.working ? user?.profile?.working : 3,
      clothes: user?.profile?.clothes ? user?.profile?.clothes : 'カジュアル',
      costs: {
        min: user?.profile?.costs.min ? user?.profile?.costs.min : null,
        max: user?.profile?.costs.max ? user?.profile?.costs.max : null,
        display: user?.profile?.costs.display
          ? user?.profile?.costs.display
          : 'private',
        type: user?.profile?.costs.type ? user?.profile?.costs.type : '応談',
      },
    },
  });

  const handleBack = () => {
    setCover(false);
    setIcon(false);
  };

  const handleEdit: SubmitHandler<Data> = (data) => {
    const profile = {
      ...{ uid: user.uid },
      ...functions.formatting.profile(data),
    };

    dispatch(editProfile(profile));
  };

  return (
    <FormProvider {...methods}>
      <form
        className={styles.profile}
        onSubmit={methods.handleSubmit(handleEdit)}>
        <Header
          user={user}
          fetch={fetch}
          handleClose={handleClose}
          handleBack={handleBack}
          cover={cover}
          icon={icon}
        />

        {(() => {
          switch (true) {
            case cover:
              return <Cover />;

            case icon:
              return <Icon />;

            default:
              return (
                <Form
                  cover={cover}
                  icon={icon}
                  setCover={setCover}
                  setIcon={setIcon}
                />
              );
          }
        })()}

        {fetch && (
          <div className={styles.profile_fetch}>
            <Grid color="#1d9bf0" height={56} width={56} />
          </div>
        )}
      </form>
    </FormProvider>
  );
};
