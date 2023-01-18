import {
  Menu,
  ButtonProps,
  MenuProps,
  ItemsProps,
  ItemProps,
} from '../../headless/menu';
import { FC } from "react";
import { twMerge } from "tailwind-merge";

/**
 * @name Button
 * @description A styled button component for the menu component.
 * @param {React.ElementType} as - The element to render the button as.
 * @param {React.ReactNode} children - The children of the button.
 * @returns {React.FC<ButtonProps>}
 */
export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <Menu.Button
    {...props}
  >
    {children}
  </Menu.Button>
);

/**
 * @name Items
 * @description A styled items component for the menu component.
 * @param {string} className - The className of the items.
 * @param {React.ReactNode} children - The children of the items.
 * @returns {React.FC<ItemsProps>}
 */
export const Items: FC<ItemsProps> = ({ children, className, ...props }) => (
  <Menu.Items
    className={twMerge(`z-10 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`, className || ``)}
    {...props}
  >
    {children}
  </Menu.Items>
);

export const Item: FC<ItemProps> = ({ children, className, ...props }) => (
  <Menu.Item
    className={twMerge(`flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900`, className || ``)}
    {...props}
  >
    {children}
  </Menu.Item>
);

const InMenu: FC<MenuProps> = ({ children, ...props }) => (
  <Menu
    className={``}
    {...props}
  >
    {children}
  </Menu>
);

const group = Object.assign(InMenu, {
  Button,
  Item,
  Items,
});

export { group as Menu };
