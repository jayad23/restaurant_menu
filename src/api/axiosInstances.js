import axios from "axios"
// import { refreshToken } from "store/auth/thunks"
// import { getRefreshToken, getToken } from "utility/storage/auth"

//let store;

export const injectStore = (_store) => {
  store = _store
}

// ------------------- //
// Annonymous Instance //
// ------------------- //

const getAnonInstance = (baseUrl) => {
  const anonInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      common: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
        accept: "*/*"
      }
    }
  })

  anonInstance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  anonInstance.interceptors.request.use(async (config) => {
    return config
  })

  return anonInstance
}

// ---------------------- //
// Authenticated Instance //
// ---------------------- //

const getAuthInstance = (baseUrl) => {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      common: {
        Authorization: `Bearer ${getToken()?.replace(/['"]+/g, "")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": `${getToken()?.replace(/['"]+/g, "")}`,
        // "x-refresh-token": `${getRefreshToken()?.replace(/['"]+/g, "")}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept"
      }
    }
  })

  axiosInstance.interceptors.response.use(
    (response) => {
      // logStep("request result: " + JSON.stringify(response.data));
      // ** Get token from localStorage
      const accessToken = getToken()?.replace(/['"]+/g, "")

      // ** If token is present add it to request's Authorization Header
      if (accessToken) {
        // ** eslint-disable-next-line no-param-reassign
        response.headers.Authorization = `${process.env.REACT_APP_TOKEN_TYPE} ${accessToken}`
      }
      return response
    },
    (error) => {
      const { config, response } = error
      console.log(config)
      if (response && response.status === 401) {
        // store.dispatch(refreshToken(getRefreshToken() || ""));
      }
      // Any status codes that falls outside the range of 2xx cause function to trigger
      // Do something with response error
      // handleErrorLogger("request error: " + JSON.stringify(error.response));
      return Promise.reject(error)
    }
  )
  // return axiosInstance;
  axiosInstance.interceptors.request.use(async (config) => {
    const accessToken = getToken()?.replace(/['"]+/g, "")
    if (accessToken) config.headers.Authorization = `${process.env.REACT_APP_TOKEN_TYPE} ${accessToken}`
    return config
  })

  return axiosInstance
}

export const ejectInterceptor = (instance, interceptor) => {
  instance.interceptors.request.eject(interceptor)
}

export const axiosAnonInstance = getAnonInstance(
  process.env.REACT_APP_BE_API_URL
)
export const axiosAuthInstance = getAuthInstance(
  process.env.REACT_APP_BE_API_URL
)

