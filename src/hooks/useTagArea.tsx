import { useEffect, useState } from 'react';
import { ActType, PartType, SortType } from '../apis/post';

export const useTagArea = () => {
  const [type, setType] = useState<PartType[] | []>([]);
  const [act, setAct] = useState<ActType[] | []>([]);
  const [sort, setSort] = useState<boolean>(true);

  /**
   * 타입 가드
   */
  const isType = (arg: PartType | ActType): arg is PartType => {
    if (arg === 'plan') return true;
    else if (arg === 'dev') return true;
    else if (arg === 'design') return true;
    else return false;
  };

  const isAct = (arg: PartType | ActType): arg is ActType => {
    if (arg === 'society') return true;
    else if (arg === 'project') return true;
    else if (arg === 'intern') return true;
    else return false;
  };

  const handleTagClick = (e: any) => {
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
