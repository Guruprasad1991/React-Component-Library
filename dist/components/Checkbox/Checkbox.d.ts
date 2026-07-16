import { default as React } from 'react';
import { Size } from '../../types/common';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    label?: string;
    description?: string;
    helperText?: string;
    error?: string;
    size?: Size;
    indeterminate?: boolean;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
