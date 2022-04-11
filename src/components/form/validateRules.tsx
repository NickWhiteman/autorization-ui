const loginPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const passwordPattern = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

export const loginOptions = {
    required: 'Please enter your login',
    pattern: {
      value: loginPattern,
      message: 'Enter your email'
    }
};

export const passwordOptions = {
    required: 'Please enter your password', 
    pattern: {
      value: passwordPattern,
      message: 'Enter minimum 6 symbols numbers and letters and one letter Upper register and special symbol "!@#$%^&*"'
    }
}

export const confirmOptions = {
  required: 'Please enter your confirm password', 
  pattern: {
    value: passwordPattern,
    message: 'Enter minimum 6 symbols numbers and letters and one letter Upper register and special symbol "!@#$%^&*"'
  }
}