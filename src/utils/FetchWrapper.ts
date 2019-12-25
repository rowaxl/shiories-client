import fetch from 'isomorphic-unfetch'

const wrapper = <T>(task: Promise<Response>): Promise<T> =>
  new Promise(
    (resolve, reject) => task
      .then(response => response.json())
      .then(body => resolve(body))
      .catch(error => reject(error))
  )

const fetchWrapper = async <T = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> => {
  return wrapper<T>(fetch(input, init))
}

export default fetchWrapper