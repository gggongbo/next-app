import * as colors from './colors';
import { media } from './media';

type Colors = Recursive<typeof colors>;
type Media = Recursive<typeof media>;

export interface Theme {
  colors: Colors;
  media: Media;
}

export const theme: Theme = {
  colors,
  media,
};
