export interface IComponentProps {
  selector: string;
}

export interface IInputProps extends IComponentProps { }

export interface IListProps extends IComponentProps {
  optionSelector?: string,
  selectedOptionSelector?: string;
}
