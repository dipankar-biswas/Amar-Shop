import { PageSet } from "./PageSet";

const SearchPage = async({searchParams}) => {
  const resolvedParams = await searchParams;
  const categorySlug = resolvedParams.category;
  const categorySearch = resolvedParams.search?.toLowerCase() ?? "";
  return (
    // <>Check: {categorySlug} : {categorySearch}</>
    <PageSet category={categorySlug} searchTerm={categorySearch} />
  );
};

export default SearchPage;
