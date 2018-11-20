import { isUsernameValid, isEmailValid, isPasswordValid } from '../inputValidate'

describe('InputValidate', () => {
  describe('isUsernameValid', () => {
    it('should be defined', () => {
      expect(isUsernameValid).toBeDefined()
    })
    it('Username must be alphanumeric and with length of 4 - 20', () => {
      expect(isUsernameValid('111')).toEqual(false)
      expect(isUsernameValid('1111')).toEqual(true)
      expect(isUsernameValid('11111111111111111111')).toEqual(true)
      expect(isUsernameValid('111111111111111111111')).toEqual(false)
      expect(isUsernameValid('aaa')).toEqual(false)
      expect(isUsernameValid('aaaa')).toEqual(true)
      expect(isUsernameValid('aaaaaaaaaaaaaaaaaaaa')).toEqual(true)
      expect(isUsernameValid('aaaaaaaaaaaaaaaaaaaaa')).toEqual(false)
      expect(isUsernameValid('AAA')).toEqual(false)
      expect(isUsernameValid('AAAA')).toEqual(true)
      expect(isUsernameValid('AAAAAAAAAAAAAAAAAAAA')).toEqual(true)
      expect(isUsernameValid('AAAAAAAAAAAAAAAAAAAAA')).toEqual(false)
      expect(isUsernameValid('11a')).toEqual(false)
      expect(isUsernameValid('11aa')).toEqual(true)
      expect(isUsernameValid('1111111111aaaaaaaaaa')).toEqual(true)
      expect(isUsernameValid('1111111111111111111aa')).toEqual(false)
    })
  })
  describe('isEmailValid', () => {
    it('should be defined', () => {
      expect(isEmailValid).toBeDefined()
    })
    it('Email must be syntactically correct and not longer than 50 characters', () => {
      expect(isEmailValid('email@mail.com')).toEqual(true)
      expect(isEmailValid('@mail.com')).toEqual(false)
      expect(isEmailValid('email@.com')).toEqual(false)
      expect(isEmailValid('email@mail.xx')).toEqual(true)
      expect(isEmailValid('email@mail.')).toEqual(false)
      expect(isEmailValid('emailmail.xx')).toEqual(false)
      expect(isEmailValid('ema@il@mail.com')).toEqual(false)
      expect(isEmailValid('email111111111111111111111111111111111111@mail.com')).toEqual(true)
      expect(isEmailValid('email111111111111111111111111111111111111111@mail.com')).toEqual(false)
    })
  })
  describe('isPasswordValid', () => {
    it('should be defined', () => {
      expect(isPasswordValid).toBeDefined()
    })
    it('Password must be at least 8 characters long and not exceed 20 characters', () => {
      expect(isPasswordValid('1111111')).toEqual(false)
      expect(isPasswordValid('11111111')).toEqual(true)
      expect(isPasswordValid('11111111111111111111')).toEqual(true)
      expect(isPasswordValid('111111111111111111111')).toEqual(false)
    })
  })
})