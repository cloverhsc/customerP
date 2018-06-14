export class BaseSettingOption<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  type: string;
  constructor(options: {
    value?: T | any,
    key?: string,
    label?: string,
    required?: boolean,
    type?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.type = options.type || '';
  }
}


export class InputOption extends BaseSettingOption<string> {
  placeholder: string;
  constructor(options: {} = {}) {
    super(options);
    this.type = 'text';
    this.placeholder = options['placeholder'] || '';
  }
}

export class DropOption extends BaseSettingOption<string> {
  options: { title: string, value: string } [] = [];
  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.type = 'select';
  }
}

export class EmailOption extends BaseSettingOption<string> {
  placeholder = 'email';
  constructor(options: {} = {}) {
    super(options);
    this.type = 'email';
  }
}

export class CheckboxOption extends BaseSettingOption<boolean> {
  constructor(options: {} = {} ) {
    super(options);
    this.type = 'checkbox';
  }
}

export class RadioOption extends BaseSettingOption<string> {
  options: { title: string, value: string } [] = [];
  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.type = 'radio';
  }
}

export class SliderBar extends BaseSettingOption<number> {
  min: number;
  max: number;
  constructor(options: {} = {} ) {
    super(options);
    this.min = options['min'] || 0;
    this.max = options['max'] || 0;
    this.type = 'sliderbar';
  }
}

export class SlideToggle extends BaseSettingOption<boolean> {
  constructor(options: {} = {}) {
    super(options);
    this.type = 'slidetoggle';
  }
}
