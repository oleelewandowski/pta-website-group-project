import { toast } from "react-toastify";

const TOAST_CONFIG = {
  theme: "light",
  closeOnClick: true,
  pauseOnHover: false,
  position: "bottom-right",
};

const AUTO_CLOSE_MS = 2000;
const WARNING_AUTO_CLOSE_MS = 1000;

export const pendingToast = (message) => {
  const settings = {
    ...TOAST_CONFIG,
    hideProgressBar: false,
    isLoading: true,
  };
  return toast.loading(message, settings);
};

export const successToast = (notification, message) => {
  const settings = {
    ...TOAST_CONFIG,
    hideProgressBar: false,
    render: message,
    type: "success",
    isLoading: false,
    autoClose: AUTO_CLOSE_MS,
  };
  return toast.update(notification, settings);
};

export const errorToast = (notification, message) => {
  const settings = {
    ...TOAST_CONFIG,
    hideProgressBar: false,
    render: message,
    type: "error",
    isLoading: false,
    autoClose: AUTO_CLOSE_MS,
  };
  return toast.update(notification, settings);
};

export const languageChangedToast = (message) => {
  const settings = {
    ...TOAST_CONFIG,
    hideProgressBar: true,
    autoClose: WARNING_AUTO_CLOSE_MS,
  };
  return toast.warn(message, settings);
};

export const articleDeletedToast = (message) => {
  const settings = {
    ...TOAST_CONFIG,
    hideProgressBar: true,
    autoClose: WARNING_AUTO_CLOSE_MS,
  };
  return toast.warn(message, settings);
};

export const logoutToast = (message) => {
  const settings = {
    ...TOAST_CONFIG,
    hideProgressBar: true,
    autoClose: WARNING_AUTO_CLOSE_MS,
  };
  return toast.success(message, settings);
};
