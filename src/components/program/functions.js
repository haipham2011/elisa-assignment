import { useState } from 'react';

export const roundNumber = (nominator, denomminator) => {
    if (nominator % denomminator !== 0) {
      return Math.floor(nominator / denomminator) + 1;
    } else {
      return Math.floor(nominator / denomminator);
    }
};

export const usePage = (maxNumberOfPage, totalPage) => {
    const [page, setPage] = useState(1);
    const [bound, setBound] = useState([1, maxNumberOfPage]);

    const pageBoundCal = pageInput => {
        const pos = roundNumber(pageInput, maxNumberOfPage);
        const min = maxNumberOfPage * (pos - 1) + 1;
        const max =
          min + maxNumberOfPage - 1 > totalPage
            ? totalPage
            : min + maxNumberOfPage - 1;
        setPage(pageInput);
        setBound([min, max]);
      };

    return {page, bound, pageBoundCal}
}