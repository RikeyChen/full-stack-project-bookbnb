const selectListingsByKeyType = (listings, keyType, value) => Object.values(listings).filter(lst => lst.keyType === value);

export default selectListingsByKeyType;
