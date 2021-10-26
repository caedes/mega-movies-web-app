import BaseLayout from "../../ds/BaseLayout";
import MovieCard from "../../ds/MovieCard";

export default function HomePage() {
  return (
    <BaseLayout>
      <MovieCard title="Titanic" id={12} />
    </BaseLayout>
  );
}
