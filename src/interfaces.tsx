
export interface SquareProps {
    value: string | null,
    onClick: () => void,
}

export interface BoardState {
    squares: Array<string|null>
    winner: string | null,
    xIsNext: boolean
}

