import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.get('homePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(selectHomePageDomain, substate => substate.toJS());

const makeSelectUserData = () => {
  return createSelector((state) => {
    return state.get('loginPage')
  }, (substate) => {
    return substate.toJS().userData
  })
}

export default makeSelectHomePage;
export { selectHomePageDomain, makeSelectUserData };
