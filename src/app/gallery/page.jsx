import Heading from "../components/Heading/Heading.jsx";
import Grid from "../components/Grid/Grid.jsx";

const Gallery = () => {
  return (
    <div className="w-full flex justify-center p-4">
      <div className="mt-32 w-11/12">
        <Heading heading="Gallery" />
        <Grid />
      </div>
    </div>
  );
};

export const metadata = {
  title: "Gallery - Royal Seoul House",
  description:
    "Discover our vibrant gallery of authentic Korean BBQ dishes and dining experiences at Royal Seoul House in Vancouver.",
};
export default Gallery;
