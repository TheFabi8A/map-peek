import { Link as LinkRouter } from "react-router-dom";
import { Button } from "@nextui-org/button";

export default function NotFoundPage() {
  return (
    <div className="grid place-items-center">
      <div>
        <div className="flex items-center justify-center text-9xl font-extrabold leading-[1.1] text-danger">
          <span>4</span>
          <img
            width="128"
            height="128"
            className="w-[clamp(64px,_35vw,_128px)] select-none"
            src="/android-icon-512x512.png"
            alt="World Icon"
          />
          <span>4</span>
        </div>
        <h1 className="text-center text-[clamp(32px,_7vw,_60px)] font-extrabold leading-[1.1] text-danger">
          Error page not found
        </h1>
        <p>Sorry, we can&apos;t find the page you&apos;re loking for</p>
        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            color="success"
            className="rounded-lg p-4"
            as={LinkRouter}
            to="/"
          >
            Go back to list of countries 🌎
          </Button>
        </div>
      </div>
    </div>
  );
}
