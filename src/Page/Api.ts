import { PageData } from "./Model/Page";
import { WhpptHttp } from "../Api/Http";
import { Domain } from "../App/Model";

export type PageApi = {
  loadFromSlug: ({
    slug,
    collection,
    domain,
  }: {
    slug: string;
    collection: string;
    domain: Domain;
  }) => Promise<PageData>;
  delete: (page: PageData) => Promise<any>;
  checkSlug: ({
    slug,
    collection,
    domain,
  }: {
    slug: string;
    collection?: string;
    domain: Domain;
  }) => Promise<PageData>;
  create: ({
    page,
    collection,
  }: {
    page: PageData;
    collection?: string;
  }) => Promise<PageData>;
};

export type PageApiConstructor = ({ http }: { http: WhpptHttp }) => PageApi;

export const PageApi: PageApiConstructor = ({ http }) => {
  return {
    loadFromSlug: async ({ slug, collection = "pages", domain }) => {
      if (slug.startsWith("/")) slug = slug.replace(/^(\/*)/, "");
      return http.secure.getJson<PageData>({
        path: `/page/load?slug=${slug}&collection=${collection}&domainId=${domain._id}`,
      });
    },
    delete: async (page: PageData) => {
      return http.secure.postJson({
        path: "/page/deletePage",
        data: { _id: page._id },
      });
    },
    checkSlug: async ({ slug, collection = "pages", domain }) => {
      return http.secure.postJson({
        path: "/page/checkSlug",
        data: { slug, collection, domainId: domain._id },
      });
    },
    create: async ({ page, collection = "pages" }) => {
      return http.secure.postJson({
        path: "/page/save",
        data: { page, collection },
      });
    },
  };
};
