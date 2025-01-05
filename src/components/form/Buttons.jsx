import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";

const Buttons = ({ text, isPending, type }) => {
  return (
    <Button type={type} disabled={isPending} className="capitalize mt-2">
      {isPending ? (
        <>
          <LoaderCircle className="animate-spin" />
          <span>Please wait</span>
        </>
      ) : (
        text
      )}
    </Button>
  );
};
export default Buttons;
