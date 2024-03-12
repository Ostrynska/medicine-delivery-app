export const getShops = state => state.shops.items;

export const getDrugsList = state => state.shops.drugsList;

export const getLoading = ({ shops }) => shops.loading;

export const getError = state => state.shops.error;
