export interface Option {
    value: string | number | boolean,
    label: string,
    option: {
        selectedOption: (selected: boolean) => void
    }
}