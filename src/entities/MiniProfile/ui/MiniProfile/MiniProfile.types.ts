export interface MiniProfileProps {
    className?: string;
    name: string
    surname?: string
    avatar?: string
    telegram?: string
    github?: string
    resume?: string
}

export interface MiniProfileLinks {
    id: number,
    title: string,
    src: string
}