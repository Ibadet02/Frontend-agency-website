import { RuleSet } from "styled-components";

export interface MainButtonProps {
  text: string;
  textFadesOut?: string;
  styles?: RuleSet<object>;
}

export interface LetsTalkButtonProps {
  title: string;
  path?: string;
  styles?: RuleSet<object>;
}
