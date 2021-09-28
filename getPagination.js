const getPagination = (offset, limit, total) => {
  const totalPage = Math.ceil(total / limit);
  const currentPage = offset / limit + 1;

  let renderPages = [currentPage];
  let currentRenderPagesLen = renderPages.length;
  while (currentRenderPagesLen < 5) {
    const pushPage = renderPages[currentRenderPagesLen - 1] + 1;
    const unShiftPage = renderPages[0] - 1;

    if (unShiftPage >= 1) renderPages.unshift(unShiftPage);
    if (pushPage <= totalPage) renderPages.push(pushPage)

    currentRenderPagesLen = renderPages.length;
  }

  return { currentPage, totalPage, renderPages: currentRenderPagesLen > limit ? renderPages.slice(0, -1) : renderPages }
};

console.log(getPagination(0, 5, 33))
console.log(getPagination(5, 5, 33))
console.log(getPagination(10, 5, 33))
console.log(getPagination(15, 5, 33))
console.log(getPagination(20, 5, 33))
console.log(getPagination(25, 5, 33))
console.log(getPagination(30, 5, 33))
