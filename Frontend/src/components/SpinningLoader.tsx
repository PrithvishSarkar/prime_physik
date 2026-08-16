import { Spinner } from "./ui/spinner";

interface PropInterface {
  size: 4 | 24;
  color?: "dark" | "light";
}

const SpinningLoader = ({ size, color = "light" }: PropInterface) => {
  return (
    <main>
      <Spinner
        className={`m-auto ${size === 4 ? "size-4" : "size-24 my-16"}`}
        color={color === "dark" ? "#000" : "#12d393"}
      />
    </main>
  );
};

export default SpinningLoader;
