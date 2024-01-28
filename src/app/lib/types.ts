export type Maps = {
  color: string;
  normal: string;
  roughness: string;
}

export type ContextOptions = {
  hdri: string;
  pickedColor: string;
  spare?: any;
}

export type ContextModel = {
  options: ContextOptions;
  saveOptions: (options: ContextOptions) => void;
}