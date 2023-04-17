export enum UserRole {
  ADMIN,
  REGULAR,
}

export interface UserEntity {
  _id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
}
export interface AuthState {
  loading: boolean
  user: UserEntity | null
  accessToken: string | null
}

export interface LoginRequestPayload {
  email: string
  password: string
}

export interface GoogleLoginRequestPayload {
  idToken: string
}

export interface RegisterRequestPayload {
  name: string
  email: string
  password: string
}

export interface BaseResponse {
  success?: boolean
  error?: string
  message?: string
}
export interface LoginResponse extends BaseResponse {
  accessToken: string
  user: UserEntity
}

export type RegisterResponse = LoginResponse

export interface SendSMSRequestPayload {
  receivers: string[]
  smsBody: string
}

export interface ApiKeyEntity {
  _id: string
  apiKey: string
  user: UserEntity
}

export interface DeviceEntity {
  _id: string
  user: UserEntity
  enabled: boolean
  fcmToken: string
  brand: string
  manufacturer: string
  model: string
}