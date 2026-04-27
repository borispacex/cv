export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
    demoLink: string;
    githubLink: string;
    details: string;
    features: string[];
}

export type Category = 'all' | 'articles' | 'web' | 'api';
