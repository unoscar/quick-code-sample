import { ButtonProps, Button as HeadlessButton } from '../../headless/button';
import { FC } from 'react';
import { LoadingFour } from '@icon-park/react';
import { twMerge } from "tailwind-merge";

type ButtonType = `primary` | `secondary` | `tertiary`;
type ButtonSize = `sm` | `md` | `lg` | `xl`;
type ButtonVariant = `success` | `warning` | `danger` | `info` | `primary` | `secondary` | `base`;

export interface UIButtonProps extends ButtonProps {
  /**
    * The type of button
    */
  buttonType: ButtonType,
  /**
    * The size of button.
    */
  size: ButtonSize,
  /**
    * The variant of button.
    */
  variant: ButtonVariant
}

interface VariantValues {
  [ButtonVariant: string]: string
}

interface ColorVariantsInterface {
  [ButtonType: string]: VariantValues
}

/**
 * @component
 * @name LoadingContent
 * @description Loading content for button
 * @returns {JSX.Element}
 */
const LoadingContent: FC = () => (
  <span
    className={`animate-spin`}
  >
    <LoadingFour
      fill={`#333`}
      size={`20`}
      strokeWidth={3}
      theme={`outline`}
    />
  </span>
);

/**
 * @function
 * @name getButtonClasses
 * @description Get the button classes based on the button type, size and variant.
 * @param {string} buttonType - The type of button.
 * @param {string} size - The size of button.
 * @param {string} variant - The variant of button.
 * @param {string} className - The className of button.
 * @returns {string}
 */
export const getButtonClasses = ({ size, buttonType, variant, className }: Pick<UIButtonProps, "size" | "buttonType" | "variant" | "className">) => {
  let sizeStyles;
  const baseStyles = `flex space-x-3 font-medium focus:outline-none rounded-md focus:ring-2 focus:ring-offset-2`;
  const disableStyles = `disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:ring-gray-500 disabled:border-none`;

  const colorVariants: ColorVariantsInterface = {
    primary: {
      base: `bg-neutral-600 text-white hover:bg-neutral-700 focus:ring-neutral-500 active:bg-neutral-800`,
      danger: `bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 active:bg-red-800`,
      info: `bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500 active:bg-cyan-800`,
      primary: `bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 active:bg-indigo-800`,
      secondary: `bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500 active:bg-teal-800`,
      success: `bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500 active:bg-emerald-800`,
      warning: `bg-amber-600 text-white hover:bg-amber-700 focus:ring-amber-500 active:bg-amber-800`,
    },
    secondary: {
      base: `bg-neutral-100 text-neutral-700 hover:bg-neutral-200 focus:ring-neutral-500 active:bg-neutral-300`,
      danger: `bg-red-100 text-red-700 hover:bg-red-200 focus:ring-red-500 active:bg-red-300`,
      info: `bg-cyan-100 text-cyan-700 hover:bg-cyan-200 focus:ring-cyan-500 active:bg-cyan-300`,
      primary: `bg-indigo-100 text-indigo-700 hover:bg-indigo-200 focus:ring-indigo-500 active:bg-indigo-300`,
      secondary: `bg-teal-100 text-teal-700 hover:bg-teal-200 focus:ring-teal-500 active:bg-teal-300`,
      success: `bg-emerald-100 text-emerald-700 hover:bg-emerald-200 focus:ring-emerald-500 active:bg-emerald-300`,
      warning: `bg-amber-100 text-amber-700 hover:bg-amber-200 focus:ring-amber-500 active:bg-amber-300`,
    },
    tertiary: {
      base: `text-neutral-700 focus:ring-neutral-500 active:bg-neutral-500 border-2 border-neutral-500 active:text-white`,
      danger: `text-red-700 focus:ring-red-500 active:bg-red-500 border-2 border-red-500 active:text-white`,
      info: `text-cyan-700 focus:ring-cyan-500 active:bg-cyan-500 border-2 border-cyan-500 active:text-white`,
      primary: `text-indigo-700 focus:ring-indigo-500 active:bg-indigo-500 border-2 border-indigo-500 active:text-white`,
      secondary: `text-teal-700 focus:ring-teal-500 active:bg-teal-500 border-2 border-teal-500 active:text-white`,
      success: `text-emerald-700 focus:ring-emerald-500 active:bg-emerald-500 border-2 border-emerald-500 active:text-white`,
      warning: `text-amber-700 focus:ring-amber-500 active:bg-amber-500 border-2 border-amber-500 active:text-white`,
    },
  };

  switch (size) {
    case `sm`:
      sizeStyles = `px-3 py-2 text-sm`;
      break;
    case `lg`:
      sizeStyles = `px-4 py-2 text-base`;
      break;
    case `xl`:
      sizeStyles = `px-6 py-3 text-base`;
      break;
    case `md`:
    default:
      sizeStyles = `px-4 py-2 text-sm`;
      break;
  }

  return twMerge(
    baseStyles,
    sizeStyles,
    colorVariants[buttonType][variant],
    disableStyles,
    className,
  );
}

/**
 * A stylized button using the headless button component.
 *
 * @component
 * @name Button
 * @description A Stylized component using a headless button component.
 * @prop {string} buttonType - The type of button.
 * @prop {string} size - The size of the button.
 * @prop {string} variant - The variant of the button.
 * @returns {JSX.Element}
 */
export const Button: FC<UIButtonProps> = ({
  size = `md`,
  buttonType = `primary`,
  variant = `primary`,
  className,
  loading,
  children,
  ...props
}) => (
  <HeadlessButton
    {...props}
    className={getButtonClasses({ size, buttonType, variant, className })}
    loading={loading}
    loadingContent={LoadingContent}
  >
    {children}
  </HeadlessButton>
);

export default Button;
