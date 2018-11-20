import { Logout, LogoutRequest, LogoutSucceed, LogoutFailed } from '../actions';

describe('HomePage actions', () => {
  describe('Logout', () => {
    it('should be defined', () => {
      expect(Logout).toBeDefined()
    })
  })
  describe('LogoutRequest', () => {
    it('should be defined', () => {
      expect(LogoutRequest).toBeDefined()
    })
  })
  describe('LogoutSucceed', () => {
    it('should be defined', () => {
      expect(LogoutSucceed).toBeDefined()
    })
  })
  describe('LogoutFailed', () => {
    it('should be defined', () => {
      expect(LogoutFailed).toBeDefined()
    })
    it('should have err', () => {
      const action = LogoutFailed({ err: 'This is error' })
      expect(action.err).toEqual('This is error')
    })
  })
});
