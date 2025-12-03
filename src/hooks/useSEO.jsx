import { Helmet } from "@dr.pogodin/react-helmet";

const useSEO = ({ title, description, keywords, canonical }) => {
  return (
    <Helmet>
      {/* Title */}
      {title && <title>{title}</title>}

      {/* Basic SEO */}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}

     
    </Helmet>
  );
};

export default useSEO;
