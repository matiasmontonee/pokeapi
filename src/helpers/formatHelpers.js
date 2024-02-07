export const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
};
  
export const capitalizeFirstLetterArray = (words) => {
    return words.split(', ').map(word => capitalizeFirstLetter(word)).join(', ');
};  