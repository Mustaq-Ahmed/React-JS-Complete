
export const filterSearchDataHandler = (searchTxt, allRestaurants) => {
    const filteredSearchData = allRestaurants.filter((r) => r?.data?.name?.toLowerCase().includes(searchTxt.toLowerCase()));
    
    return filteredSearchData;
}