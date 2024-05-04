import { createResolver, defineIntegration } from "astro-integration-kit";
import "astro-integration-kit/types/db";
import i18next from "i18next"

export const integration = defineIntegration({
  name: "package-name",
  setup() {
	const {resolve} = createResolver(import.meta.url)
	i18next.init({ lng: "en", resources: {en: {translation: {"astroTranslated": "Astro!!!"}}}})
    return {
      hooks: {
        "astro:db:setup": ({ extendDb }) => {
			// The seed may need to be created dynamically
          extendDb({ configEntrypoint: resolve('./db/config') });
        },
      },
    };
  },
});
