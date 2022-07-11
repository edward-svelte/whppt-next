export type SiteSettings = {
  visible: boolean;
  activeTab: string;
  settings: {
    twitter: {
      title: string;
      description: string;
      keywords: string[];
    },
    seo: {
      title: string;
      description: string;
      keywords: string[];
    },
    og: {
      title: string;
      description: string;
      keywords: string[];
    }
  }
};

export const SiteSettings = (values) => values as SiteSettings;
