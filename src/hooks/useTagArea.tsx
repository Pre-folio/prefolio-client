import { useState } from 'react';
import { ActType, PartType, SortType } from '../apis/post';

export const useTagArea = () => {
  const [type, setType] = useState<PartType[] | []>([] as any);
  const [act, setAct] = useState<ActType[] | []>([] as any);
  const [sort, setSort] = useState<boolean>(true);

  //   const CARD_FIELD = {
  //     기획: 'PLAN',
  //     개발: 'DEV',
  //       디자인: 'DESIGN',
  //     동아리/학회: 'SOCIETY',
  //   };

  /**
   * 타입 가드
   */
  const isType = (arg: any): arg is PartType => {
    return arg !== undefined;
  };

  const isAct = (arg: any): arg is ActType => {
    return arg !== undefined;
  };

  const handleTagClick = (e: any) => {
    console.log('dd', e.target.id);
    const tag = e.target.id as PartType | ActType;
    if (isType(tag)) {
      if (type.find((v) => v === tag)) {
        setType(
          type.filter((v) => {
            return v !== tag;
          })
        );
      } else {
        setType([...type, tag]);
      }
    } else if (isAct(tag)) {
      if (act.find((v) => v === tag)) {
        setAct(
          act.filter((v) => {
            return v !== tag;
          })
        );
      } else {
        setAct([...act, tag]);
      }
    }
  };

  const handleTabClick = (e: any) => {
    console.log(e.target.parentNode.id);
    setSort(e.target.parentNode.id === 'new' ? true : false);
  };

  return {
    type,
    setType,
    act,
    setAct,
    sort,
    setSort,
    handleTagClick,
    handleTabClick,
  };
};
