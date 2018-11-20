import {
  Register,
  RegisterRequest,
  RegisterSucceed,
  RegisterFailed,
} from '../actions';

describe('LoginPage actions', () => {
  describe('Register', () => {
    it('should be defined', () => {
      expect(Register).toBeDefined()
    })
    it('has payload', () => {
      const action = Register({})
      expect(action.payload).toBeDefined()
    })
    it('has username in payload', () => {
      const action = Register({ username: 'username' })
      expect(action.payload.username).toEqual('username')
    })
    it('has email in payload', () => {
      const action = Register({ email: 'email' })
      expect(action.payload.email).toEqual('email')
    })
    it('has password in payload', () => {
      const action = Register({ password: 'password' })
      expect(action.payload.password).toEqual('password')
    })
  })
  describe('RegisterRequest', () => {
    it('should be defined', () => {
      expect(RegisterRequest).toBeDefined()
    })
  })
  describe('RegisterSucceed', () => {
    it('should be defined', () => {
      expect(RegisterSucceed).toBeDefined()
    })
  })
  describe('RegisterFailed', () => {
    it('should be defined', () => {
      expect(RegisterFailed).toBeDefined()
    })
    it('should have err', () => {
      const action = RegisterFailed({ err: 'This is error' })
      expect(action.err).toEqual('This is error')
    })
  })
});
