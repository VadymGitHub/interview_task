import { Locator, ElementHandle } from '@playwright/test'
import { ContextHelper } from '../helpers'
import {IComponentProps} from "../interfaces/component.props"

export default class Component {
  constructor(public props: IComponentProps) {
    this.props = props
  }

  get selector(): string {
    return this.props.selector
  }

  get element(): Locator {
    return ContextHelper.page.locator(this.selector)
  }
}
