import { FC, useEffect, useState } from 'react';


type Props = {
    itemsPerPage: number
    totalItems: number
    paginate: (value: number) => void
  }
  
const usePagination: FC<Props> = ({totalItems, itemsPerPage}) => {
  const [pageNumbers, setPageNumbers] = useState<number[] | undefined>([]);

  useEffect(() => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const numbers = [];

    for (let i = 1; i <= totalPages; i++) {
      numbers.push(i);
    }

    setPageNumbers(numbers);
  }, [totalItems, itemsPerPage]);

  return pageNumbers;
};

export default usePagination;