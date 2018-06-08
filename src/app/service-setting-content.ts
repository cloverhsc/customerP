export class BaseSettingOption<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  controlType: string;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    controlType?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.controlType = options.controlType || '';
  }
}

export class InputOption extends BaseSettingOption<string> {
  controlType = 'text';
  type: string;
  placeholder: string;
  name: string;
  constructor(options: {} = {}) {
    super(options);
    this.type = 'text';
    this.placeholder = options['placeholder'] || '';
    this.name = options['name'] || 'miscellaneous';
  }
}

export class DropOption extends BaseSettingOption<string> {
  controlType = 'dropdown';
  options: { title: string, value: string, checked: boolean } [] = [];
  type: string;
  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.type = 'select';
  }
}

export class EmailOption extends BaseSettingOption<string> {
  controlType = 'email';
  type = 'email';
  placeholder = 'email';
  name: string;
  constructor(options: {} = {}) {
    super(options);
    this.name = options['name'];
  }
}

export class CheckboxOption extends BaseSettingOption<string> {
  controlType = 'checkbox';
  name: string;
  checked: boolean;
  type: string;
  constructor(options: {} = {} ) {
    super(options);
    this.name = options['name'];
    this.checked = !!options['checked'];
    this.type = 'checkbox';
  }
}

export class RadioOption extends BaseSettingOption<string> {
  controlType = 'radio';
  name: string;
  type: string;
  options: { title: string, value: string, checked: boolean } [] = [];
  constructor(options: {} = {}) {
    super(options);
    this.name = options['name'] || '';
    this.options = options['options'] || [];
    this.type = 'radio';
  }
}

export class SliderOption extends BaseSettingOption<string> {
  controlType = 'slider';
  min: string;
  max: string;
  type: string;
  constructor(options: {} = {} ) {
    super(options);
    this.min = options['min'] || '0';
    this.max = options['max'] || '0';
    this.type = 'slider';
  }
}
