import { jwtDecode } from "jwt-decode";

export const pageLink = (title, href) => {
  return {
    title,
    href,
  };
};
export const dashboardMenu = (segment, title, icon) => {
  return {
    segment,
    title,
    icon,
  };
};

export const tableRow = (field, value) => {
  return {
    field,
    value,
  };
};

export function extractedLoginDetails(formData) {
  return {
    username: formData.get("username"),
    password: formData.get("password"),
  };
}

export function extractedSignupDetails(formData) {
  return {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  };
}

export function extractedToken(token) {
  const decodedToken = jwtDecode(token);
  return decodedToken;
}
