
import Card from './Card'

const Page2 = () => {
  return (
    <div className="flex items-center  justify-between gap-5 p-4 ">
      <Card
        title="independency"
        desc="Explore the creativity of independent designers from around the globe."
      />
      <Card
        title="uniquity"
        desc="Discover the charm of unique pieces that stand out effortlessly.."
      />
      <Card
        title="quality"
        desc="Experience unparalleled craftsmanship and attention to details."
      />
      <Card
        title="sustainability"
        desc="Embrace eco-conscious fashion choices without compromising on style."
      />
    </div>
  );
}

export default Page2