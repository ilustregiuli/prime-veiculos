import business from '../content/settings/business.json';
import general from '../content/settings/general.json';
import theme from '../content/settings/theme.json';
import sections from '../content/settings/sections.json';

export function loadSettings() {
  return {
    business,
    general,
    theme,
    sections
  };
}
