import { ChildrenPropTypes } from "../../../PropTypes";

Main.propTypes = {
  children: ChildrenPropTypes,
};

export default function Main({ children }) {
  return (
    <main className="flex min-h-[calc(100dvh_-_65px)] max-w-[1920px] flex-wrap justify-center gap-4 p-4 pb-20">
      {children}
    </main>
  );
}
