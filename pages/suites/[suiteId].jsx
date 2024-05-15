import InRoomAmenities from "@components/roomPage/inRoomAmenities";
import RoomImages from "@components/roomPage/roomImages";
import { useRouter } from "next/router";
import suitesdata from "../../data/suitesData";

const SuitePage = () => {
  // use router
  const router = useRouter();
  // { slug id } = router.query  // same as file name [slug].jsx
  const { suiteId } = router.query;
  return (
    <>
      <RoomImages data={suitesdata[suiteId]} />
      <InRoomAmenities roomData={suitesdata[suiteId]} />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { suiteId } = params;
  return {
    props: { suiteId },
  };
}

export default SuitePage;
