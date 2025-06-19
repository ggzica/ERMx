export function handleApiError(err, defaultMessage = "Something went wrong") {
  if (!err) return defaultMessage;
  if (err?.response?.data?.error) {
    return err.response.data.error;
  }
  if (err?.error?.message) {
    return err.error.message;
  }
  if (err?.message) {
    return err.message;
  }

  return defaultMessage;
}
