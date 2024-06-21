import { useSearchRestaurants } from "@/api/RestaurantApi";
import SearchResultsInfo from "@/components/SearchResultsInfo";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  const { results, isLoading } = useSearchRestaurants(city);

  if (isLoading) {
    return <span>loading...</span>;
  }

  if (!results?.data || !city) {
    return <span>Results not found</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250_1fr] gap-5">
      <div id="cuisines-list">insert cuisines list here</div>
      <div id="main-content" className="flex flex-col gap-5"></div>
      <SearchResultsInfo total={results.pagination.total} city={city} />
    </div>
  );
};

export default SearchPage;
