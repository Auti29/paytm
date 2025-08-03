

export interface iconProps {
    size: "sm" | "md" | "lg" | "xl" | "2xl"
}

export const sizeVal: Record<iconProps["size"], string> = {
    "sm": "h-4 w-4", 
    "md": "h-6 w-6", 
    "lg": "h-8 w-8", 
    "xl": "h-10 w-10", 
    "2xl": "h-12 w-12", 
}