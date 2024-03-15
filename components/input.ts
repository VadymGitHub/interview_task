import Component from "./component"
import {IInputProps} from "../interfaces/component.props"


export default class Input extends Component {
  constructor(props: IInputProps) {
    super(props)
  }

  async setText(text: string): Promise<void> {
    await this.element.fill(text)
  }
}
