import { IPropertyFieldViewPickerPropsInternal } from './IPropertyFieldViewPicker';
import { IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

/**
 * PropertyFieldViewPickerHost properties interface
 */
export interface IPropertyFieldViewPickerHostProps extends IPropertyFieldViewPickerPropsInternal {
  onChange: (targetProperty?: string, newValue?: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
}

/**
 * PropertyFieldViewPickerHost state interface
 */
export interface IPropertyFieldViewPickerHostState {

  results: IDropdownOption[];
  selectedKey?: string;
  errorMessage?: string;
}
