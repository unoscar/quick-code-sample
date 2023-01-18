import { FC, HTMLAttributes, ElementType } from 'react';
import Link from 'next/link';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  /**
   * Is the button disabled?
   */
  disabled?: boolean,
  /**
   * If provided the button will be a next/link component.
   */
  link?: string,
  /**
   * If the button state should be loading and the loading content shown
   */
  loading?: boolean,
  /**
   * The content the button will show when loading
   */
  loadingContent?: ElementType,
  /**
   * The type of button
   */
  type?: `button` | `submit` | `reset`
}

/**
 * A headless button component.
 *
 * @name Button
 * @description A headless button component.
 * @param {string} link - The link to navigate to.
 * @param {boolean} loading - Whether the button is loading or not.
 * @param {string} loadingContent - The content to display when the button is loading.
 * @param {string} type - The type of button.
 * @returns {JSX.Element}
 */
export const Button:FC<ButtonProps> = ({
  link,
  type,
  loading,
  loadingContent: LoadingContent = () => null,
  children,
  ...props
}): JSX.Element => {
  if (link) {
    return (
      <Link
        href={link}
      >
        <a
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
          href={link}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {loading ? <LoadingContent /> : children}
    </button>
  );
};

Button.defaultProps = {
  disabled: undefined,
  link: undefined,
  loading: false,
  loadingContent: undefined,
  type: `button`,
};
