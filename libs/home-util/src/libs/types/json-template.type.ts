import {
  BeautySubFeatureComponent,
  CodeSubFeatureComponent,
  TextSubFeatureComponent,
  ViewerSubFeatureComponent,
} from '@beautify-json/home-sub-feature';

export type JsonTemplateType =
  | ViewerSubFeatureComponent
  | BeautySubFeatureComponent
  | TextSubFeatureComponent
  | CodeSubFeatureComponent;
