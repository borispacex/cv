export type ContactItem = {
    icon: React.ReactNode;
    title: string;
    value: string;
    link: string;
};

export type AboutData = {
    image: string;
    description: string;
    bio?: string;
    contactInfo:ContactItem[];
};