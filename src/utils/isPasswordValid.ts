export function isPasswordValid(password: string) {
  if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
    return true;
  }

  return false;
}
