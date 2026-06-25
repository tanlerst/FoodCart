/* Pagination component with next and previous buttons for admin pages */

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

// export default function Pagination({ 
//     currentPage, 
//     totalPages, 
//     onPageChange 
// }: PaginationProps) {

//     return (

//     );
// }