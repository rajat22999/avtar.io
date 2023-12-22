import Image from "next/image";
import { useRouter } from "next/navigation";

const MagicButton = ({ searchQuery }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        if (searchQuery?.length > 0) {
          router.push(`/result?searchQuery=${searchQuery}`);
        }
      }}
      className="create-magic-btn mt-6 cursor-pointer"
    >
      <Image src="/magic-wand.svg" width={24} height={24} alt="Magic Wand" />
      Create magic
    </button>
  );
};

export default MagicButton;
