export interface Project {
  title: {
    nl: string;
    en: string;
  };
  description: {
    nl: string;
    en: string;
  };
  url: {
    href: string;
    placeholder: {
      nl: string;
      en: string;
    };
  };
  logo: string | Blob | null;
}
