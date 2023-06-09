export const validateInputs = async (data) => {
  const { title, image, description, snippet, date } = data;

  if (!title || title.trim() < 5) {
    return {
      message:
        "Check out the title! It can not be empty and it has to be at least 5 characters long! ",
      isValid: false,
    };
  } else if (!image || !image.includes(".")) {
    return {
      message:
        "Check out the snippet! It can not be empty and it has to include a dot char. ",
      isValid: false,
    };
  } else if (!description || description.trim() < 30) {
    return {
      message:
        "Check out the description! It can not be empty and it has to be at least 30 characters long! ",
      isValid: false,
    };
  } else if (!snippet || snippet.trim() < 20) {
    return {
      message:
        "Check out the snippet! It can not be empty and it has to be at least 20 characters long! ",
      isValid: false,
    };
  } else if (!date) {
    return {
      message:
        "Check out the date! It can not be empty and it has to be in 2 allowed formats (YYYY-MM-DD / DD-MM-YYYY)! ",
      isValid: false,
    };
  }

  return { isValid: true };
};
