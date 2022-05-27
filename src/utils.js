export const formatText = (text, setError) => {
  try {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] == "[") {
        while (i < text.length) {
          if (text[i] == "]") {
            i++;
            break;
          }
          i++;
        }
      }
      newText += text[i];
    }
    return removeSpacesBeforeCommas(newText, setError);
  } catch (e) {
    setError(e);
  }
};
export const removeTextInParanthesis = (text, setError) => {
  try {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] == "(") {
        while (i < text.length) {
          if (text[i] == ")") {
            i++;
            break;
          }
          i++;
        }
      }
      newText += text[i];
    }
    return removeSpacesBeforeCommas(newText, setError);
  } catch (e) {
    setError(e);
  }
};
export const removeSpacesBeforeCommas = (str, setError) => {
  try {
    let newText = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] == " " && (str[i + 1] == " " || str[i + 1] == ",")) {
        continue;
      }
      newText += str[i];
    }
    return newText;
  } catch (e) {
    setError(e);
  }
};
