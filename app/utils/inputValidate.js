export function isUsernameValid(input) {
  const usernameRegx = /^([a-zA-Z0-9]){4,20}$/
  return usernameRegx.test(input)
}

export function isEmailValid(input) {
  const emailRegx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  const lengthLimit = input.length >= 1 && input.length <= 50
  return emailRegx.test(input) && lengthLimit
}

export function isPasswordValid(input) {
  return input.length >= 8 && input.length <= 20
}