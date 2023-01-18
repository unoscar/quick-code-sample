import {
  FC,
  ButtonHTMLAttributes,
  HTMLAttributes,
  createContext,
  JSXElementConstructor,
} from "react";
import { Menu as HeadlessMenu } from '@headlessui/react';
import {
  useFloating,
  shift,
  offset,
  flip,
  Placement,
  autoUpdate,
} from '@floating-ui/react-dom';

const MenuContext = createContext<any>({});

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The element to render the button as. (Default: button)
   */
  as?: keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
  /**
   * The children of the button.
   */
  children: React.ReactNode;
}

/**
 * @name Button
 * @description A headless button component.
 * @param {React.ElementType} as - The element to render the button as.
 * @param {React.ReactNode} children - The children of the button.
 * @returns {React.FC<ButtonProps>}
 */
export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <MenuContext.Consumer>
    {({ reference }) => (
      <HeadlessMenu.Button
        ref={reference}
        {...props}
      >
        {children}
      </HeadlessMenu.Button>
    )}
  </MenuContext.Consumer>
);

Button.defaultProps = {
  as: `button`,
};

export interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The element to render the item as. (Default: button)
   */
  as?: React.ElementType,
  /**
   * The children of the item.
   */
  children: React.ReactNode;
}

/**
 * @name Item
 * @description A headless item component.
 * @param {React.ElementType} as - The element to render the item as.
 * @param {React.ReactNode} children - The children of the item.
 * @returns {React.FC<ItemProps>}
 */
export const Item: FC<ItemProps> = ({ children, as, ...props }) => (
  <HeadlessMenu.Item
    as={as}
    {...props}
  >
    {children}
  </HeadlessMenu.Item>
);

Item.defaultProps = {
  as: `button`,
};

export interface ItemsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The children of the items.
   */
  children: React.ReactNode;
}

/**
 * @name Items
 * @description A headless items component.
 * @param {React.ReactNode} children - The children of the items.
 * @returns {React.FC<ItemsProps>}
 */
export const Items: FC<ItemsProps> = ({ children, ...props }) => (
  <MenuContext.Consumer>
    {({
      x, y, floating, strategy,
    }) => (
      <HeadlessMenu.Items
        ref={floating}
        style={{
          left: x ?? ``,
          position: strategy,
          top: y ?? ``,
        }}
        {...props}
      >
        {children}
      </HeadlessMenu.Items>
    )}
  </MenuContext.Consumer>
);

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The element to render the menu as. (Default: div)
   */
  as?: React.ElementType,
  /**
   * The children of the menu.
   */
  children: React.ReactNode,
  /**
   * The placement of the menu. (Default: bottom-end)
   * Note: The menu will relocation itself if it doesn't fit in the viewport.
   */
  placement?: Placement,
}

/**
 * @name Menu
 * @description A headless menu component.
 * @param {string} as - The element to render the menu as.
 * @param {string} placement - The placement of the menu.
 * @param {React.ReactNode} children - The children of the menu.
 * @returns {React.FC<MenuProps>}
 */
const InMenu: FC<MenuProps> = ({
  children, as, placement, ...props
}) => {
  const floating = useFloating({
    middleware: [
      shift({
        padding: 10,
      }),
      offset({
        crossAxis: 0,
        mainAxis: 5,
      }),
      flip({
        padding: 10,
      }),
    ],
    placement,
    whileElementsMounted: autoUpdate,
  });

  return (
    <MenuContext.Provider
      value={floating}
    >
      <HeadlessMenu
        as={as}
        {...props}
      >
        {children}
      </HeadlessMenu>
    </MenuContext.Provider>
  );
};

InMenu.defaultProps = {
  as: `div`,
  placement: `bottom-end`,
};

const group = Object.assign(InMenu, {
  Button,
  Item,
  Items,
});

export { group as Menu };
