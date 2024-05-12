/* eslint-disable no-unused-vars */
export const hygraphApiKey = process.env.NEXT_PUBLIC_HYGRAPH_API_KEY || '';
export const hygraphApi = process.env.NEXT_PUBLIC_HYGRAPH_API || '';
export const webpageUrl = 'https://mentalrecovery.co';

export const breakpoint = {
  md: 1024,
  sm: 700,
};

export const maxContainerWidth = 1290;

export const headerHeight = 75;
export const headerHeightSm = 60;

export const mainAnimationDuration = 2000;

export const scrollbarWidth = 14;

export const COLORS = {
  primitives_white: '#FEFEFE',
  primitives_grey: '#FEFEFE',
  primitives_green: '#80F675',
  primitives_blue: '#E1E2FF',
  primitives_light_blue: '#D8F4F6',
  text_primary: '#1D1D46',
  text_secondary: '#6C6C6C',
  text_secondary_light: '#888888',
  text_interactive: '#9BFB92',
  text_blue_label_primary: '#096D76',
  text_interactive_hover: '#9BFB92',
  text_tags: '#3944B8',
  background_background_white: '#FFFFFF',
  background_background_grey: '#FEFEFE',
  background_background_grey_light: '#FAFAFA',
  background_blue: '#D7E3FF',
  background_blue_hover: '#F1FAFB',
  background_yellow_light: '#FFF7CB',
  background_purple: '#F1CBFFB2',
  background_blue_active: '#D8F4F6',
  background_interactive: '#9BFB92',
  background_interactive_hover: '#80F675',
  background_tags: '#F6F6FF',
  background_tags_hover: '#E1E2FF',
  border: '#E7E7E7',
  stroke_blue: '#9EE4EB',
  stroke_tags: '#B2B4FC',
  transparent: 'transparent',
};

// CSS VARIABLES
export enum Colors {
  primitives_white = 'var(--color-primitives-white)',
  primitives_grey = 'var(--color-primitives-grey)',
  primitives_green = 'var(--color-primitives-green)',
  primitives_blue = 'var(--color-primitives-blue)',
  primitives_light_blue = 'var(--color-primitives-light-blue)',
  text_primary = 'var(--color-text-primary)',
  text_secondary = 'var(--color-text-secondary)',
  text_secondary_light = 'var(--color-text-secondary-light)',
  text_interactive = 'var(--color-text-interactive)',
  text_blue_label_primary = 'var(--color-text-blue-label-primary)',
  text_interactive_hover = 'var(--color-text-interactive-hover)',
  text_tags = 'var(--color-text-tags)',
  background_background_white = 'var(--color-background-background-white)',
  background_background_grey = 'var(--color-background-background-grey)',
  background_background_grey_light = 'var(--color-background-background-grey-light)',
  background_blue = 'var(--color-background-blue)',
  background_blue_hover = 'var(--color-background-blue-hover)',
  background_yellow_light = 'var(--color-background-yellow-light)',
  background_purple = 'var(--color-background-purple)',
  background_blue_active = 'var(--color-background-blue-active)',
  background_interactive = 'var(--color-background-interactive)',
  background_interactive_hover = 'var(--color-background-interactive-hover)',
  background_tags = 'var(--color-background-tags)',
  background_tags_hover = 'var(--color-background-tags-hover)',
  border = 'var(--color-border)',
  stroke_blue = 'var(--color-stroke-blue)',
  stroke_tags = 'var(--color-stroke-tags)',
  transparent = 'var(--color-transparent)',
}
