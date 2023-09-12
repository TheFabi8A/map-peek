import { ChildrenPropTypes } from "../../../PropTypes";

Main.propTypes = {
  children: ChildrenPropTypes,
};

export default function Main({ children }) {
  return (
    <main className="mx-auto max-w-[1440px] columns-xs p-4 pb-20 lg:columns-3xs 2xl:columns-xs">
      {children}
    </main>
  );
}
