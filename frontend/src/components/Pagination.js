import React from "react";
import {Link} from "react-router-dom";

function Pagination({pages, currentPage, setCurrentPage}) {
  const pagesArray = [];

  for (let i = 1; i <= pages; i++) {
    pagesArray.push(i);
    console.log(i);
  }

  const handleClick = (page) => {
    setCurrentPage(page);
  }

  const pagePrev = () => {
    if (currentPage >= 1) {
      setCurrentPage(prev => {
        return prev - 1;
      })
    } else {
      setCurrentPage(1);
    }
  }

  const pageNext = () => {
    if (currentPage <= pages) {
      setCurrentPage(prev => {
        return prev + 1;
      })
    }
  }

  return (
    <div className="pagination-container">
      <nav className="navigation">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link prev" onClick={pagePrev}>
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {pagesArray.length > 0 &&
            pagesArray.map((page) => (
              <li className="page-item">
                <a onClick={() => handleClick(page)} className={`page-link ${currentPage == page && 'page-bg'}`}>
                  {page}
                </a>
              </li>
            ))}

          <li className="page-item">
            <a className="page-link next" onClick={pageNext}>
  
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
