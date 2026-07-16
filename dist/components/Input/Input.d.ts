import { default as React } from 'react';
import { Size } from '../../types/common';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    required?: boolean;
    helperText?: string;
    error?: string;
    size?: Size;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
