import fetch from 'isomorphic-unfetch'

export const FetchClient = async (
  input: RequestInfo,
  init?: RequestInit
) => await fetch(input, init).then(res => res.json())
