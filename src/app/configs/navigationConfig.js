import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import { HiAcademicCap } from "react-icons/hi";

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'example-component',
    title: 'Example',
    translate: 'EXAMPLE',
    type: 'item',
    icon: 'heroicons-outline:star',
    url: 'example',
  },
  {
    id: 'test-component',
    title: 'Test',
    translate: 'Test',
    type: 'item',
    // icon: <HiAcademicCap />,
    icon: 'heroicons-outline:moon',
    url: 'test',
  },
];

export default navigationConfig;
