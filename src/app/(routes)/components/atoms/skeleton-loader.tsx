import ContentLoader from "react-content-loader";

const SkeletonHeroSection: React.FC = () => (
  <ContentLoader>
    <rect x="0" y="0" rx="5" ry="5" width="100%" height="200" />
  </ContentLoader>
);

const SkeletonBrandMarque: React.FC = () => (
  <ContentLoader>
    <rect x="0" y="0" rx="5" ry="5" width="100%" height="50" />
  </ContentLoader>
);

const SkeletonCategories: React.FC = () => (
  <ContentLoader>
    <rect x="0" y="0" rx="5" ry="5" width="100%" height="150" />
  </ContentLoader>
);

const SkeletonFeature: React.FC = () => (
  <ContentLoader>
    <rect x="0" y="0" rx="5" ry="5" width="100%" height="150" />
  </ContentLoader>
);
const SkeletonAbout: React.FC = () => (
  <ContentLoader>
    <rect x="0" y="0" rx="5" ry="5" width="100%" height="150" />
  </ContentLoader>
);

const SkeletonTestimonial: React.FC = () => (
  <ContentLoader>
    <rect x="0" y="0" rx="5" ry="5" width="100%" height="150" />
  </ContentLoader>
);



const SkeletonBlog: React.FC = () => (
  <ContentLoader>
    <rect x="0" y="0" rx="5" ry="5" width="100%" height="150" />
  </ContentLoader>
);

export { SkeletonHeroSection, SkeletonBrandMarque, SkeletonCategories,SkeletonAbout, SkeletonBlog, SkeletonFeature, SkeletonTestimonial };
