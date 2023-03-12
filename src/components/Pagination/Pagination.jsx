import scss from './Pagination.module.scss';
import { GrPrevious, GrNext } from 'react-icons/gr';

export const Pagination = ({ searcInfo, loadLess, loadMore, page }) => {
  return (
    <div className={scss.pagination__wrapper}>
      {searcInfo.prev && (
        <button onClick={loadLess}>
          <GrPrevious />
        </button>
      )}
      {(searcInfo.prev || searcInfo.next) && (
        <span>
          {page}/{searcInfo.pages}
        </span>
      )}
      {searcInfo.next && (
        <button onClick={loadMore}>
          <GrNext />
        </button>
      )}
    </div>
  );
};