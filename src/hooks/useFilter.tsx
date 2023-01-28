import { useRecoilState } from 'recoil';
import { selectedActTagListState, selectedPartTagListState } from '../store/TagArea/tagAreaState';

export function useFilter() {
  const [selectedPartTagList, setSelectedPartTagList] = useRecoilState(selectedPartTagListState);
  const [selectedActTagList, setSelectedActTagList] = useRecoilState(selectedActTagListState);
  return { selectedActTagList: selectedActTagList, selectedPartTagList: selectedPartTagList };
}
