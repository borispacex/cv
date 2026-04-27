export interface NavbarProps {
    theme: Theme;
}

export type Theme = 'light' | 'dark';

export type NavLink = {
    id: string;
    label: string;
};