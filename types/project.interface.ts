export interface Project {
  id?: number | undefined;
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
    placeholder: string;
  };
  logo?: string | Blob | null;
}
