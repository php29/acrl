import InRoomAmenities from "@components/roomPage/inRoomAmenities";
import RoomImages from "@components/roomPage/roomImages";
import { useRouter } from "next/router";
import roomsdata from "../../data/roomsData";

const RoomPage = () => {
  // use router
  const router = useRouter();
  // { slug id } = router.query  // same as file name [slug].jsx
  const { roomId } = router.query;
  return (
    <>
      <RoomImages data={roomsdata[roomId]} />
      <InRoomAmenities roomData={roomsdata[roomId]} />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { roomId } = params;
  return {
    props: { roomId },
  };
}

export default RoomPage;
