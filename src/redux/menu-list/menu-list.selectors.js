import { createSelector } from 'reselect';

const selectMenuList = state => state.menuList;

const selectMenuListItems = createSelector([selectMenuList], menuList => menuList.items);

export const MenuListSelectors = { selectMenuListItems };
