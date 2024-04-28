const checkValid = (value) => {
  return value === 0 || value === null || value === undefined || value === ""
    ? "bilinmiyor"
    : value;
};

export default checkValid;
