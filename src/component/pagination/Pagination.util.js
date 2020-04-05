const nextPage = (currentPage, setPage) =>{
    if(currentPage<3)
   return setPage(currentPage+1);
}

const previousPage = (currentPage ,setPage) =>{
    if(currentPage>0){
        return setPage(currentPage-1);
    }
}

export {nextPage, previousPage};