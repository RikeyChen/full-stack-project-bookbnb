const selectListingsByKeyType = (listings, keyType, value) => listings.filter(lst => lst[keyType] === value);

export default selectListingsByKeyType;
