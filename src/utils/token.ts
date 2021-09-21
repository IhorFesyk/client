export const saveAccessToken = (token: string): void => {
  document.cookie = `accessToken=${token}`
}

export const delAccessToken = () => {
  document.cookie = "accessToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
}

export const getToken = () => {
  const cookies = document.cookie.split(";")
  const temp = cookies.filter((cookie) => cookie.includes("accessToken="))

  if (temp.length === 0) {
    return ""
  }

  const token = temp[0].split("accessToken=")[1]
  return token
}

export default getToken
